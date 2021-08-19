﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Bridge.Html5;

namespace DateFormatGenerator
{
    using static DateFormat;
    public enum DateFormat
    {
        yy,   // year_short
        yyyy, // year_long
        M,    // monthnum_short
        MM,   // monthnum_long
        MMM,  // monthname_short
        MMMM, // monthname_long
        d,    // day_short
        dd,   // day_long
        ddd,  // weekday_short
        dddd, // weekday_long
        H,    // hour_24_short
        HH,   // hour_24_long
        h,    // hour_12_short
        hh,   // hour_12_long
        m,    // minute_short
        mm,   // minute_long
        s,    // second_short
        ss,   // second_long
        tt    // AM/PM
    }

    public static class Enum
    {
        public static T Parse<T>(string name) where T : struct, System.Enum =>
            System.Enum.GetValues(typeof(T)).Cast<T>().Zip(System.Enum.GetNames(typeof(T)), (a, b) => (value: a, name: b))
                .Single(t => t.name == name).value;
    }
    public static class Program
    {
        public static readonly Dictionary<string, Dictionary<DateFormat, string>> langs = new Dictionary<string, Dictionary<DateFormat, string>>()
        {
            ["C#"] = new Dictionary<DateFormat, string>
            {
                [yy] = "yy",
                [yyyy] = "yyyy",
                [M] = "M",
                [MM] = "MM",
                [MMM] = "MMM",
                [MMMM] = "MMMM",
                [d] = "d",
                [dd] = "dd",
                [ddd] = "ddd",
                [dddd] = "dddd",
                [H] = "H",
                [HH] = "HH",
                [h] = "h",
                [hh] = "hh",
                [m] = "m",
                [mm] = "mm",
                [s] = "s",
                [ss] = "ss",
                [tt] = "tt"
                // Escape with '' or \
            },
            ["Java"] = new Dictionary<DateFormat, string>
            {
                [yy] = "yy",
                [yyyy] = "yyyy",
                [M] = "M",
                [MM] = "MM",
                [MMM] = "MMM",
                [MMMM] = "MMMM",
                [d] = "d",
                [dd] = "dd",
                [ddd] = "EEE",
                [dddd] = "EEEE",
                [H] = "H",
                [HH] = "HH",
                [h] = "h",
                [hh] = "hh",
                [m] = "m",
                [mm] = "mm",
                [s] = "s",
                [ss] = "ss",
                [tt] = "tt"
                // Escape with ''
            },
            ["PHP"] = new Dictionary<DateFormat, string>
            {
                [yy] = "y",
                [yyyy] = "Y",
                [M] = "n",
                [MM] = "m",
                [MMM] = "M",
                [MMMM] = "F",
                [d] = "j",
                [dd] = "d",
                [ddd] = "D",
                [dddd] = "l",
                [H] = "G",
                [HH] = "H",
                [h] = "g",
                [hh] = "h",
                [m] = "i", // only option is with leading zeroes
                [mm] = "i",
                [s] = "s", // only option is with leading zeroes
                [ss] = "s",
                [tt] = "A"
                // Escape with \
            },
            ["Python"] = new Dictionary<DateFormat, string>
            {
                [yy] = "%y",
                [yyyy] = "%Y",
                [M] = "%-m",
                [MM] = "%m",
                [MMM] = "%b",
                [MMMM] = "%B",
                [d] = "%-d",
                [dd] = "%d",
                [ddd] = "%a",
                [dddd] = "%A",
                [H] = "%-H",
                [HH] = "%H",
                [h] = "%-I",
                [hh] = "%I",
                [m] = "%-M",
                [mm] = "%M",
                [s] = "%-S",
                [ss] = "%S",
                [tt] = "%p"
                // Escape % with %%
            }
        };

        public static List<string> errors = new List<string>();
        public static T SingleOrError<T>(this IEnumerable<T> e, Func<T, bool> condition, string error)
            => e.Where(condition).SingleOrError(error);
        public static T SingleOrError<T>(this IEnumerable<T> e, string error)
        {
            using (var enumer = e.GetEnumerator())
            {
                if (!enumer.MoveNext()) return default(T);
                var result = enumer.Current;
                if (enumer.MoveNext()) errors.Add(error);
                return result;
            }
        }

        public const string
            shortMonthRegex = "Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec",
            longMonthRegex = "January|February|March|April|May|June|July|August|September|October|November|December",
            strMonthRegex = shortMonthRegex + "|" + longMonthRegex;

        public static string SafeSubstitution(string input, Dictionary<Match, string> substitutions)
        {
            foreach (var (match, replaceWith) in substitutions.OrderByDescending(s => s.Key.Index))
            {
                string subResult = match.Result(replaceWith);
                input = string.Concat(input.Substring(0, match.Index), subResult, input.Substr(match.Index + match.Length));
            }
            return input;
        }

