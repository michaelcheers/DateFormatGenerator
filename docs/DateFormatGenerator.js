/**
 * @version 1.0.0+130eaa51f5cf40a34365892a50a00f6f2e95ccef
 * @author DateFormatGenerator
 * @compiler Bridge.NET 17.10.1
 */
Bridge.assembly("DateFormatGenerator", function ($asm, globals) {
    "use strict";

    Bridge.define("DateFormatGenerator.DateFormatType", {
        fields: {
            Formats: null
        },
        methods: {
            CompleteCodeSample: function (format) {
                return null;
            },
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            InitialEscape: function (rawText) {
                return rawText;
            },
            MustEscapeWord: function (word) {
                return System.Linq.Enumerable.from(this.Formats.Values, System.String).any(function (f) {
                        return System.String.contains(word,f);
                    });
            },
            GenerateFormatString: function (input) {
                var $t, $t1, $t2;
                var formatSpecifier = new System.Text.RegularExpressions.Regex.ctor("(\\[\\[[a-zA-Z]+\\]\\])");
                var split = formatSpecifier.split(input);
                var segments = System.Linq.Enumerable.from(split, System.String).select(Bridge.fn.bind(this, function (v) {
                        return formatSpecifier.isMatch(v) ? new (System.ValueTuple$2(System.String,System.Boolean)).$ctor1(this.Formats.getItem(DateFormatGenerator.Enum.Parse(DateFormatGenerator.DateFormat, System.Text.RegularExpressions.Regex.replace(v, "\\[\\[([a-zA-Z]+)\\]\\]", "$1"))), false) : new (System.ValueTuple$2(System.String,System.Boolean)).$ctor1(v, true);
                    })).toList(System.ValueTuple$2(System.String,System.Boolean));
                var outP = "";
                var splitRegex = this.EscapeBehavior === DateFormatGenerator.EscapeBehavior.EscapeWords ? "([^a-zA-Z" + (System.String.concat(Bridge.toArray((System.Linq.Enumerable.from(this.Formats.Values, System.String).selectMany($asm.$.DateFormatGenerator.DateFormatType.f1, $asm.$.DateFormatGenerator.DateFormatType.f2).where($asm.$.DateFormatGenerator.DateFormatType.f3).orderBy($asm.$.DateFormatGenerator.DateFormatType.f4).select($asm.$.DateFormatGenerator.DateFormatType.f5)).distinct().select($asm.$.DateFormatGenerator.DateFormatType.f6))) || "") + "]+)" : null;
                $t = Bridge.getEnumerator(segments);
                try {
                    while ($t.moveNext()) {
                        var _d1 = $t.Current.$clone();
                        var str = { };
                        var isRaw = { };
                        Bridge.Deconstruct(_d1.$clone(), str, isRaw);
                        if (!isRaw.v) {
                            outP = (outP || "") + (str.v || "");
                            continue;
                        }

                        switch (this.EscapeBehavior) {
                            case DateFormatGenerator.EscapeBehavior.EscapeFormats: 
                                var finalStr = this.InitialEscape(str.v);
                                $t1 = Bridge.getEnumerator(this.Formats.Values);
                                try {
                                    while ($t1.moveNext()) {
                                        var format = $t1.Current;
                                        finalStr = System.String.replaceAll(finalStr, format, this.EscapeFormatPart(format));
                                    }
                                } finally {
                                    if (Bridge.is($t1, System.IDisposable)) {
                                        $t1.System$IDisposable$Dispose();
                                    }
                                }
                                outP = (outP || "") + (finalStr || "");
                                break;
                            case DateFormatGenerator.EscapeBehavior.EscapeWords: 
                                $t2 = Bridge.getEnumerator(System.Text.RegularExpressions.Regex.split(str.v, splitRegex));
                                try {
                                    while ($t2.moveNext()) {
                                        var splitPart = $t2.Current;
                                        var sPart = this.InitialEscape(splitPart);
                                        if (this.MustEscapeWord(sPart)) {
                                            sPart = this.EscapeFormatPart(sPart);
                                        }
                                        outP = (outP || "") + (sPart || "");
                                    }
                                } finally {
                                    if (Bridge.is($t2, System.IDisposable)) {
                                        $t2.System$IDisposable$Dispose();
                                    }
                                }
                                break;
                            case DateFormatGenerator.EscapeBehavior.EscapeAllText: 
                                outP = (outP || "") + ((this.EscapeFormatPart(str.v)) || "");
                                break;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return outP;
            }
        }
    });

    Bridge.define("$AnonymousType$1", $asm, {
        $kind: "anonymous",
        ctors: {
            ctor: function (format, char) {
                this.format = format;
                this.char = char;
            }
        },
        methods: {
            equals: function (o) {
                if (!Bridge.is(o, $asm.$AnonymousType$1)) {
                    return false;
                }
                return Bridge.equals(this.format, o.format) && Bridge.equals(this.char, o.char);
            },
            getHashCode: function () {
                var h = Bridge.addHash([7550196186, this.format, this.char]);
                return h;
            },
            toJSON: function () {
                return {
                    format : this.format,
                    char : this.char
                };
            }
        },
        statics : {
            methods: {
                $metadata : function () { return {"m":[{"a":2,"n":"char","t":16,"rt":System.Char,"g":{"a":2,"n":"get_char","t":8,"rt":System.Char,"fg":"char","box":function ($v) { return Bridge.box($v, System.Char, String.fromCharCode, System.Char.getHashCode);}},"fn":"char"},{"a":2,"n":"format","t":16,"rt":System.String,"g":{"a":2,"n":"get_format","t":8,"rt":System.String,"fg":"format"},"fn":"format"}]}; }
            }
        }
    });

    Bridge.ns("DateFormatGenerator.DateFormatType", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.DateFormatType, {
        f1: function (format) {
            return format;
        },
        f2: function (format, $char) {
            return new $asm.$AnonymousType$1(format, $char);
        },
        f3: function (x0) {
            return !((x0.char >= 97 && x0.char <= 122) || (x0.char >= 65 && x0.char <= 90));
        },
        f4: function (x1) {
            return x1.char;
        },
        f5: function (x2) {
            return x2.char;
        },
        f6: function (c) {
            return (c === 45 || c === 94 || c === 92) ? ("\\" + String.fromCharCode(c)) : String.fromCharCode(c);
        }
    });

    Bridge.define("DateFormatGenerator.DateFormat", {
        $kind: "enum",
        statics: {
            fields: {
                yy: 0,
                yyyy: 1,
                M: 2,
                MM: 3,
                MMM: 4,
                MMMM: 5,
                d: 6,
                dd: 7,
                ddd: 8,
                dddd: 9,
                H: 10,
                HH: 11,
                h: 12,
                hh: 13,
                m: 14,
                mm: 15,
                s: 16,
                ss: 17,
                tt: 18
            }
        }
    });

    Bridge.define("DateFormatGenerator.Enum", {
        statics: {
            methods: {
                Parse: function (T, name) {
                    return System.Linq.Enumerable.from(System.Enum.getValues(T)).select(function (x) { return Bridge.cast(x, T); }).zip(System.Enum.getNames(T), function (a, b) {
                        return new (System.ValueTuple$2(T,System.String)).$ctor1(a, b);
                    }).single(function (t) {
                        return Bridge.referenceEquals(t.Item2, name);
                    }).Item1;
                }
            }
        }
    });

    Bridge.define("DateFormatGenerator.EscapeBehavior", {
        $kind: "enum",
        statics: {
            fields: {
                EscapeFormats: 0,
                EscapeWords: 1,
                EscapeAllText: 2
            }
        }
    });

    Bridge.define("DateFormatGenerator.Extensions", {
        statics: {
            methods: {
                Add: function (T, element, nodes) {
                    var $t;
                    if (nodes === void 0) { nodes = []; }
                    $t = Bridge.getEnumerator(nodes);
                    try {
                        while ($t.moveNext()) {
                            var node = $t.Current;
                            if (node == null) {
                                continue;
                            } else {
                                if (Bridge.is(node, System.String)) {
                                    element.appendChild(document.createTextNode(node));
                                } else {
                                    element.appendChild(node);
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return element;
                },
                AddElement: function (T, element, nodes) {
                    if (nodes === void 0) { nodes = []; }
                    return DateFormatGenerator.Extensions.Add(T, element, nodes);
                },
                AddDiv: function (T, element, nodes) {
                    if (nodes === void 0) { nodes = []; }
                    return DateFormatGenerator.Extensions.Add(T, element, [DateFormatGenerator.Extensions.Add(HTMLDivElement, document.createElement("div"), nodes)]);
                },
                AddUl: function (T, element, nodes) {
                    if (nodes === void 0) { nodes = []; }
                    return DateFormatGenerator.Extensions.Add(T, element, [DateFormatGenerator.Extensions.Add(HTMLUListElement, document.createElement("ul"), nodes.map($asm.$.DateFormatGenerator.Extensions.f1))]);
                },
                AddCamelSpace: function (str) {
                    return System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(str, "([^_a-z])([^_a-z][a-z])", "$1 $2"), "([a-z])([^_a-z])", "$1 $2");
                },
                ToCamelString: function (T, e) {
                    return System.String.replaceAll(DateFormatGenerator.Extensions.AddCamelSpace(System.Enum.toString(Bridge.getType(e, T), e)), String.fromCharCode(95), String.fromCharCode(32));
                },
                AddEnum: function (T, select, defaultValue, defaultValueString) {
                    var $t, $t1;
                    if (defaultValue === void 0) { defaultValue = null; }
                    if (defaultValueString === void 0) { defaultValueString = ""; }
                    if (defaultValue == null) {
                        select.add(DateFormatGenerator.Extensions.Add(HTMLOptionElement, ($t = document.createElement("option"), $t.value = "", $t.selected = true, $t.disable = true, $t), [defaultValueString]));
                    }
                    $t = Bridge.getEnumerator(System.Enum.getValues(T));
                    try {
                        while ($t.moveNext()) {
                            var value = Bridge.cast($t.Current, T);
                            select.add(DateFormatGenerator.Extensions.Add(HTMLOptionElement, ($t1 = document.createElement("option"), $t1.value = Bridge.toString(System.Nullable.getValue(Bridge.cast(Bridge.unbox(value, System.Int32), System.Int32))), $t1.selected = Bridge.equals(defaultValue, value), $t1), [DateFormatGenerator.Extensions.ToCamelString(T, value)]));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return select;
                },
                Value: function (T, select) {
                    return Bridge.referenceEquals(select.value, "") ? null : Bridge.cast(System.Nullable.getValue(Bridge.cast(Bridge.unbox(Bridge.box(System.Int32.parse(select.value), System.Int32), T), T)), T, true);
                },
                SetValue: function (T, select, value) {
                    select.value = Bridge.toString(System.Nullable.getValue(Bridge.cast(Bridge.unbox(value, System.Int32), System.Int32)));
                    return select;
                },
                ToTimeString: function (time) {
                    return time.toString(System.TimeSpan.gte(time, System.TimeSpan.fromHours(1)) ? "h\\:mm\\:ss" : "m\\:ss");
                },
                JoinBR: function (strings) {
                    var $t;
                    var Inner = null;

                    Inner = function () {
                        return new (Bridge.GeneratorEnumerable$1(System.Object))(Bridge.fn.bind(this, function ()  {
                            var $step = 0,
                                $jumpFromFinally,
                                $returnValue,
                                enumer,
                                $async_e,
                                $async_e1;

                            var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Object))(Bridge.fn.bind(this, function () {
                                try {
                                    for (;;) {
                                        switch ($step) {
                                            case 0: {
                                                enumer = Bridge.getEnumerator(strings, System.String);
                                                $step = 1;
                                                continue;
                                            }
                                            case 1: {
                                                if (!enumer.System$Collections$IEnumerator$moveNext()) {
                                                        $step = 2;
                                                        continue;
                                                    } 
                                                    $step = 3;
                                                    continue;
                                            }
                                            case 2: {
                                                return false;
                                            }
                                            case 3: {
                                                $enumerator.current = enumer[Bridge.geti(enumer, "System$Collections$Generic$IEnumerator$1$System$String$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")];
                                                    $step = 4;
                                                    return true;
                                            }
                                            case 4: {
                                                if ( enumer.System$Collections$IEnumerator$moveNext() ) {
                                                        $step = 5;
                                                        continue;
                                                    } 
                                                    $step = 8;
                                                    continue;
                                            }
                                            case 5: {
                                                $enumerator.current = document.createElement("br");
                                                    $step = 6;
                                                    return true;
                                            }
                                            case 6: {
                                                $enumerator.current = enumer[Bridge.geti(enumer, "System$Collections$Generic$IEnumerator$1$System$String$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")];
                                                    $step = 7;
                                                    return true;
                                            }
                                            case 7: {
                                                
                                                    $step = 4;
                                                    continue;
                                            }
                                            case 8: {
                                                $step = 9;
                                                continue;
                                            }
                                            case 9: {
                                                if (Bridge.hasValue(enumer)) enumer.System$IDisposable$Dispose();

                                                    if ($jumpFromFinally > -1) {
                                                        $step = $jumpFromFinally;
                                                        $jumpFromFinally = null;
                                                    } else if ($async_e) {
                                                        throw $async_e;
                                                        return;
                                                    } else if (Bridge.isDefined($returnValue)) {
                                                        $tcs.setResult($returnValue);
                                                        return;
                                                    }
                                                $step = 10;
                                                continue;
                                            }
                                            case 10: {

                                            }
                                            default: {
                                                return false;
                                            }
                                        }
                                    }
                                } catch($async_e1) {
                                    $async_e = System.Exception.create($async_e1);
                                    if ($step >= 1 && $step <= 8){

                                        $step = 9;
                                        $enumerator.moveNext();
                                        return;
                                    }
                                    throw $async_e;
                                }
                            }), function () {
                                if ($step >= 1 && $step <= 8){

                                    $step = 9;
                                    $enumerator.moveNext();
                                    return;
                                }

                            });
                            return $enumerator;
                        }));
                    };
                    return ($t = System.Object, System.Linq.Enumerable.from(Inner(), $t).ToArray($t));
                }
            }
        }
    });

    Bridge.ns("DateFormatGenerator.Extensions", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.Extensions, {
        f1: function (n) {
            return Bridge.is(n, System.Array.type(System.Object)) ? DateFormatGenerator.Extensions.Add(HTMLLIElement, document.createElement("li"), n) : Bridge.is(n, System.String) ? DateFormatGenerator.Extensions.Add(HTMLLIElement, document.createElement("li"), [n]) : DateFormatGenerator.Extensions.Add(HTMLLIElement, document.createElement("li"), [n]);
        }
    });

    Bridge.define("DateFormatGenerator.Program", {
        main: function Main () {
            var $t;
            var Update = null;
            var pageContainer = document.body.appendChild(($t = document.createElement("div"), $t.style.position = "relative", $t.style.minHeight = "100vh", $t));
            var contentWrap = pageContainer.appendChild(($t = document.createElement("div"), $t.style.marginLeft = "25%", $t.style.width = "50%", $t.style.fontSize = "1.5em", $t.style.paddingBottom = "2.5rem", $t));
            contentWrap.appendChild(($t = document.createElement("h1"), $t.innerHTML = "DateTime Format Generator", $t.style.fontSize = "2em", $t.style.textAlign = "center", $t.style.textDecoration = "underline", $t.style.cssFloat = "left", $t));
            var input = ($t = document.createElement("input"), $t.type = "search", $t.placeholder = System.String.format("June 17 {0} 8:35 AM", [Bridge.box(System.DateTime.getYear(System.DateTime.getNow()), System.Int32)]), $t.style.textAlign = "center", $t.style.width = "100%", $t.style.fontSize = "2em", $t);
            input.setAttribute("spellcheck", "true");
            contentWrap.appendChild(input);
            contentWrap.appendChild(document.createElement("hr"));
            var langSelector = DateFormatGenerator.Program.CreateSelector(System.Linq.Enumerable.from(DateFormatGenerator.Program.langs.Keys, System.String).orderBy($asm.$.DateFormatGenerator.Program.f1));
            langSelector.style.fontSize = "2em";
            langSelector.style.cssFloat = "right";
            contentWrap.appendChild(langSelector);
            langSelector.value = DateFormatGenerator.URLManipulation.Q("lang", "C#");
            input.value = DateFormatGenerator.URLManipulation.Q("q", "");
            var solution = document.createElement("div");
            contentWrap.appendChild(solution);

            pageContainer.appendChild(DateFormatGenerator.Extensions.Add(HTMLElement, ($t = document.createElement("footer"), $t.style.borderTop = "1px solid black", $t.style.position = "absolute", $t.style.paddingTop = "0.20em", $t.style.bottom = "0.25em", $t.style.width = "98%", $t.style.textAlign = "center", $t.style.fontSize = "1.5em", $t), ["Report issues ", DateFormatGenerator.Extensions.Add(HTMLAnchorElement, ($t = document.createElement("a"), $t.href = "https://github.com/michaelcheers/DateFormatGenerator/issues", $t.target = "_blank", $t), ["here"])]));
            Update = function () {
                var $t1, $t2, $t3;
                DateFormatGenerator.URLManipulation.ModifyQS("lang", null, null);
                DateFormatGenerator.URLManipulation.ModifyQS("q", null, null);
                DateFormatGenerator.URLManipulation.ModifyQS("lang", langSelector.value, "C#");
                DateFormatGenerator.URLManipulation.ModifyQS("q", input.value, "");
                var title = input.value;
                if (!Bridge.referenceEquals(langSelector.value, "C#") || !Bridge.referenceEquals(input.value, "")) {
                    title = (title || "") + ((Bridge.referenceEquals(input.value, "") ? langSelector.value : System.String.format(" ({0})", [langSelector.value])) || "");
                }
                if (!Bridge.referenceEquals(title, "")) {
                    title = (title || "") + " - ";
                }
                title = (title || "") + "DateTime Format Generator";
                document.title = title;
                var currentLang = DateFormatGenerator.Program.langs.getItem(langSelector.value);
                var inputted = input.value;
                if (System.String.contains(inputted,"May")) {
                    DateFormatGenerator.Program.errors.add("May is ambiguous between the short and long month formats. Choose another month.");
                }
                inputted = System.Text.RegularExpressions.Regex.replace(inputted, "'(?<!\\d)\\d{2}(?!\\d)", "'[[yy]]");
                inputted = System.Text.RegularExpressions.Regex.replace(inputted, "(?<!\\d)\\d{3,}(?!\\d)", "[[yyyy]]");
                inputted = (System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(System.Text.RegularExpressions.Regex.replace(inputted, "(?<!\\d)0\\d:\\d{2}:\\d{2}( ?)(AM|PM)", "[[hh]]:[[mm]]:[[ss]]$1[[tt]]"), "(?<!\\d)(?>1[0-2]|\\d):\\d{2}:\\d{2}( ?)(AM|PM)", "[[h]]:[[mm]]:[[ss]]$1[[tt]]"), "(?<!\\d)0\\d:\\d{2}:\\d{2}", "[[HH]]:[[mm]]:[[ss]]"), "(?<!\\d)(?>2[0-3]|1?\\d):\\d{2}:\\d{2}", "[[H]]:[[mm]]:[[ss]]"), "(?<!\\d)0\\d:\\d{2}( ?)(AM|PM)", "[[hh]]:[[mm]]$1[[tt]]"), "(?<!\\d)(?>1[0-2]|\\d):\\d{2}( ?)(AM|PM)", "[[h]]:[[mm]]$1[[tt]]"), "(?<!\\d)0\\d:\\d{2}", "[[HH]]:[[mm]]"), "(?<!\\d)(?>2[0-3]|1?\\d):\\d{2}", "[[H]]:[[mm]]"), "(?<!\\d)(?>1[0-2]|\\d)( ?)(AM|PM)", "[[h]]$1[[tt]]"));
                var foundDigits = System.Linq.Enumerable.from(System.Text.RegularExpressions.Regex.matches(inputted, "(?<!\\d)\\d{1,2}(?!\\d)")).select(function (x) { return Bridge.cast(x, System.Text.RegularExpressions.Match); }).select($asm.$.DateFormatGenerator.Program.f2);
                var dayMonthMatch = null, numMonthMatch = null;
                if (!System.Text.RegularExpressions.Regex.isMatch(inputted, DateFormatGenerator.Program.strMonthRegex)) {
                    numMonthMatch = DateFormatGenerator.Program.SingleOrError$1(System.ValueTuple$2(System.Text.RegularExpressions.Match,System.Int32), System.Linq.Enumerable.from(foundDigits, System.ValueTuple$2(System.Text.RegularExpressions.Match,System.Int32)).where($asm.$.DateFormatGenerator.Program.f3), "Month and day are ambiguous.").Item1;
                }

                dayMonthMatch = DateFormatGenerator.Program.SingleOrError$1(System.ValueTuple$2(System.Text.RegularExpressions.Match,System.Int32), System.Linq.Enumerable.from(foundDigits, System.ValueTuple$2(System.Text.RegularExpressions.Match,System.Int32)).where(function (t) {
                        return 1 <= t.Item2 && t.Item2 <= 31 && !Bridge.referenceEquals(t.Item1, numMonthMatch);
                    }), "Multiple candidates for day!").Item1;
                var subs = new (System.Collections.Generic.Dictionary$2(System.Text.RegularExpressions.Match,System.String)).ctor();
                if (dayMonthMatch != null) {
                    subs.add(dayMonthMatch, dayMonthMatch.getValue().charCodeAt(0) === 48 ? "[[dd]]" : "[[d]]");
                }
                if (numMonthMatch != null) {
                    subs.add(numMonthMatch, numMonthMatch.getValue().charCodeAt(0) === 48 ? "[[MM]]" : "[[M]]");
                }
                inputted = DateFormatGenerator.Program.SafeSubstitution(inputted, subs);
                inputted = System.Text.RegularExpressions.Regex.replace(inputted, DateFormatGenerator.Program.longMonthRegex, "[[MMMM]]");
                inputted = System.Text.RegularExpressions.Regex.replace(inputted, DateFormatGenerator.Program.shortMonthRegex, "[[MMM]]");
                inputted = System.Text.RegularExpressions.Regex.replace(inputted, "Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday", "[[dddd]]");
                inputted = System.Text.RegularExpressions.Regex.replace(inputted, "Mon|Tue|Wed|Thu|Fri|Sat|Sun", "[[ddd]]");
                var formatStringProto = inputted;
                inputted = currentLang.GenerateFormatString(formatStringProto);
                var detailsElement;
                if (((detailsElement = solution.querySelector("details"))) != null) {
                    DateFormatGenerator.Program.CodeSampleOpen = detailsElement.open;
                }
                solution.innerHTML = "";
                solution.appendChild(($t1 = document.createElement("h1"), $t1.innerHTML = "Format", $t1.style.textDecoration = "underline", $t1.style.marginTop = "0px", $t1.style.marginRight = "2em", $t1));
                var matchingFormats = System.Linq.Enumerable.from(Bridge.Reflection.getMembers(System.Globalization.DateTimeFormatInfo, 16, 28), System.Reflection.PropertyInfo).where(function (p) {
                        return (!!p.g) && (p.a === 2) && !(p.is || false) && Bridge.referenceEquals(p.rt, System.String) && Bridge.referenceEquals(Bridge.cast(Bridge.Reflection.midel(p.g, System.Globalization.DateTimeFormatInfo.currentInfo)(), System.String), inputted);
                    }).select($asm.$.DateFormatGenerator.Program.f4);
                var csFormatStr = DateFormatGenerator.Program.langs.getItem("C#").GenerateFormatString(formatStringProto);
                var d = { };
                if (System.DateTime.tryParseExact(input.value, csFormatStr, System.Globalization.DateTimeFormatInfo.currentInfo, d)) {
                    solution.appendChild(($t1 = document.createElement("span"), $t1.innerHTML = "Understood Date: ", $t1.style.fontWeight = "bold", $t1));
                    solution.appendChild(document.createTextNode(System.DateTime.format(d.v, "MMMM d, yyyy h:mm tt").toUpperCase()));
                    var backToString = System.DateTime.format(d.v, csFormatStr);
                    if (!Bridge.referenceEquals(backToString, input.value)) {
                        solution.appendChild(document.createElement("br"));
                        solution.appendChild(($t1 = document.createElement("span"), $t1.innerHTML = "Reformatted Date: ", $t1.style.fontWeight = "bold", $t1));
                        solution.appendChild(document.createTextNode(backToString));
                    }
                }

                solution.appendChild(DateFormatGenerator.Extensions.Add(HTMLPreElement, document.createElement("pre"), [Bridge.toArray(System.Linq.Enumerable.from(System.Array.init([inputted], System.String), System.String).concat(currentLang.CodeSamples(inputted)).concat(Bridge.is(currentLang, DateFormatGenerator.CSDateFormat) ? System.Linq.Enumerable.from(matchingFormats, System.String).select($asm.$.DateFormatGenerator.Program.f5) : System.Linq.Enumerable.empty())).join("\n")]));
                if (DateFormatGenerator.Program.errors.Count > 0) {
                    solution.appendChild(($t1 = document.createElement("h1"), $t1.innerHTML = "Errors", $t1.style.textDecoration = "underline", $t1));
                    $t1 = Bridge.getEnumerator(DateFormatGenerator.Program.errors);
                    try {
                        while ($t1.moveNext()) {
                            var error = $t1.Current;
                            solution.appendChild(document.createTextNode(error));
                            solution.appendChild(document.createElement("br"));
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }

                    solution.appendChild(document.createElement("br"));
                }

                DateFormatGenerator.Program.errors.clear();
                var codeSample;
                if (((codeSample = currentLang.CompleteCodeSample(inputted))) != null) {
                    solution.appendChild(DateFormatGenerator.Extensions.Add(HTMLDetailsElement, DateFormatGenerator.Extensions.Add(HTMLDetailsElement, ($t2 = document.createElement("details"), $t2.open = ($t3 = DateFormatGenerator.Program.CodeSampleOpen, $t3 != null ? $t3 : true), $t2), [DateFormatGenerator.Extensions.Add(HTMLElement, document.createElement("summary"), ["Code Sample"])]), [DateFormatGenerator.Extensions.Add(HTMLPreElement, document.createElement("pre"), [codeSample])]));
                }
            };
            input.oninput = function (_) {
                Update();
            };
            langSelector.oninput = function (_) {
                Update();
            };
            Update();
            //main.Focus();
        },
        statics: {
            fields: {
                shortMonthRegex: null,
                longMonthRegex: null,
                strMonthRegex: null,
                langs: null,
                errors: null,
                CodeSampleOpen: null
            },
            ctors: {
                init: function () {
                    this.shortMonthRegex = "Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec";
                    this.longMonthRegex = "January|February|March|April|May|June|July|August|September|October|November|December";
                    this.strMonthRegex = "Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December";
                    this.langs = $asm.$.DateFormatGenerator.Program.f15(new (System.Collections.Generic.Dictionary$2(System.String,DateFormatGenerator.DateFormatType)).ctor());
                    this.errors = new (System.Collections.Generic.List$1(System.String)).ctor();
                }
            },
            methods: {
                SingleOrError: function (T, e, condition, error) {
                    return DateFormatGenerator.Program.SingleOrError$1(T, System.Linq.Enumerable.from(e, T).where(condition), error);
                },
                SingleOrError$1: function (T, e, error) {
                    var enumer = Bridge.getEnumerator(e, T);
                    try {
                        if (!enumer.System$Collections$IEnumerator$moveNext()) {
                            return Bridge.getDefaultValue(T);
                        }
                        var result = enumer[Bridge.geti(enumer, "System$Collections$Generic$IEnumerator$1$" + Bridge.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1")];
                        if (enumer.System$Collections$IEnumerator$moveNext()) {
                            DateFormatGenerator.Program.errors.add(error);
                        }
                        return result;
                    }
                    finally {
                        if (Bridge.hasValue(enumer)) {
                            enumer.System$IDisposable$Dispose();
                        }
                    }
                },
                SafeSubstitution: function (input, substitutions) {
                    var $t;
                    $t = Bridge.getEnumerator(System.Linq.Enumerable.from(substitutions, System.Collections.Generic.KeyValuePair$2(System.Text.RegularExpressions.Match,System.String)).orderByDescending($asm.$.DateFormatGenerator.Program.f16));
                    try {
                        while ($t.moveNext()) {
                            var _d1 = $t.Current;
                            var match = { };
                            var replaceWith = { };
                            _d1.Deconstruct(match, replaceWith);
                            var subResult = match.v.result(replaceWith.v);
                            input = System.String.concat(input.substr(0, match.v.getIndex()), subResult, input.substr(((match.v.getIndex() + match.v.getLength()) | 0)));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return input;
                },
                CreateSelector: function (options, selector) {
                    var $t, $t1;
                    if (selector === void 0) { selector = null; }
                    selector = selector || document.createElement("select");
                    $t = Bridge.getEnumerator(options, System.String);
                    try {
                        while ($t.moveNext()) {
                            var opt = $t.Current;
                            selector.appendChild(($t1 = document.createElement("option"), $t1.value = opt, $t1.innerHTML = opt, $t1));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return selector;
                },
                ToQuotedString: function (input) {
                    var $t;
                    var literal = new System.Text.StringBuilder("", ((input.length + 2) | 0));
                    literal.append("\"");
                    $t = Bridge.getEnumerator(input);
                    try {
                        while ($t.moveNext()) {
                            var c = $t.Current;
                            switch (c) {
                                case 34: 
                                    literal.append("\\\"");
                                    break;
                                case 92: 
                                    literal.append("\\\\");
                                    break;
                                case 0: 
                                    literal.append("\\0");
                                    break;
                                case 7: 
                                    literal.append("\\a");
                                    break;
                                case 8: 
                                    literal.append("\\b");
                                    break;
                                case 12: 
                                    literal.append("\\f");
                                    break;
                                case 10: 
                                    literal.append("\\n");
                                    break;
                                case 13: 
                                    literal.append("\\r");
                                    break;
                                case 9: 
                                    literal.append("\\t");
                                    break;
                                case 11: 
                                    literal.append("\\v");
                                    break;
                                default: 
                                    // ASCII printable character
                                    if (c >= 32 && c <= 126) {
                                        literal.append(String.fromCharCode(c));
                                        // As UTF16 escaped character
                                    } else {
                                        literal.append("\\u");
                                        literal.append(System.Int32.format(c, "x4"));
                                    }
                                    break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    literal.append("\"");
                    return literal.toString();
                },
                ToJSInterpolatedString: function (input) {
                    return "`" + (System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(input, "\\", "\\\\"), "`", "\\`"), "$", "\\$") || "");
                },
                ToVerbatimString: function (input) {
                    return "@\"" + (System.String.replaceAll(input, "\"", "\"\"") || "") + "\"";
                }
            }
        }
    });

    Bridge.ns("DateFormatGenerator.Program", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.Program, {
        f1: function (k) {
            return k;
        },
        f2: function (m) {
            return new (System.ValueTuple$2(System.Text.RegularExpressions.Match,System.Int32)).$ctor1(m, System.Int32.parse(m.getValue()));
        },
        f3: function (t) {
            return 1 <= t.Item2 && t.Item2 <= 12;
        },
        f4: function (p) {
            return p.n;
        },
        f5: function (f) {
            return System.String.format("date.ToString(DateTimeFormatInfo.CurrentInfo.{0})", [f]);
        },
        f6: function (_o1) {
            _o1.setItem(DateFormatGenerator.DateFormat.yy, "yy");
            _o1.setItem(DateFormatGenerator.DateFormat.yyyy, "yyyy");
            _o1.setItem(DateFormatGenerator.DateFormat.M, "M");
            _o1.setItem(DateFormatGenerator.DateFormat.MM, "MM");
            _o1.setItem(DateFormatGenerator.DateFormat.MMM, "MMM");
            _o1.setItem(DateFormatGenerator.DateFormat.MMMM, "MMMM");
            _o1.setItem(DateFormatGenerator.DateFormat.d, "d");
            _o1.setItem(DateFormatGenerator.DateFormat.dd, "dd");
            _o1.setItem(DateFormatGenerator.DateFormat.ddd, "ddd");
            _o1.setItem(DateFormatGenerator.DateFormat.dddd, "dddd");
            _o1.setItem(DateFormatGenerator.DateFormat.H, "H");
            _o1.setItem(DateFormatGenerator.DateFormat.HH, "HH");
            _o1.setItem(DateFormatGenerator.DateFormat.h, "h");
            _o1.setItem(DateFormatGenerator.DateFormat.hh, "hh");
            _o1.setItem(DateFormatGenerator.DateFormat.m, "m");
            _o1.setItem(DateFormatGenerator.DateFormat.mm, "mm");
            _o1.setItem(DateFormatGenerator.DateFormat.s, "s");
            _o1.setItem(DateFormatGenerator.DateFormat.ss, "ss");
            _o1.setItem(DateFormatGenerator.DateFormat.tt, "tt");
            return _o1;
        },
        f7: function (_o2) {
            _o2.setItem(DateFormatGenerator.DateFormat.yy, "%y");
            _o2.setItem(DateFormatGenerator.DateFormat.yyyy, "%Y");
            _o2.setItem(DateFormatGenerator.DateFormat.M, "%m");
            _o2.setItem(DateFormatGenerator.DateFormat.MM, "%m");
            _o2.setItem(DateFormatGenerator.DateFormat.MMM, "%b");
            _o2.setItem(DateFormatGenerator.DateFormat.MMMM, "%B");
            _o2.setItem(DateFormatGenerator.DateFormat.d, "%d");
            _o2.setItem(DateFormatGenerator.DateFormat.dd, "%d");
            _o2.setItem(DateFormatGenerator.DateFormat.ddd, "%a");
            _o2.setItem(DateFormatGenerator.DateFormat.dddd, "%A");
            _o2.setItem(DateFormatGenerator.DateFormat.H, "%H");
            _o2.setItem(DateFormatGenerator.DateFormat.HH, "%H");
            _o2.setItem(DateFormatGenerator.DateFormat.h, "%I");
            _o2.setItem(DateFormatGenerator.DateFormat.hh, "%I");
            _o2.setItem(DateFormatGenerator.DateFormat.m, "%M");
            _o2.setItem(DateFormatGenerator.DateFormat.mm, "%M");
            _o2.setItem(DateFormatGenerator.DateFormat.s, "%S");
            _o2.setItem(DateFormatGenerator.DateFormat.ss, "%S");
            _o2.setItem(DateFormatGenerator.DateFormat.tt, "%p");
            return _o2;
        },
        f8: function (_o3) {
            _o3.setItem(DateFormatGenerator.DateFormat.yy, "yy");
            _o3.setItem(DateFormatGenerator.DateFormat.yyyy, "yyyy");
            _o3.setItem(DateFormatGenerator.DateFormat.M, "L");
            _o3.setItem(DateFormatGenerator.DateFormat.MM, "LL");
            _o3.setItem(DateFormatGenerator.DateFormat.MMM, "LLL");
            _o3.setItem(DateFormatGenerator.DateFormat.MMMM, "LLLL");
            _o3.setItem(DateFormatGenerator.DateFormat.d, "d");
            _o3.setItem(DateFormatGenerator.DateFormat.dd, "dd");
            _o3.setItem(DateFormatGenerator.DateFormat.ddd, "ccc");
            _o3.setItem(DateFormatGenerator.DateFormat.dddd, "cccc");
            _o3.setItem(DateFormatGenerator.DateFormat.h, "h");
            _o3.setItem(DateFormatGenerator.DateFormat.hh, "hh");
            _o3.setItem(DateFormatGenerator.DateFormat.H, "H");
            _o3.setItem(DateFormatGenerator.DateFormat.HH, "HH");
            _o3.setItem(DateFormatGenerator.DateFormat.m, "m");
            _o3.setItem(DateFormatGenerator.DateFormat.mm, "mm");
            _o3.setItem(DateFormatGenerator.DateFormat.s, "s");
            _o3.setItem(DateFormatGenerator.DateFormat.ss, "ss");
            _o3.setItem(DateFormatGenerator.DateFormat.tt, "a");
            return _o3;
        },
        f9: function (_o4) {
            _o4.setItem(DateFormatGenerator.DateFormat.yy, "yy");
            _o4.setItem(DateFormatGenerator.DateFormat.yyyy, "yyyy");
            _o4.setItem(DateFormatGenerator.DateFormat.M, "M");
            _o4.setItem(DateFormatGenerator.DateFormat.MM, "MM");
            _o4.setItem(DateFormatGenerator.DateFormat.MMM, "MMM");
            _o4.setItem(DateFormatGenerator.DateFormat.MMMM, "MMMM");
            _o4.setItem(DateFormatGenerator.DateFormat.d, "d");
            _o4.setItem(DateFormatGenerator.DateFormat.dd, "dd");
            _o4.setItem(DateFormatGenerator.DateFormat.ddd, "EEE");
            _o4.setItem(DateFormatGenerator.DateFormat.dddd, "EEEE");
            _o4.setItem(DateFormatGenerator.DateFormat.H, "H");
            _o4.setItem(DateFormatGenerator.DateFormat.HH, "HH");
            _o4.setItem(DateFormatGenerator.DateFormat.h, "h");
            _o4.setItem(DateFormatGenerator.DateFormat.hh, "hh");
            _o4.setItem(DateFormatGenerator.DateFormat.m, "m");
            _o4.setItem(DateFormatGenerator.DateFormat.mm, "mm");
            _o4.setItem(DateFormatGenerator.DateFormat.s, "s");
            _o4.setItem(DateFormatGenerator.DateFormat.ss, "ss");
            _o4.setItem(DateFormatGenerator.DateFormat.tt, "tt");
            return _o4;
        },
        f10: function (_o5) {
            _o5.setItem(DateFormatGenerator.DateFormat.yy, "y");
            _o5.setItem(DateFormatGenerator.DateFormat.yyyy, "Y");
            _o5.setItem(DateFormatGenerator.DateFormat.M, "n");
            _o5.setItem(DateFormatGenerator.DateFormat.MM, "m");
            _o5.setItem(DateFormatGenerator.DateFormat.MMM, "M");
            _o5.setItem(DateFormatGenerator.DateFormat.MMMM, "F");
            _o5.setItem(DateFormatGenerator.DateFormat.d, "j");
            _o5.setItem(DateFormatGenerator.DateFormat.dd, "d");
            _o5.setItem(DateFormatGenerator.DateFormat.ddd, "D");
            _o5.setItem(DateFormatGenerator.DateFormat.dddd, "l");
            _o5.setItem(DateFormatGenerator.DateFormat.H, "G");
            _o5.setItem(DateFormatGenerator.DateFormat.HH, "H");
            _o5.setItem(DateFormatGenerator.DateFormat.h, "g");
            _o5.setItem(DateFormatGenerator.DateFormat.hh, "h");
            _o5.setItem(DateFormatGenerator.DateFormat.m, "i");
            _o5.setItem(DateFormatGenerator.DateFormat.mm, "i");
            _o5.setItem(DateFormatGenerator.DateFormat.s, "s");
            _o5.setItem(DateFormatGenerator.DateFormat.ss, "s");
            _o5.setItem(DateFormatGenerator.DateFormat.tt, "A");
            return _o5;
        },
        f11: function (_o6) {
            _o6.setItem(DateFormatGenerator.DateFormat.yy, "%y");
            _o6.setItem(DateFormatGenerator.DateFormat.yyyy, "%Y");
            _o6.setItem(DateFormatGenerator.DateFormat.M, "%-m");
            _o6.setItem(DateFormatGenerator.DateFormat.MM, "%m");
            _o6.setItem(DateFormatGenerator.DateFormat.MMM, "%b");
            _o6.setItem(DateFormatGenerator.DateFormat.MMMM, "%B");
            _o6.setItem(DateFormatGenerator.DateFormat.d, "%-d");
            _o6.setItem(DateFormatGenerator.DateFormat.dd, "%d");
            _o6.setItem(DateFormatGenerator.DateFormat.ddd, "%a");
            _o6.setItem(DateFormatGenerator.DateFormat.dddd, "%A");
            _o6.setItem(DateFormatGenerator.DateFormat.H, "%-H");
            _o6.setItem(DateFormatGenerator.DateFormat.HH, "%H");
            _o6.setItem(DateFormatGenerator.DateFormat.h, "%-I");
            _o6.setItem(DateFormatGenerator.DateFormat.hh, "%I");
            _o6.setItem(DateFormatGenerator.DateFormat.m, "%-M");
            _o6.setItem(DateFormatGenerator.DateFormat.mm, "%M");
            _o6.setItem(DateFormatGenerator.DateFormat.s, "%-S");
            _o6.setItem(DateFormatGenerator.DateFormat.ss, "%S");
            _o6.setItem(DateFormatGenerator.DateFormat.tt, "%p");
            return _o6;
        },
        f12: function (_o7) {
            _o7.setItem(DateFormatGenerator.DateFormat.yy, "%y");
            _o7.setItem(DateFormatGenerator.DateFormat.yyyy, "%Y");
            _o7.setItem(DateFormatGenerator.DateFormat.M, "%c");
            _o7.setItem(DateFormatGenerator.DateFormat.MM, "%m");
            _o7.setItem(DateFormatGenerator.DateFormat.MMM, "%b");
            _o7.setItem(DateFormatGenerator.DateFormat.MMMM, "%M");
            _o7.setItem(DateFormatGenerator.DateFormat.d, "%e");
            _o7.setItem(DateFormatGenerator.DateFormat.dd, "%d");
            _o7.setItem(DateFormatGenerator.DateFormat.ddd, "%a");
            _o7.setItem(DateFormatGenerator.DateFormat.dddd, "%W");
            _o7.setItem(DateFormatGenerator.DateFormat.H, "%k");
            _o7.setItem(DateFormatGenerator.DateFormat.HH, "%H");
            _o7.setItem(DateFormatGenerator.DateFormat.h, "%l");
            _o7.setItem(DateFormatGenerator.DateFormat.hh, "%h");
            _o7.setItem(DateFormatGenerator.DateFormat.m, "%i");
            _o7.setItem(DateFormatGenerator.DateFormat.mm, "%i");
            _o7.setItem(DateFormatGenerator.DateFormat.s, "%s");
            _o7.setItem(DateFormatGenerator.DateFormat.ss, "%s");
            _o7.setItem(DateFormatGenerator.DateFormat.tt, "%p");
            return _o7;
        },
        f13: function (_o8) {
            _o8.setItem(DateFormatGenerator.DateFormat.yy, "%y");
            _o8.setItem(DateFormatGenerator.DateFormat.yyyy, "%Y");
            _o8.setItem(DateFormatGenerator.DateFormat.M, "%-m");
            _o8.setItem(DateFormatGenerator.DateFormat.MM, "%m");
            _o8.setItem(DateFormatGenerator.DateFormat.MMM, "%b");
            _o8.setItem(DateFormatGenerator.DateFormat.MMMM, "%B");
            _o8.setItem(DateFormatGenerator.DateFormat.d, "%-d");
            _o8.setItem(DateFormatGenerator.DateFormat.dd, "%d");
            _o8.setItem(DateFormatGenerator.DateFormat.ddd, "%a");
            _o8.setItem(DateFormatGenerator.DateFormat.dddd, "%A");
            _o8.setItem(DateFormatGenerator.DateFormat.H, "%-H");
            _o8.setItem(DateFormatGenerator.DateFormat.HH, "%H");
            _o8.setItem(DateFormatGenerator.DateFormat.h, "%-I");
            _o8.setItem(DateFormatGenerator.DateFormat.hh, "%I");
            _o8.setItem(DateFormatGenerator.DateFormat.m, "%-M");
            _o8.setItem(DateFormatGenerator.DateFormat.mm, "%M");
            _o8.setItem(DateFormatGenerator.DateFormat.s, "%-S");
            _o8.setItem(DateFormatGenerator.DateFormat.ss, "%S");
            _o8.setItem(DateFormatGenerator.DateFormat.tt, "%p");
            return _o8;
        },
        f14: function (_o9) {
            _o9.setItem(DateFormatGenerator.DateFormat.yy, "yy");
            _o9.setItem(DateFormatGenerator.DateFormat.yyyy, "yyyy");
            _o9.setItem(DateFormatGenerator.DateFormat.M, "M");
            _o9.setItem(DateFormatGenerator.DateFormat.MM, "MM");
            _o9.setItem(DateFormatGenerator.DateFormat.MMM, "MMM");
            _o9.setItem(DateFormatGenerator.DateFormat.MMMM, "MMMM");
            _o9.setItem(DateFormatGenerator.DateFormat.d, "d");
            _o9.setItem(DateFormatGenerator.DateFormat.dd, "dd");
            _o9.setItem(DateFormatGenerator.DateFormat.ddd, "E");
            _o9.setItem(DateFormatGenerator.DateFormat.dddd, "EEEE");
            _o9.setItem(DateFormatGenerator.DateFormat.H, "H");
            _o9.setItem(DateFormatGenerator.DateFormat.HH, "HH");
            _o9.setItem(DateFormatGenerator.DateFormat.h, "h");
            _o9.setItem(DateFormatGenerator.DateFormat.hh, "hh");
            _o9.setItem(DateFormatGenerator.DateFormat.m, "m");
            _o9.setItem(DateFormatGenerator.DateFormat.mm, "mm");
            _o9.setItem(DateFormatGenerator.DateFormat.s, "s");
            _o9.setItem(DateFormatGenerator.DateFormat.ss, "ss");
            _o9.setItem(DateFormatGenerator.DateFormat.tt, "a");
            return _o9;
        },
        f15: function (_o10) {
            var $t;
            _o10.setItem("C#", ($t = new DateFormatGenerator.CSDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f6(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("C++", ($t = new DateFormatGenerator.CPPDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f7(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("Luxon JS", ($t = new DateFormatGenerator.LuxonDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f8(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("Java", ($t = new DateFormatGenerator.JavaDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f9(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("PHP", ($t = new DateFormatGenerator.PHPDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f10(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("Python", ($t = new DateFormatGenerator.PythonDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f11(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("MySQL", ($t = new DateFormatGenerator.MySQLDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f12(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("Ruby", ($t = new DateFormatGenerator.RubyDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f13(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            _o10.setItem("Swift", ($t = new DateFormatGenerator.SwiftDateFormat(), $t.Formats = $asm.$.DateFormatGenerator.Program.f14(new (System.Collections.Generic.Dictionary$2(DateFormatGenerator.DateFormat,System.String)).ctor()), $t));
            return _o10;
        },
        f16: function (s) {
            return s.key.getIndex();
        }
    });

    Bridge.define("DateFormatGenerator.URLManipulation", {
        statics: {
            methods: {
                Q: function (name, defaultValue) {
                    var $t;
                    return ($t = new URLSearchParams(window.location.search).get(name), $t != null ? $t : defaultValue);
                },
                ModifyQS: function (key, value, defaultValue) {
                    
function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");
  if( value === undefined ) {
  	if (uri.match(re)) {
		return uri.replace(re, '$1$2').replace(/[?&]$/, '').replaceAll(/([?&])&+/g, '$1').replace(/[?&]#/, '#');
	} else {
		return uri;
	}
  } else {
  	if (uri.match(re)) {
  		return uri.replace(re, '$1' + key + "=" + encodeURIComponent(value) + '$2');
	} else {
    var hash =  '';
    if( uri.indexOf('#') !== -1 ){
        hash = uri.replace(/.*#/, '#');
        uri = uri.replace(/#.*/, '');
    }
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";    
    return uri + separator + key + "=" + encodeURIComponent(value) + hash;
  }
  }  
}
if (value !== undefined && value === defaultValue)
	value = undefined;
history.replaceState({}, '', updateQueryStringParameter(location.href, key, value));

                }
            }
        }
    });

    Bridge.define("DateFormatGenerator.CPPDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeAllText;
                }
            }
        },
        methods: {
            CompleteCodeSample: function (format) {
                return System.String.format("#include <iostream>\r\n#include <iomanip>\r\n#include <ctime>\r\n \r\nint main()\r\n{{\r\n    std::time_t now = std::time(nullptr);\r\n    std::tm date = *std::localtime(&now);\r\n    std::cout << {0};\r\n}}", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.CPPDateFormat.f1).last()]);
            },
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("std::put_time(&date, {0})", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        $enumerator.current = (System.Linq.Enumerable.from(format, System.Char).contains(92) || System.Linq.Enumerable.from(format, System.Char).contains(34)) && !System.Linq.Enumerable.from(format, System.Char).contains(40) && !System.Linq.Enumerable.from(format, System.Char).contains(41) ? System.String.format("std::put_time(&date, R\"({0})\"))", [format]) : "";
                                            $step = 2;
                                            return true;
                                    }
                                    case 2: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            EscapeFormatPart: function (formatPart) {
                return System.String.replaceAll(formatPart, "%", "%%");
            }
        }
    });

    Bridge.ns("DateFormatGenerator.CPPDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.CPPDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        }
    });

    Bridge.define("DateFormatGenerator.CSDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeWords;
                }
            }
        },
        methods: {
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("date.ToString({0})", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        $enumerator.current = System.Linq.Enumerable.from(format, System.Char).contains(92) ? System.String.format("date.ToString({0})", [DateFormatGenerator.Program.ToVerbatimString(format)]) : "";
                                            $step = 2;
                                            return true;
                                    }
                                    case 2: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            InitialEscape: function (rawText) {
                return System.String.replaceAll(rawText, "\\", "\\\\");
            },
            MustEscapeWord: function (word) {
                return System.Text.RegularExpressions.Regex.isMatch(word, "[a-zA-Z\"']");
            },
            CompleteCodeSample: function (format) {
                return System.String.format("using System;\r\n\r\nDateTime date = DateTime.Now;\r\nConsole.WriteLine({0});", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.CSDateFormat.f1).last()]);
            },
            EscapeFormatPart: function (formatPart) {
                return formatPart.length === 1 ? ("\\" + (formatPart || "")) : ("'" + (formatPart || "") + "'");
            }
        }
    });

    Bridge.ns("DateFormatGenerator.CSDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.CSDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        }
    });

    Bridge.define("DateFormatGenerator.JavaDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeWords;
                }
            }
        },
        methods: {
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("date.format(DateTimeFormatter.ofPattern({0}))", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            MustEscapeWord: function (word) {
                return System.Text.RegularExpressions.Regex.isMatch(word, "[a-zA-Z']");
            },
            CompleteCodeSample: function (format) {
                return System.String.format("import java.time.LocalDateTime;\r\nimport java.time.format.DateTimeFormatter;\r\n\r\npublic class Main {{\r\n  public static void main(String[] args) {{\r\n    LocalDateTime date = LocalDateTime.now();\r\n    System.out.println({0});\r\n  }}\r\n}}", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.JavaDateFormat.f1).last()]);
            },
            EscapeFormatPart: function (formatPart) {
                return "'" + (formatPart || "") + "'";
            }
        }
    });

    Bridge.ns("DateFormatGenerator.JavaDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.JavaDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        }
    });

    Bridge.define("DateFormatGenerator.LuxonDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeWords;
                }
            }
        },
        methods: {
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("date.toFormat({0})", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        $enumerator.current = System.String.contains(format,"\"") ? System.String.format("date.toFormat({0})", [DateFormatGenerator.Program.ToJSInterpolatedString(format)]) : "";
                                            $step = 2;
                                            return true;
                                    }
                                    case 2: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            MustEscapeWord: function (word) {
                return System.Text.RegularExpressions.Regex.isMatch(word, "[a-zA-Z']");
            },
            CompleteCodeSample: function (format) {
                return System.String.format("<script\r\n    src=\"https://cdn.jsdelivr.net/npm/luxon@2.1.1/build/global/luxon.min.js\"\r\n    integrity=\"sha256-vSborW7X9FSJg4XLi1TpwZKTlbN2nP6lHhC0XCNrVwU=\"\r\n    crossorigin=\"anonymous\"\r\n></script>\r\n<script>\r\n    const date = luxon.DateTime.now();\r\n    console.log({0});\r\n</script>", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.LuxonDateFormat.f1).last()]);
            },
            EscapeFormatPart: function (formatPart) {
                return "'" + (formatPart || "") + "'";
            }
        }
    });

    Bridge.ns("DateFormatGenerator.LuxonDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.LuxonDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        }
    });

    Bridge.define("DateFormatGenerator.MySQLDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        statics: {
            methods: {
                SimpleDateFormat: function (dateExpression, format) {
                    return System.String.format("DATE_FORMAT({0}, {1})", dateExpression, DateFormatGenerator.Program.ToQuotedString(format));
                }
            }
        },
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeAllText;
                }
            }
        },
        methods: {
            CompleteCodeSample: function (format) {
                return System.String.format("SELECT {0};", [DateFormatGenerator.MySQLDateFormat.SimpleDateFormat("NOW()", format)]);
            },
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = DateFormatGenerator.MySQLDateFormat.SimpleDateFormat("date", format);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            EscapeFormatPart: function (formatPart) {
                return System.String.replaceAll(formatPart, "%", "%%");
            }
        }
    });

    Bridge.define("DateFormatGenerator.PHPDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeAllText;
                }
            }
        },
        methods: {
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("$date->format({0})", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            CompleteCodeSample: function (format) {
                return System.String.format("<?php\r\n$date = new DateTime();\r\necho {0};\r\n?>", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.PHPDateFormat.f1).last()]);
            },
            EscapeFormatPart: function (formatPart) {
                return System.String.concat(Bridge.toArray(System.Linq.Enumerable.from(formatPart, System.Char).select($asm.$.DateFormatGenerator.PHPDateFormat.f2)));
            }
        }
    });

    Bridge.ns("DateFormatGenerator.PHPDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.PHPDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        },
        f2: function (c) {
            return (c >= 97 && c <= 122) || (c >= 65 && c <= 90) || c === 92 ? ("\\" + String.fromCharCode(c)) : String.fromCharCode(c);
        }
    });

    Bridge.define("DateFormatGenerator.PythonDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeAllText;
                }
            }
        },
        methods: {
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("date.strftime({0})", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            CompleteCodeSample: function (format) {
                return System.String.format("from datetime import datetime;\r\n\r\ndate = datetime.now()\r\n\r\nprint({0})", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.PythonDateFormat.f1).last()]);
            },
            EscapeFormatPart: function (formatPart) {
                return System.String.replaceAll(formatPart, "%", "%%");
            }
        }
    });

    Bridge.ns("DateFormatGenerator.PythonDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.PythonDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        }
    });

    Bridge.define("DateFormatGenerator.RubyDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeAllText;
                }
            }
        },
        methods: {
            CompleteCodeSample: function (format) {
                return System.String.format("require 'date'\r\ndate = DateTime.now()\r\nputs {0}", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).where($asm.$.DateFormatGenerator.RubyDateFormat.f1).last()]);
            },
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("date.strftime({0})", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            EscapeFormatPart: function (formatPart) {
                return System.String.replaceAll(formatPart, "%", "%%");
            }
        }
    });

    Bridge.ns("DateFormatGenerator.RubyDateFormat", $asm.$);

    Bridge.apply($asm.$.DateFormatGenerator.RubyDateFormat, {
        f1: function (s) {
            return !Bridge.referenceEquals(s, "");
        }
    });

    Bridge.define("DateFormatGenerator.SwiftDateFormat", {
        inherits: [DateFormatGenerator.DateFormatType],
        props: {
            EscapeBehavior: {
                get: function () {
                    return DateFormatGenerator.EscapeBehavior.EscapeWords;
                }
            }
        },
        methods: {
            CodeSamples: function (format) {
                return new (Bridge.GeneratorEnumerable$1(System.String))(Bridge.fn.bind(this, function (format) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.String))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = System.String.format("let df = DateFormatter()\r\ndf.dateFormat = {0}\r\nlet dateString = df.string(from: date)", [DateFormatGenerator.Program.ToQuotedString(format)]);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            MustEscapeWord: function (word) {
                return System.Text.RegularExpressions.Regex.isMatch(word, "[a-zA-Z']");
            },
            CompleteCodeSample: function (format) {
                return System.String.format("import Foundation\r\n\r\nlet date = Date()\r\n{0}\r\nprint(dateString)", [System.Linq.Enumerable.from(this.CodeSamples(format), System.String).firstOrDefault(null, null)]);
            },
            EscapeFormatPart: function (formatPart) {
                return "'" + (formatPart || "") + "'";
            }
        }
    });
});
