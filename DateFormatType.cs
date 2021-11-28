using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DateFormatGenerator
{
    using static Program;
    using static DateFormat;

    public enum EscapeBehavior { EscapeFormats, EscapeWords, EscapeAllText}

    public abstract class DateFormatType
    {
        public Dictionary<DateFormat, string> Formats;
        public virtual string CompleteCodeSample (string format) => null;
        public virtual IEnumerable<string> CodeSamples(string format) { yield break; }
        // Escaping of raw text before checking if it matches other formats or needs to be escaped further.
        public virtual string InitialEscape (string rawText) => rawText;
        public virtual bool MustEscapeWord (string word) => Formats.Values.Any(f => word.Contains(f));
        public abstract string EscapeFormatPart(string formatPart);
        public abstract EscapeBehavior EscapeBehavior { get; }
        public virtual string GenerateFormatString (string input)
        {
            Regex formatSpecifier = new Regex(@"(\[\[[a-zA-Z]+\]\])");
            string[] split = formatSpecifier.Split(input);
            List<(string str, bool isRaw)> segments = split.Select(v =>
                formatSpecifier.IsMatch(v) ? (Formats[Enum.Parse<DateFormat>(Regex.Replace(v, @"\[\[([a-zA-Z]+)\]\]", "$1"))], isRaw: false) : (v, isRaw: true)
            ).ToList();
            string outP = "";
            string splitRegex = EscapeBehavior == EscapeBehavior.EscapeWords ?
                "([^a-zA-Z" +
                string.Concat(
                    (from format in Formats.Values
                        from @char in format
                        where !((@char >= 'a' && @char <= 'z') || (@char >= 'A' && @char <= 'Z')) // where it's not an ascii letter
                        orderby @char ascending
                        select @char
                    ).Distinct().Select(c => (c == '-' || c == '^' || c == '\\') ? ("\\" + c) : c.ToString())
                ) + "]+)" : null;
            foreach (var (str, isRaw) in segments)
            {
                if (!isRaw) { outP += str; continue; }

                switch (EscapeBehavior)
                {
                    case EscapeBehavior.EscapeFormats:
                        string finalStr = InitialEscape(str);
                        foreach (var format in Formats.Values)
                            finalStr = finalStr.Replace(format, EscapeFormatPart(format));
                        outP += finalStr;
                        break;
                    case EscapeBehavior.EscapeWords:
                        foreach (string splitPart in Regex.Split(str, splitRegex))
                        {
                            string sPart = InitialEscape(splitPart);
                            if (MustEscapeWord(sPart))
                                sPart = EscapeFormatPart(sPart);
                            outP += sPart;
                        }
                        break;
                    case EscapeBehavior.EscapeAllText:
                        outP += EscapeFormatPart(str);
                        break;
                }
            }
            return outP;
        }
    }
    public class CSDateFormat : DateFormatType
    {
        public override IEnumerable<string> CodeSamples(string format)
        {
            yield return $"date.ToString({ToQuotedString(format)})";
            yield return format.Contains('\\') ? $"date.ToString({ToVerbatimString(format)})" : "";
        }

        public override string InitialEscape(string rawText) => rawText.Replace(@"\", @"\\");

        public override bool MustEscapeWord(string word) =>
            Regex.IsMatch(word, @"[a-zA-Z""']");

        public override string CompleteCodeSample(string format) =>
$@"using System;

DateTime date = DateTime.Now;
Console.WriteLine({CodeSamples(format).Where(s => s != "").Last()});";

        // Escape with '' or "" or \

        public override EscapeBehavior EscapeBehavior => EscapeBehavior.EscapeWords;

        public override string EscapeFormatPart(string formatPart) => formatPart.Length == 1 ? ("\\" + formatPart) : ("'" + formatPart + "'");
    }
    public class JavaDateFormat : DateFormatType
    {
        // Escape with ''

        public override IEnumerable<string> CodeSamples(string format)
        {
            yield return $"date.format(DateTimeFormatter.ofPattern({ToQuotedString(format)}))";
        }

        public override bool MustEscapeWord(string word) =>
            Regex.IsMatch(word, "[a-zA-Z']");

        public override string CompleteCodeSample(string format) =>
$@"import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {{
  public static void main(String[] args) {{
    LocalDateTime date = LocalDateTime.now();
    System.out.println({CodeSamples(format).Where(s => s != "").Last()});
  }}
}}";

        public override EscapeBehavior EscapeBehavior => EscapeBehavior.EscapeWords;

        public override string EscapeFormatPart(string formatPart) => "'" + formatPart + "'";
    }
    public class PHPDateFormat : DateFormatType
    {
        // Escape with \

        public override IEnumerable<string> CodeSamples(string format)
        {
            yield return $"$date->format({ToQuotedString(format)})";
        }

        public override string CompleteCodeSample(string format) =>
$@"<?php
$date = new DateTime();
echo {CodeSamples(format).Where(s => s != "").Last()};
?>";

        public override EscapeBehavior EscapeBehavior => EscapeBehavior.EscapeAllText;

        public override string EscapeFormatPart(string formatPart) =>
            string.Concat(
                formatPart.Select(
                    c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '\\' ? ("\\" + c) : c.ToString()
                )
            );
    }
    public class PythonDateFormat : DateFormatType
    {
        // Escape % with %%

        public override IEnumerable<string> CodeSamples(string format)
        {
            yield return $"date.strftime({ToQuotedString(format)})";
        }

        public override string CompleteCodeSample(string format) =>
$@"from datetime import datetime;

date = datetime.now()

print({CodeSamples(format).Where(s => s != "").Last()})";

        public override EscapeBehavior EscapeBehavior => EscapeBehavior.EscapeAllText;

        public override string EscapeFormatPart(string formatPart) => formatPart.Replace("%", "%%");
    }
    public class LuxonDateFormat : DateFormatType
    {
        // Escape with ''

        public override IEnumerable<string> CodeSamples(string format)
        {
            yield return $"date.toFormat({ToQuotedString(format)})";
            yield return format.Contains("\"") ? $"date.toFormat({ToJSInterpolatedString(format)})" : "";
        }

        public override bool MustEscapeWord(string word) =>
            Regex.IsMatch(word, @"[a-zA-Z']");

        public override string CompleteCodeSample(string format) =>
$@"<script
    src=""https://cdn.jsdelivr.net/npm/luxon@2.1.1/build/global/luxon.min.js""
    integrity=""sha256-vSborW7X9FSJg4XLi1TpwZKTlbN2nP6lHhC0XCNrVwU=""
    crossorigin=""anonymous""
></script>
<script>
    const date = luxon.DateTime.now();
    console.log({CodeSamples(format).Where(s => s != "").Last()});
</script>";

        public override EscapeBehavior EscapeBehavior => EscapeBehavior.EscapeWords;

        public override string EscapeFormatPart(string formatPart) => "'" + formatPart + "'";
    }
    public class CPPDateFormat : DateFormatType
    {
        // Escape % with %%

        public override string CompleteCodeSample(string format) =>
$@"#include <iostream>
#include <iomanip>
#include <ctime>
 
int main()
{{
    std::time_t now = std::time(nullptr);
    std::tm date = *std::localtime(&now);
    std::cout << {CodeSamples(format).Where(s => s != "").Last()};
}}";

        public override IEnumerable<string> CodeSamples(string format)
        {
            yield return $"std::put_time(&date, {ToQuotedString(format)})";
            yield return (format.Contains('\\') || format.Contains('"')) && !format.Contains('(') && !format.Contains(')') ? $@"std::put_time(&date, R""({format})""))" : "";
        }

        public override EscapeBehavior EscapeBehavior => EscapeBehavior.EscapeAllText;

        public override string EscapeFormatPart(string formatPart) => formatPart.Replace("%", "%%");
    }
}
