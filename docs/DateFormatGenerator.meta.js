Bridge.assembly("DateFormatGenerator", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = ["DateFormatGenerator","System","System.Collections.Generic"];
    $m("DateFormatGenerator.DateFormat", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"H","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"H","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"HH","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"HH","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"M","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"M","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"MM","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"MM","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"MMM","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"MMM","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"MMMM","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"MMMM","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"d","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"d","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"dd","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"dd","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"ddd","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"ddd","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"dddd","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"dddd","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"h","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"h","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"hh","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"hh","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"m","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"m","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"mm","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"mm","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"s","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"s","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"ss","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"ss","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"tt","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"tt","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"yy","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"yy","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}},{"a":2,"n":"yyyy","is":true,"t":4,"rt":$n[0].DateFormat,"sn":"yyyy","box":function ($v) { return Bridge.box($v, DateFormatGenerator.DateFormat, System.Enum.toStringFn(DateFormatGenerator.DateFormat));}}]}; }, $n);
    $m("DateFormatGenerator.URLManipulation", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ModifyQS","is":true,"t":8,"pi":[{"n":"key","pt":$n[1].String,"ps":0},{"n":"value","pt":$n[1].String,"ps":1},{"n":"defaultValue","pt":$n[1].String,"ps":2}],"sn":"ModifyQS","rt":$n[1].Void,"p":[$n[1].String,$n[1].String,$n[1].String]},{"a":2,"n":"Q","is":true,"t":8,"pi":[{"n":"name","pt":$n[1].String,"ps":0},{"n":"defaultValue","pt":$n[1].String,"ps":1}],"sn":"Q","rt":$n[1].String,"p":[$n[1].String,$n[1].String]}]}; }, $n);
    $m("DateFormatGenerator.Enum", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Parse","is":true,"t":8,"pi":[{"n":"name","pt":$n[1].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Parse","rt":System.Object,"p":[$n[1].String]}]}; }, $n);
    $m("DateFormatGenerator.Program", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"CreateSelector","is":true,"t":8,"pi":[{"n":"options","pt":$n[2].IEnumerable$1(System.String),"ps":0},{"n":"selector","dv":null,"o":true,"pt":HTMLSelectElement,"ps":1}],"sn":"CreateSelector","rt":HTMLSelectElement,"p":[$n[2].IEnumerable$1(System.String),HTMLSelectElement]},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[1].Void},{"a":2,"n":"SafeSubstitution","is":true,"t":8,"pi":[{"n":"input","pt":$n[1].String,"ps":0},{"n":"substitutions","pt":$n[2].Dictionary$2(System.Text.RegularExpressions.Match,System.String),"ps":1}],"sn":"SafeSubstitution","rt":$n[1].String,"p":[$n[1].String,$n[2].Dictionary$2(System.Text.RegularExpressions.Match,System.String)]},{"a":2,"n":"SingleOrError","is":true,"t":8,"pi":[{"n":"e","pt":$n[2].IEnumerable$1(System.Object),"ps":0},{"n":"error","pt":$n[1].String,"ps":1}],"tpc":1,"tprm":["T"],"sn":"SingleOrError$1","rt":System.Object,"p":[$n[2].IEnumerable$1(System.Object),$n[1].String]},{"a":2,"n":"SingleOrError","is":true,"t":8,"pi":[{"n":"e","pt":$n[2].IEnumerable$1(System.Object),"ps":0},{"n":"condition","pt":Function,"ps":1},{"n":"error","pt":$n[1].String,"ps":2}],"tpc":1,"tprm":["T"],"sn":"SingleOrError","rt":System.Object,"p":[$n[2].IEnumerable$1(System.Object),Function,$n[1].String]},{"a":2,"n":"ToJSInterpolatedString","is":true,"t":8,"pi":[{"n":"input","pt":$n[1].String,"ps":0}],"sn":"ToJSInterpolatedString","rt":$n[1].String,"p":[$n[1].String]},{"a":2,"n":"ToQuotedString","is":true,"t":8,"pi":[{"n":"input","pt":$n[1].String,"ps":0}],"sn":"ToQuotedString","rt":$n[1].String,"p":[$n[1].String]},{"a":2,"n":"ToVerbatimString","is":true,"t":8,"pi":[{"n":"input","pt":$n[1].String,"ps":0}],"sn":"ToVerbatimString","rt":$n[1].String,"p":[$n[1].String]},{"a":2,"n":"CodeSampleOpen","is":true,"t":4,"rt":$n[1].Nullable$1(System.Boolean),"sn":"CodeSampleOpen","box":function ($v) { return Bridge.box($v, System.Boolean, System.Nullable.toStringFn(System.Boolean.toString), System.Nullable.getHashCode);}},{"a":2,"n":"errors","is":true,"t":4,"rt":$n[2].List$1(System.String),"sn":"errors"},{"a":2,"n":"langs","is":true,"t":4,"rt":$n[2].Dictionary$2(System.String,DateFormatGenerator.DateFormatType),"sn":"langs","ro":true},{"a":2,"n":"longMonthRegex","is":true,"t":4,"rt":$n[1].String,"sn":"longMonthRegex"},{"a":2,"n":"shortMonthRegex","is":true,"t":4,"rt":$n[1].String,"sn":"shortMonthRegex"},{"a":2,"n":"strMonthRegex","is":true,"t":4,"rt":$n[1].String,"sn":"strMonthRegex"}]}; }, $n);
    $m("DateFormatGenerator.EscapeBehavior", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EscapeAllText","is":true,"t":4,"rt":$n[0].EscapeBehavior,"sn":"EscapeAllText","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},{"a":2,"n":"EscapeFormats","is":true,"t":4,"rt":$n[0].EscapeBehavior,"sn":"EscapeFormats","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},{"a":2,"n":"EscapeWords","is":true,"t":4,"rt":$n[0].EscapeBehavior,"sn":"EscapeWords","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}}]}; }, $n);
    $m("DateFormatGenerator.DateFormatType", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"v":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ab":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"v":true,"a":2,"n":"GenerateFormatString","t":8,"pi":[{"n":"input","pt":$n[1].String,"ps":0}],"sn":"GenerateFormatString","rt":$n[1].String,"p":[$n[1].String]},{"v":true,"a":2,"n":"InitialEscape","t":8,"pi":[{"n":"rawText","pt":$n[1].String,"ps":0}],"sn":"InitialEscape","rt":$n[1].String,"p":[$n[1].String]},{"v":true,"a":2,"n":"MustEscapeWord","t":8,"pi":[{"n":"word","pt":$n[1].String,"ps":0}],"sn":"MustEscapeWord","rt":$n[1].Boolean,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ab":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ab":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"},{"a":2,"n":"Formats","t":4,"rt":$n[2].Dictionary$2(DateFormatGenerator.DateFormat,System.String),"sn":"Formats"},{"a":1,"backing":true,"n":"<EscapeBehavior>k__BackingField","t":4,"rt":$n[0].EscapeBehavior,"sn":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}}]}; }, $n);
    $m("DateFormatGenerator.CSDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"InitialEscape","t":8,"pi":[{"n":"rawText","pt":$n[1].String,"ps":0}],"sn":"InitialEscape","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"MustEscapeWord","t":8,"pi":[{"n":"word","pt":$n[1].String,"ps":0}],"sn":"MustEscapeWord","rt":$n[1].Boolean,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.JavaDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"MustEscapeWord","t":8,"pi":[{"n":"word","pt":$n[1].String,"ps":0}],"sn":"MustEscapeWord","rt":$n[1].Boolean,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.PHPDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.PythonDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.LuxonDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"MustEscapeWord","t":8,"pi":[{"n":"word","pt":$n[1].String,"ps":0}],"sn":"MustEscapeWord","rt":$n[1].Boolean,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.CPPDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.MySQLDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"a":1,"n":"SimpleDateFormat","is":true,"t":8,"pi":[{"n":"dateExpression","pt":$n[1].String,"ps":0},{"n":"format","pt":$n[1].String,"ps":1}],"sn":"SimpleDateFormat","rt":$n[1].String,"p":[$n[1].String,$n[1].String]},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.RubyDateFormat", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CodeSamples","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CodeSamples","rt":$n[2].IEnumerable$1(System.String),"p":[$n[1].String]},{"ov":true,"a":2,"n":"CompleteCodeSample","t":8,"pi":[{"n":"format","pt":$n[1].String,"ps":0}],"sn":"CompleteCodeSample","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeFormatPart","t":8,"pi":[{"n":"formatPart","pt":$n[1].String,"ps":0}],"sn":"EscapeFormatPart","rt":$n[1].String,"p":[$n[1].String]},{"ov":true,"a":2,"n":"EscapeBehavior","t":16,"rt":$n[0].EscapeBehavior,"g":{"ov":true,"a":2,"n":"get_EscapeBehavior","t":8,"rt":$n[0].EscapeBehavior,"fg":"EscapeBehavior","box":function ($v) { return Bridge.box($v, DateFormatGenerator.EscapeBehavior, System.Enum.toStringFn(DateFormatGenerator.EscapeBehavior));}},"fn":"EscapeBehavior"}]}; }, $n);
    $m("DateFormatGenerator.Extensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Add","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0},{"n":"nodes","ip":true,"pt":System.Array.type(System.Object),"ps":1}],"tpc":1,"tprm":["T"],"sn":"Add","rt":System.Object,"p":[System.Object,System.Array.type(System.Object)]},{"a":2,"n":"AddCamelSpace","is":true,"t":8,"pi":[{"n":"str","pt":$n[1].String,"ps":0}],"sn":"AddCamelSpace","rt":$n[1].String,"p":[$n[1].String]},{"a":2,"n":"AddDiv","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0},{"n":"nodes","ip":true,"pt":System.Array.type(System.Object),"ps":1}],"tpc":1,"tprm":["T"],"sn":"AddDiv","rt":System.Object,"p":[System.Object,System.Array.type(System.Object)]},{"a":2,"n":"AddElement","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0},{"n":"nodes","ip":true,"pt":System.Array.type(System.Object),"ps":1}],"tpc":1,"tprm":["T"],"sn":"AddElement","rt":System.Object,"p":[System.Object,System.Array.type(System.Object)]},{"a":2,"n":"AddEnum","is":true,"t":8,"pi":[{"n":"select","pt":HTMLSelectElement,"ps":0},{"n":"defaultValue","dv":null,"o":true,"pt":$n[1].Nullable$1(System.Object),"ps":1},{"n":"defaultValueString","dv":"","o":true,"pt":$n[1].String,"ps":2}],"tpc":1,"tprm":["T"],"sn":"AddEnum","rt":HTMLSelectElement,"p":[HTMLSelectElement,$n[1].Nullable$1(System.Object),$n[1].String]},{"a":2,"n":"AddTo","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0},{"n":"containingElem","pt":Node,"ps":1}],"tpc":1,"def":function (T, element, containingElem) { return ((e, c) => c.appendChild(e))(element, containingElem); },"rt":System.Object,"p":[System.Object,Node]},{"a":2,"n":"AddUl","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0},{"n":"nodes","ip":true,"pt":System.Array.type(System.Object),"ps":1}],"tpc":1,"tprm":["T"],"sn":"AddUl","rt":System.Object,"p":[System.Object,System.Array.type(System.Object)]},{"a":2,"n":"AppendChild","is":true,"t":8,"pi":[{"n":"node","pt":Node,"ps":0},{"n":"element","pt":System.Object,"ps":1}],"tpc":1,"def":function (T, node, element) { return node.appendChild(element); },"rt":System.Object,"p":[Node,System.Object]},{"a":2,"n":"Hide","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0}],"tpc":1,"def":function (T, element) { return (e => (e.style.display = 'none', e))(element); },"rt":System.Object,"p":[System.Object]},{"a":2,"n":"JoinBR","is":true,"t":8,"pi":[{"n":"strings","pt":$n[2].IEnumerable$1(System.String),"ps":0}],"sn":"JoinBR","rt":System.Array.type(System.Object),"p":[$n[2].IEnumerable$1(System.String)]},{"a":2,"n":"SetCustomValidity","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0},{"n":"message","pt":$n[1].String,"ps":1}],"tpc":1,"def":function (T, element, message) { return (e => (e.setCustomValidity(message), e.reportValidity(), e))(element); },"rt":System.Object,"p":[System.Object,$n[1].String]},{"a":2,"n":"SetDataList","is":true,"t":8,"pi":[{"n":"element","pt":HTMLInputElement,"ps":0},{"n":"datalistID","pt":$n[1].String,"ps":1}],"tpc":0,"def":function (element, datalistID) { return (e => (e.setAttribute('list', datalistID), e))(element); },"rt":HTMLInputElement,"p":[HTMLInputElement,$n[1].String]},{"a":2,"n":"SetValue","is":true,"t":8,"pi":[{"n":"select","pt":HTMLSelectElement,"ps":0},{"n":"value","pt":System.Object,"ps":1}],"tpc":1,"tprm":["T"],"sn":"SetValue","rt":HTMLSelectElement,"p":[HTMLSelectElement,System.Object]},{"a":2,"n":"Show","is":true,"t":8,"pi":[{"n":"element","pt":System.Object,"ps":0}],"tpc":1,"def":function (T, element) { return (e => (e.style.display = '', e))(element); },"rt":System.Object,"p":[System.Object]},{"a":2,"n":"ToCamelString","is":true,"t":8,"pi":[{"n":"e","pt":System.Object,"ps":0}],"tpc":1,"tprm":["T"],"sn":"ToCamelString","rt":$n[1].String,"p":[System.Object]},{"a":2,"n":"ToTimeString","is":true,"t":8,"pi":[{"n":"time","pt":$n[1].TimeSpan,"ps":0}],"sn":"ToTimeString","rt":$n[1].String,"p":[$n[1].TimeSpan]},{"a":2,"n":"Value","is":true,"t":8,"pi":[{"n":"select","pt":HTMLSelectElement,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Value","rt":$n[1].Nullable$1(System.Object),"p":[HTMLSelectElement]},{"a":2,"n":"WrapDiv","is":true,"t":8,"pi":[{"n":"element","pt":Node,"ps":0}],"tpc":0,"def":function (element) { return (div => (div.appendChild(element), div))(document.createElement('div')); },"rt":HTMLDivElement,"p":[Node]},{"a":2,"n":"WrapLi","is":true,"t":8,"pi":[{"n":"element","pt":Node,"ps":0}],"tpc":0,"def":function (element) { return (li => (li.appendChild(element), li))(document.createElement('li')); },"rt":HTMLLIElement,"p":[Node]}]}; }, $n);
});
