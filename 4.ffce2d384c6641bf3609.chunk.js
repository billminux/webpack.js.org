(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{319:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(462);a.default=function(e){var a=e.components;!function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"hr",components:a}),o.a.createElement(r.MDXTag,{name:"p",components:a},"title: loader\nsort: 3\ncontributors:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"manekinekko"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"evenstensberg"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"SpaceK33z"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"gangachris"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"TheLarkInn"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"simon04"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"jhnns"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"byzyk"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"debs-obrien"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"EugeneHlushko"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"wizardofhogwarts"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"lukasgeiter"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"furkle"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"jamesgeorge007")),o.a.createElement(r.MDXTag,{name:"hr",components:a}),o.a.createElement(r.MDXTag,{name:"p",components:a},"loader 用于对模块的源代码进行转换。loader 可以使你在 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import"),' 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," CSS文件！"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"示例"}},"示例",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#%E7%A4%BA%E4%BE%8B","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"例如，你可以使用 loader 告诉 webpack 加载 CSS 文件，或者将 TypeScript 转为 JavaScript。为此，首先安装相对应的 loader："),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-bash",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"npm")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"install")," --save-dev css-loader ts-loader")),o.a.createElement(r.MDXTag,{name:"p",components:a},"然后指示 webpack 对每个 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".css")," 使用 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders/css-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"css-loader")),"，以及对所有 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".ts")," 文件使用 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/TypeStrong/ts-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"ts-loader")),"："),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"webpack.config.js")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},"module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"exports ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    rules",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," test",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token regex"}},"/\\.css$/"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," use",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'css-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," test",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token regex"}},"/\\.ts$/"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," use",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'ts-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n  ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"使用-loader"}},"使用 loader",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#%E4%BD%BF%E7%94%A8-loader","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"在你的应用程序中，有三种使用 loader 的方式："),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#configuration"}},"配置方式"),"（推荐）：在 ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"webpack.config.js")," 文件中指定 loader。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#inline"}},"内联方式"),"：在每个 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"import")," 语句中显式指定 loader。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#cli"}},"CLI 方式"),"：在 shell 命令中指定它们。")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"配置方式"}},"配置方式",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/configuration/module/#modulerules"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"module.rules"))," 允许你在 webpack 配置中指定多个 loader。\n这种方式是展示 loader 的一种简明方式，并且有助于使代码变得简洁和易于维护。同时让你对各个 loader 有个全局概览："),o.a.createElement(r.MDXTag,{name:"p",components:a},"loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。在下面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。查看 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/concepts/loaders/#loader-features"}},"loader 功能")," 章节，了解有关 loader 顺序的更多信息。"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js-with-links",metaString:""}},"module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"exports ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    rules",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        test",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token regex"}},"/\\.css$/"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n        use",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// [style-loader](/loaders/style-loader)"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," loader",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'style-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// [css-loader](/loaders/css-loader)"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n            loader",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'css-loader'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n            options",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n              modules",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),"\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// [sass-loader](/loaders/sass-loader)"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," loader",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'sass-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n        ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n  ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"内联方式"}},"内联方式",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#%E5%86%85%E8%81%94%E6%96%B9%E5%BC%8F","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"可以在 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," 语句或任何 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/api/module-methods"}},'与 "import" 方法同等的引用方式')," 中指定 loader。使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"!")," 将资源中的 loader 分开。每个部分都会相对于当前目录解析。"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"通过为内联 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," 语句添加前缀，可以覆盖 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/configuration"}},"配置")," 中的所有 loader, preLoader 和 postLoader："),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"!")," 前缀，将禁用所有已配置的 normal loader(普通 loader)")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'!style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"!!")," 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'!!style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"-!")," 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'-!style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"选项可以传递查询参数，例如 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"?key=value&foo=bar"),"，或者一个 JSON 对象，例如 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'?{"key":"value","foo":"bar"}'),"。"),o.a.createElement(r.MDXTag,{name:"blockquote",components:a,props:{className:"tip"}},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"尽可能使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"module.rules"),"，因为这样可以减少源码中样板文件的代码量，并且可以在出错时，更快地调试和定位 loader 中的问题。")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"cli-方式"}},"CLI 方式",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#cli-%E6%96%B9%E5%BC%8F","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"还可以通过 CLI 使用 loader："),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-bash",metaString:""}},"webpack --module-bind pug-loader --module-bind ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'css=style-loader!css-loader'"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"这会对 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".jade")," 文件使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"pug-loader"),"，以及对 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".css")," 文件使用 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders/style-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"style-loader"))," 和 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders/css-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"css-loader")),"。"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"loader-特性"}},"loader 特性",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#loader-%E7%89%B9%E6%80%A7","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"loader 支持链式调用。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"loader 可以是同步的，也可以是异步的。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"loader 运行在 Node.js 中，并且能够执行任何操作。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"loader 可以通过 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"options")," 对象配置（仍然支持使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"query")," 参数来设置选项，但是这种方式已被废弃）。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"除了常见的通过 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"package.json")," 的 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"main")," 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"loader")," 字段直接引用一个模块。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"插件(plugin)可以为 loader 带来更多特性。"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"loader 能够产生额外的任意文件。")),o.a.createElement(r.MDXTag,{name:"p",components:a},"可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders"}},"更多其他特性"),"。"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"解析-loader"}},"解析 loader",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#%E8%A7%A3%E6%9E%90-loader","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"loader 遵循标准 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/concepts/module-resolution/"}},"模块解析")," 规则。多数情况下，loader 将从 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/concepts/module-resolution/#module-paths"}},"模块路径")," 加载（通常是从 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm install"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"node_modules")," 进行加载）。"),o.a.createElement(r.MDXTag,{name:"p",components:a},"我们预期 loader 模块导出为一个函数，并且编写为 Node.js 兼容的 JavaScript。通常使用 npm 进行管理 loader，但是也可以将应用程序中的文件作为自定义 loader。按照约定，loader 通常被命名为 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"xxx-loader"),"（例如 ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"json-loader"),"）。更多详细信息，请查看 ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/contribute/writing-a-loader/"}},"编写一个 loader"),"。"))}},461:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o=m(n(0)),r=m(n(464)),p=m(n(1));function m(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)({}),c=s.Provider,l=s.Consumer;a.withMDXComponents=function(e){return function(a){var n=a.components,r=function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(a,["components"]);return o.default.createElement(l,null,(function(a){return o.default.createElement(e,t({components:n||a},r))}))}};var i=function(e){var a=e.components,n=e.children;return o.default.createElement(c,{value:a},n)};i.propTypes={components:p.default.object.isRequired,children:p.default.element.isRequired},a.default=i},462:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(463);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return r(t).default}});var o=n(461);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},463:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),r=n(0),p=c(r),m=c(n(36)),s=n(461);function c(e){return e&&e.__esModule?e:{default:e}}function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function i(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}var u={inlineCode:"code",wrapper:"div"},d=function(e){function a(){return l(this,a),i(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),o(a,[{key:"render",value:function(){var e=this.props,a=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,s=e.children,c=e.components,l=void 0===c?{}:c,i=e.Layout,d=e.layoutProps,g=l[n+"."+a]||l[a]||u[a]||a;return i?((0,m.default)(this,i),p.default.createElement(i,t({components:l},d),p.default.createElement(g,r,s))):p.default.createElement(g,r,s)}}]),a}(r.Component);a.default=(0,s.withMDXComponents)(d)},464:function(e,a,n){"use strict";a.__esModule=!0;var t=r(n(0)),o=r(n(465));function r(e){return e&&e.__esModule?e:{default:e}}a.default=t.default.createContext||o.default,e.exports=a.default},465:function(e,a,n){"use strict";a.__esModule=!0;var t=n(0),o=(p(t),p(n(1))),r=p(n(466));p(n(467));function p(e){return e&&e.__esModule?e:{default:e}}function m(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function c(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}function l(e){var a=[];return{on:function(e){a.push(e)},off:function(e){a=a.filter((function(a){return a!==e}))},get:function(){return e},set:function(n,t){e=n,a.forEach((function(a){return a(e,t)}))}}}a.default=function(e,a){var n,p,i="__create-react-context-"+(0,r.default)()+"__",u=function(e){function n(){var a,t;m(this,n);for(var o=arguments.length,r=Array(o),p=0;p<o;p++)r[p]=arguments[p];return a=t=s(this,e.call.apply(e,[this].concat(r))),t.emitter=l(t.props.value),s(t,a)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,t=e.value,o=void 0;((r=n)===(p=t)?0!==r||1/r==1/p:r!=r&&p!=p)?o=0:(o="function"==typeof a?a(n,t):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,p},n.prototype.render=function(){return this.props.children},n}(t.Component);u.childContextTypes=((n={})[i]=o.default.object.isRequired,n);var d=function(a){function n(){var e,t;m(this,n);for(var o=arguments.length,r=Array(o),p=0;p<o;p++)r[p]=arguments[p];return e=t=s(this,a.call.apply(a,[this].concat(r))),t.state={value:t.getValue()},t.onUpdate=function(e,a){0!=((0|t.observedBits)&a)&&t.setState({value:t.getValue()})},s(t,e)}return c(n,a),n.prototype.componentWillReceiveProps=function(e){var a=e.observedBits;this.observedBits=null==a?1073741823:a},n.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(t.Component);return d.contextTypes=((p={})[i]=o.default.object,p),{Provider:u,Consumer:d}},e.exports=a.default},466:function(e,a,n){"use strict";(function(a){var n="__global_unique_id__";e.exports=function(){return a[n]=(a[n]||0)+1}}).call(this,n(16))},467:function(e,a,n){"use strict";var t=n(468);e.exports=t},468:function(e,a,n){"use strict";function t(e){return function(){return e}}var o=function(){};o.thatReturns=t,o.thatReturnsFalse=t(!1),o.thatReturnsTrue=t(!0),o.thatReturnsNull=t(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o}}]);