        public static HTMLSelectElement CreateSelector (IEnumerable<string> options, HTMLSelectElement selector = null)
        {
            selector = selector ?? new HTMLSelectElement();
            foreach (var opt in options)
                selector.AppendChild(new HTMLOptionElement { Value = opt, InnerHTML = opt });
            return selector;
        }
        public static void Main()
        {
            var body = Document.Body.AppendChild(new HTMLDivElement { Style = { MarginLeft = "25%", Width = "50%", FontSize = "1.5em" } });
            body.AppendChild(new HTMLHeadingElement
            {
                InnerHTML = "DateTime Format Generator",
                Style = { FontSize = "2em", TextAlign = TextAlign.Center, TextDecoration = TextDecoration.Underline }
            });
            HTMLInputElement main = new HTMLInputElement { Type = InputType.Search, Style = { TextAlign = TextAlign.Center, Width = "100%", FontSize = "2em" } };
            main.SetAttribute("spellcheck", "true");
            body.AppendChild(main);
            body.AppendChild(new HTMLHRElement());
            HTMLSelectElement langSelector = CreateSelector(langs.Keys);
            langSelector.Style.FontSize = "4em";
            langSelector.Style.CssFloat = Float.Right;
            body.AppendChild(langSelector);
            HTMLDivElement solution = new HTMLDivElement();
            body.AppendChild(solution);
            void Update()
            {
                var currentLang = langSelector.Value;
                string inputted = main.Value;
                if (inputted.Contains("May")) errors.Add("May is ambiguous between MMM and MMMM. Choose another month.");
                inputted = Regex.Replace(inputted, @"'(?<!\d)\d{2}(?!\d)", "'[[yy]]");
                inputted = Regex.Replace(inputted, @"(?<!\d)\d{3,}(?!\d)", "[[yyyy]]");
                inputted = (Regex.Replace(Regex.Replace(Regex.Replace(Regex.Replace(Regex.Replace(Regex.Replace(Regex.Replace(Regex.Replace(Regex.Replace(inputted,
                    @"(?<!\d)0\d:\d{2}:\d{2}( ?)(AM|PM)",           "[[hh]]:[[mm]]:[[ss]]$1[[tt]]"),
                    @"(?<!\d)(?>\d|1[0-2]):\d{2}:\d{2}( ?)(AM|PM)", "[[h]]:[[mm]]:[[ss]]$1[[tt]]"),
                    @"(?<!\d)0\d:\d{2}:\d{2}",                      "[[HH]]:[[mm]]:[[ss]]"),
                    @"(?<!\d)(?>1?\d|2[0-3]):\d{2}:\d{2}",          "[[H]]:[[mm]]:[[ss]]"),
                    @"(?<!\d)0\d:\d{2}( ?)(AM|PM)",                 "[[hh]]:[[mm]]$1[[tt]]"),
                    @"(?<!\d)(?>\d|1[0-2]):\d{2}( ?)(AM|PM)",       "[[h]]:[[mm]]$1[[tt]]"),
                    @"(?<!\d)0\d:\d{2}",                            "[[HH]]:[[mm]]"),
                    @"(?<!\d)(?>1?\d|2[0-3]):\d{2}",                "[[H]]:[[mm]]"),
                    @"(?<!\d)(?>\d|1[0-2])( ?)(AM|PM)",             "[[h]]$1[[tt]]")
                );
                IEnumerable<(Match match, int val)> foundDigits = Regex.Matches(inputted, @"(?<!\d)\d{1,2}(?!\d)").Cast<Match>().Select(m => (m, int.Parse(m.Value)));
                Match dayMonthMatch = null, numMonthMatch = null;
                if (!Regex.IsMatch(inputted, strMonthRegex))
                {
                    numMonthMatch = foundDigits.Where(t => 1 <= t.val && t.val <= 12).SingleOrError("Month and day are ambiguous.").match;
                }
                dayMonthMatch = foundDigits.Where(t => 1 <= t.val && t.val <= 31 && t.match != numMonthMatch).SingleOrError("Multiple candidates for day!").match;
                var subs = new Dictionary<Match, string>();
                if (dayMonthMatch != null)
                    subs.Add(dayMonthMatch, dayMonthMatch.Value[0] == '0' ? "[[dd]]" : "[[d]]");
                if (numMonthMatch != null)
                    subs.Add(numMonthMatch, numMonthMatch.Value[0] == '0' ? "[[MM]]" : "[[M]]");
                inputted = SafeSubstitution(inputted, subs);
                inputted = Regex.Replace(inputted, longMonthRegex, "[[MMMM]]");
                inputted = Regex.Replace(inputted, shortMonthRegex, "[[MMM]]");
                inputted = Regex.Replace(inputted, "Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday", "[[dddd]]");
                inputted = Regex.Replace(inputted, "Mon|Tue|Wed|Thu|Fri|Sat|Sun", "[[ddd]]");
                string formatStringProto = inputted;
                inputted = GenerateFormatString(formatStringProto, currentLang);
                solution.InnerHTML = "";
                solution.AppendChild(new HTMLHeadingElement { InnerHTML = "Format", Style = { TextDecoration = TextDecoration.Underline } });
                IEnumerable<string> matchingFormats = typeof(DateTimeFormatInfo).GetProperties().Where(p => p.CanRead && p.IsPublic && !p.IsStatic && p.PropertyType == typeof(string) && (string)p.GetValue(DateTimeFormatInfo.CurrentInfo) == inputted).Select(p => p.Name);
                string csFormatStr = GenerateFormatString(formatStringProto, "C#");
                if (DateTime.TryParseExact(main.Value, csFormatStr, DateTimeFormatInfo.CurrentInfo, out var d))
                {
                    solution.AppendChild(new HTMLSpanElement { InnerHTML = "Understood Date: ", Style = { FontWeight = "bold" } });
                    solution.AppendChild(new Text(d.ToString()));
                    string backToString = d.ToString(csFormatStr);
                    if (backToString != main.Value)
                    {
                        solution.AppendChild(new HTMLBRElement());
                        solution.AppendChild(new HTMLSpanElement { InnerHTML = "Reformatted Date: ", Style = { FontWeight = "bold" } });
                        solution.AppendChild(new Text(backToString));
                    }
                }
                solution.AppendChild(new HTMLPreElement {
                    InnerHTML = string.Join("\n", new[] { inputted }.Concat(currentLang != "C#" ? Enumerable.Empty<string>() : new[] {
                            $"date.ToString({ToQuotedString(inputted)})",
                            inputted.Contains('\\') ? $"date.ToString({ToVerbatimString(inputted)})" : ""
                        }.Concat(matchingFormats.Select(f => $"date.ToString(DateTimeFormatInfo.CurrentInfo.{f})"))
                    ))
                });
                if (errors.Count > 0) solution.AppendChild(new HTMLHeadingElement { InnerHTML = "Errors" });
                foreach (var error in errors)
                {
                    solution.AppendChild(new Text(error));
                    solution.AppendChild(new HTMLBRElement());
                }
                errors.Clear();
            };
            main.OnInput = _ => Update();
            langSelector.OnInput = _ => Update();
        }

