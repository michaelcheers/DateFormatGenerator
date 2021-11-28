using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DateFormatGenerator
{
    [External]
    [Name("HTMLDetailsElement")]
    public sealed class HTMLDetailsElement : HTMLElement
    {
        [Template("document.createElement(\"details\")")]
        public extern HTMLDetailsElement();

        [Name("open")]
        public bool Open;
    }
    [External]
    [Name("HTMLElement")]
    public sealed class HTMLSummaryElement : HTMLElement
    {
        [Template("document.createElement(\"summary\")")]
        public extern HTMLSummaryElement();
    }
}
