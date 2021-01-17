(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{552:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("原文: "),a("a",{attrs:{href:"https://github.com/osfans/trime/wiki/trimer%E5%B0%8F%E7%9F%A5%E8%AF%86(1)---Yaml%E6%96%87%E4%BB%B6%E5%BC%80%E5%A4%B4%E6%B3%A8%E9%87%8A%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/osfans/trime/wiki/trimer小知识(1)---Yaml文件开头注释是什么意思？"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("编辑小狼毫的方案及配置项文件时，通常会看到这样文件开头：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wubi86_double_key.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim: set sw=2 sts=2 et:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# encoding: utf-8")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema_id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wubi86_double_key\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"五笔86双键版"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(".\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("那么开头的注释有什么含义呢？")]),t._v(" "),a("h2",{attrs:{id:"第一行详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一行详解"}},[t._v("#")]),t._v(" 第一行详解")]),t._v(" "),a("p",[t._v("第一行比较简单，一般要放文件名，或者其他注释，不要放正式内容。为了防止加了 Bom 的 utf-8 文件无法解析。\n具体原因见, "),a("RouterLink",{attrs:{to:"/docs/rime/RimeWithSchemata.html"}},[t._v(" Rime 输入方案设计书")])],1),t._v(" "),a("blockquote",[a("p",[t._v("鑑於一些文本編輯器會爲 UTF-8 編碼的文件添加 BOM 標記，爲防止誤將該字符混入文中， 莫要從文件的第一行開始正文，而請在該行行首以 # 記號起一行註釋")])]),t._v(" "),a("p",[t._v("因为默认的文件存储格式是 utf-8,而 utf-8 又分带 bom 和不带 bom 两种格式。\n带 bom 会在开头添加几个字节，方便程序判断一个文本是否为 utf-8 编码。")]),t._v(" "),a("p",[t._v("如果你是程序员，要编写程序读写 utf-8,还可以看看这里的 bom 详解：　"),a("a",{attrs:{href:"http://www.cnblogs.com/findumars/p/3620078.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTF8 最好不要带 BOM，附许多经典评论"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"第二行详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二行详解"}},[t._v("#")]),t._v(" 第二行详解")]),t._v(" "),a("p",[a("strong",[t._v("正式开始最重要的一行，就是第二行")])]),t._v(" "),a("p",[a("code",[t._v("# vim: set sw=2 sts=2 et:")])]),t._v(" "),a("p",[t._v("这是什么意思呢？")]),t._v(" "),a("p",[t._v("这一行有个学名叫 modeline，是 vim 专用的。\n用 vim 打开这个文件时，会自动运行该命令，设置好阅读和编辑该文件的一些参数")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/questions/7119824/what-is-vims-feature-name-for-this-vimsw-4ts-4et",target:"_blank",rel:"noopener noreferrer"}},[t._v("StackOverflow 上关于 modeline 的解释"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("命令的具体含义，参看下面的解答")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"vim中每个命令都是简写和全拼两种模式，后面列出命令的全拼，大家就知道什么意思了\nset sw=2  "sw即shiftwidth,设置自动缩进 2 个空格\nset sts=2 "即设置 softtabstop 为 2. 输入 tab 后就跳了 2 格\nset et   "设置expandtab,即将tab扩展为空格,如果要取消这个选项，为　:set noet\n" vim的开头命令，都是在前面加no表取消\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v('命令之间是通过空格或者":"分隔的，最后那个":"起分隔作用，表示设置结束')]),t._v(" "),a("p",[t._v("所以，总结一下就是，编辑 yaml 文件的具体环境为：")]),t._v(" "),a("ul",[a("li",[t._v("自动缩进为 2")]),t._v(" "),a("li",[t._v("tab 键缩进相当于 2 个空格")]),t._v(" "),a("li",[t._v("将 tab 键自动扩展为空格")])]),t._v(" "),a("p",[t._v("当然，也可以把上面的命令写在_vimrc 中，作为全局设置。\n这样，打开编辑其他的，没有带 modeline 的文件时，也可以使用统一的设置。")]),t._v(" "),a("h2",{attrs:{id:"更多的-vim-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多的-vim-设置"}},[t._v("#")]),t._v(" 更多的 vim 设置")]),t._v(" "),a("p",[t._v("vim 中还有一些其他的缩进相关的设置也列在这里")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('set tabstop=4 "实际的 tab 即为 4 个空格, 而不是缺省的 8 个\n\n# 设置自动的缩进风格\nset ai "设置自动缩进\nset cindent "设置使用 C/C++ 语言的自动缩进方式\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("关于 Vim 的 tabstop,softtabstop 的区分，以及与 shiftwidth，expandtab 组合使用的具体含义。参见下面的帖子")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://blog.csdn.net/chenxiang6891/article/details/41348073",target:"_blank",rel:"noopener noreferrer"}},[t._v("vim 中 tabstop、shiftwidth、softtabstop 以及 expandtab 的关系"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);