        public static string GenerateFormatString(string input, string lang)
        {
            var currentLangOpts = langs[lang];
            Regex formatSpecifier = new Regex(@"(\[\[[a-zA-Z]+\]\])");
            string[] split = formatSpecifier.Split(input);
            List<(string str, bool isRaw)> segments = split.Select(v =>
                formatSpecifier.IsMatch(v) ? (currentLangOpts[Enum.Parse<DateFormat>(Regex.Replace(v, @"\[\[([a-zA-Z]+)\]\]", "$1"))], isRaw: false) : (v, isRaw: true)
            ).ToList();
            string outP = "";
            foreach (var (str, isRaw) in segments)
            {
                if (!isRaw) { outP += str; continue; }
                foreach (string splitPart in Regex.Split(str, "([^a-zA-Z]+)"))
                {
                    string sPart = Regex.Replace(splitPart, "[%\\\"']", @"\$0");
                    if (Regex.IsMatch(sPart, @"[dfFghHKmMstyz]"))
                        sPart = "'" + sPart + "'";
                    outP += sPart;
                }
            }
            return outP;
        }

        public static string ToQuotedString(string input)
        {
            StringBuilder literal = new StringBuilder(input.Length + 2);
            literal.Append("\"");
            foreach (var c in input)
            {
                switch (c)
                {
                    //case '\'': literal.Append(@"\'"); break;
                    case '\"': literal.Append("\\\""); break;
                    case '\\': literal.Append(@"\\"); break;
                    case '\0': literal.Append(@"\0"); break;
                    case '\a': literal.Append(@"\a"); break;
                    case '\b': literal.Append(@"\b"); break;
                    case '\f': literal.Append(@"\f"); break;
                    case '\n': literal.Append(@"\n"); break;
                    case '\r': literal.Append(@"\r"); break;
                    case '\t': literal.Append(@"\t"); break;
                    case '\v': literal.Append(@"\v"); break;
                    default:
                        // ASCII printable character
                        if (c >= 0x20 && c <= 0x7e)
                        {
                            literal.Append(c);
                            // As UTF16 escaped character
                        }
                        else
                        {
                            literal.Append(@"\u");
                            literal.Append(((int)c).ToString("x4"));
                        }
                        break;
                }
            }
            literal.Append("\"");
            return literal.ToString();
        }

        public static string ToVerbatimString(string input)
            => "@\"" + input.Replace("\"", "\"\"") + "\"";
    }
}