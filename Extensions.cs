using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DateFormatGenerator
{
    public static class Extensions
    {
        [Template("((e, c) => c.appendChild(e))({element}, {containingElem})")]
        public static extern T AddTo<T>(this T element, Node containingElem) where T : Node;
        //public static T AddToBody<T>(this T n) where T : Node => App.root.AppendChild<T>(n);
        [Template("{node}.appendChild({element})")]
        public static extern T AppendChild<T>(this Node node, T element) where T : Node;
        [Template("(e => (e.style.display = 'none', e))({element})")]
        public static extern T Hide<T>(this T element) where T : HTMLElement;
        [Template("(e => (e.style.display = '', e))({element})")]
        public static extern T Show<T>(this T element) where T : HTMLElement;
        [Template("(li => (li.appendChild({element}), li))(document.createElement('li'))")]
        public static extern HTMLLIElement WrapLi(this Node element);
        [Template("(div => (div.appendChild({element}), div))(document.createElement('div'))")]
        public static extern HTMLDivElement WrapDiv(this Node element);
        public static T Add<T>(this T element, params Union<Node, string>[] nodes) where T : Node
        {
            foreach (Union<Node, string> node in nodes)
                if (node == null)
                    continue;
                else if (node.Is<string>())
                    element.AppendChild(new Text(node.As<string>()));
                else
                    element.AppendChild(node.As<Node>());
            return element;
        }
        public static T AddElement<T>(this T element, params Union<Node, string>[] nodes) where T : Node => element.Add(nodes);
        public static T AddDiv<T>(this T element, params Union<Node, string>[] nodes) where T : Node
            => element.Add(new HTMLDivElement().Add(nodes));
        public static T AddUl<T>(this T element, params Union<Node, Union<Node, string>[], string>[] nodes) where T : Node
            => element.Add(new HTMLUListElement().Add(nodes.Map(
                n => (Union<Node, string>)(
                    n.Is<Union<Node, string>[]>() ?
                        new HTMLLIElement().Add(n.As<Union<Node, string>[]>()) :
                        n.Is<string>()
                            ? new HTMLLIElement().Add(n.As<string>())
                            : new HTMLLIElement().Add(n.As<Node>())
                )
            )));
        public static string AddCamelSpace(this string str) => Regex.Replace(Regex.Replace(str,
            @"([^_a-z])([^_a-z][a-z])", "$1 $2"),
            @"([a-z])([^_a-z])", "$1 $2");
        public static string ToCamelString<T>(this T e) where T : struct, System.Enum =>
            e.ToString().AddCamelSpace().Replace('_', ' ');
        public static HTMLSelectElement AddEnum<T>(this HTMLSelectElement select, T? defaultValue = null, string defaultValueString = "") where T : struct, System.Enum
        {
            if (defaultValue == null)
                select.Add(new HTMLOptionElement { Value = "", Selected = true, Disable = true }.Add(defaultValueString));
            foreach (T value in System.Enum.GetValues(typeof(T)))
                select.Add(new HTMLOptionElement
                {
                    Value = ((int)(object)value).ToString(),
                    Selected = object.Equals(defaultValue, value)
                }.Add(value.ToCamelString()));
            return select;
        }
        public static T? Value<T>(this HTMLSelectElement select) where T : struct, System.Enum => select.Value == "" ? null : (T?)(T)(object)int.Parse(select.Value);
        public static HTMLSelectElement SetValue<T>(this HTMLSelectElement select, T value) where T : struct, System.Enum
        {
            select.Value = ((int)(object)value).ToString();
            return select;
        }
        public static string ToTimeString(this TimeSpan time) => time.ToString(time >= TimeSpan.FromHours(1) ? @"h\:mm\:ss" : @"m\:ss");
        [Template("(e => (e.setCustomValidity({message}), e.reportValidity(), e))({element})")]
        public static extern T SetCustomValidity<T>(this T element, string message) where T : HTMLElement;
        [Template("(e => (e.setAttribute('list', {datalistID}), e))({element})")]
        public static extern HTMLInputElement SetDataList(this HTMLInputElement element, string datalistID);
        //[Template("{elem}.appendChild({adding})")]
        //public static extern T Append<T> (this Node elem, T adding);

        public static Union<Node, string>[] JoinBR(this IEnumerable<string> strings)
        {
            IEnumerable<Union<Node, string>> Inner()
            {
                using (var enumer = strings.GetEnumerator())
                {
                    if (!enumer.MoveNext()) yield break;
                    yield return enumer.Current;
                    while (enumer.MoveNext())
                    {
                        yield return new HTMLBRElement();
                        yield return enumer.Current;
                    }
                }
            }
            return Inner().ToArray();
        }
    }
}
