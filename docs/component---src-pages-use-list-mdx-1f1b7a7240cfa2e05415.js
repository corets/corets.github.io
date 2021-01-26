(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{IXfP:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var s=n("Fcif"),a=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("TjRS"),r=n("SxAF"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-list.mdx"}});var l={_frontmatter:c},b=o.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(b,Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{repository:"use-list",mdxType:"Header"}),Object(i.b)("h1",{id:"use-list"},"Use List"),Object(i.b)("p",null,"This package provides a React integration for ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"/list"}),"@corets/list"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-list\n")),Object(i.b)("h2",{id:"uselist"},Object(i.b)("inlineCode",{parentName:"h2"},"useList")),Object(i.b)("p",null,"Use observable lists inside React components:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { createList } from "@corets/list"\nimport { useList } from "@corets/use-list"\n\nconst globalList = createList(["apple", "oranges"])\n\nconst Example = () => {\n  const list1 = useList(["apples", "oranges"])\n  const list2 = useList(() => createList(["apples", "oranges"]))\n  const list3 = useList(globalList)\n\n  const addItem = () => list1.add("tomatoes")\n\n  return (\n    <div>\n      <button onClick={addItem}>Items: {list1.get().join(",")}</button>\n    </div>\n  )\n}\n')))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-list.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-list-mdx-1f1b7a7240cfa2e05415.js.map