(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Ca1S:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var l=a("Fcif"),n=a("+I+c"),b=(a("mXGw"),a("/FXl")),s=a("TjRS"),c=a("SxAF"),i=(a("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/list.mdx"}});var r={_frontmatter:i},o=s.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(o,Object(l.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(c.a,{repository:"list",mdxType:"Header"}),Object(b.b)("h1",{id:"list"},"List"),Object(b.b)("p",null,"Simple observable list that can also be used inside React using Hooks. This observable is accompanied by ",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"/value"}),"@corets/value")," and ",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"/store"}),"@corets/store"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/list\n")),Object(b.b)("h2",{id:"react"},"React"),Object(b.b)("p",null,"You can use lists inside React through this hooks based integration ",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"/use-list"}),"@corets/use-list"),"."),Object(b.b)("h2",{id:"localstorage"},"LocalStorage"),Object(b.b)("p",null,"There is also a version of this library that syncs its state to the localStorage: ",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"/local-storage-list"}),"@corets/local-storage-list")),Object(b.b)("h2",{id:"createlist"},Object(b.b)("inlineCode",{parentName:"h2"},"createList")),Object(b.b)("p",null,"Creates a new instance of ",Object(b.b)("inlineCode",{parentName:"p"},"List"),":"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'import { createList } from "@corets/list"\n\nconst list = createList(["some", "data"])\n')),Object(b.b)("p",null,"Create a new instance without the factory function:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'import { List } from "@corets/list"\n\nconst list = new List(["some", "data"])\n')),Object(b.b)("h2",{id:"listget"},Object(b.b)("inlineCode",{parentName:"h2"},"List.get")),Object(b.b)("p",null,"Retrieve all values from the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.get()\n")),Object(b.b)("h2",{id:"listgetat"},Object(b.b)("inlineCode",{parentName:"h2"},"List.getAt")),Object(b.b)("p",null,"Retrieve a value at a specific index:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.getAt(0)\n")),Object(b.b)("h2",{id:"listset"},Object(b.b)("inlineCode",{parentName:"h2"},"List.set")),Object(b.b)("p",null,"Replace all values in the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.set(["mango", "potato"])\n')),Object(b.b)("h2",{id:"listadd"},Object(b.b)("inlineCode",{parentName:"h2"},"List.add")),Object(b.b)("p",null,"Add some data values without replacing the previous ones:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.add("oranges", "beans")\n')),Object(b.b)("h2",{id:"listaddat"},Object(b.b)("inlineCode",{parentName:"h2"},"List.addAt")),Object(b.b)("p",null,"Add value at a specific index:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.addAt(1, "chili")\n')),Object(b.b)("h2",{id:"listhas"},Object(b.b)("inlineCode",{parentName:"h2"},"List.has")),Object(b.b)("p",null,"Check if a specific value is in the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.has("oranges")\n')),Object(b.b)("h2",{id:"listhasat"},Object(b.b)("inlineCode",{parentName:"h2"},"List.hasAt")),Object(b.b)("p",null,"Check if there is a value at the specific index:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.hasAt(1)\n")),Object(b.b)("h2",{id:"listremove"},Object(b.b)("inlineCode",{parentName:"h2"},"List.remove")),Object(b.b)("p",null,"Remove a value from the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.remove("beans")\n')),Object(b.b)("h2",{id:"listremoveat"},Object(b.b)("inlineCode",{parentName:"h2"},"List.removeAt")),Object(b.b)("p",null,"Remove value at the specific index:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.removeAt(1)\n")),Object(b.b)("h2",{id:"listindexof"},Object(b.b)("inlineCode",{parentName:"h2"},"List.indexOf")),Object(b.b)("p",null,"Get index of a specific value:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.indexOf("oranges")\n')),Object(b.b)("h2",{id:"listreset"},Object(b.b)("inlineCode",{parentName:"h2"},"List.reset")),Object(b.b)("p",null,"Reset values to the initial state that has been provided during list creation:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.reset()\n")),Object(b.b)("p",null,"You can also reset with a new state:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'list.reset(["foo", "bar"])\n')),Object(b.b)("h2",{id:"listfilter"},Object(b.b)("inlineCode",{parentName:"h2"},"List.filter")),Object(b.b)("p",null,"Filter values in the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.filter((value, index) => true)\n")),Object(b.b)("h2",{id:"listmap"},Object(b.b)("inlineCode",{parentName:"h2"},"List.map")),Object(b.b)("p",null,"Map values in the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.map((value, index) => newValue)\n")),Object(b.b)("h2",{id:"listforeach"},Object(b.b)("inlineCode",{parentName:"h2"},"List.forEach")),Object(b.b)("p",null,"Iterate over values in the list:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.forEach((value, index) => {})\n")),Object(b.b)("h2",{id:"listlisten"},Object(b.b)("inlineCode",{parentName:"h2"},"List.listen")),Object(b.b)("p",null,"Listen to any changes:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"list.listen(state => console.log(state))\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/list.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-list-mdx-4980f5aa1fd2fcb029b5.js.map