(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{T5ku:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n("Fcif"),r=n("+I+c"),s=(n("mXGw"),n("/FXl")),a=n("BIGe"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-store.mdx"}});var b={_frontmatter:c},i=a.a;function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(i,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"use-store"},"Use Store"),Object(s.b)("p",null,"This package provides React integration for ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/store"}),"@corets/store"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-store\n")),Object(s.b)("h2",{id:"usestore"},Object(s.b)("inlineCode",{parentName:"h2"},"useStore")),Object(s.b)("p",null,"Use observable stores inside React components:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { createStore } from "@corets/store"\nimport { useStore } from "@corets/use-store"\n\nconst globalStore = createStore({ count: 0 })\n\nconst Example = () => {\n  const store1 = useStore(() => ({ count: 0 }))\n  const store2 = useStore(globalStore)\n\n  // alternative syntax\n  const [store, setStore] = useStore(globalStore).use()\n\n  const increment = () => store1.set({ count: store1.get().count + 1 })\n\n  return (\n    <div>\n      <button onClick={increment}>Count: {store1.get().count}</button>\n    </div>\n  )\n}\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-store.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-store-mdx-c1815bc5f2fe0dbf8788.js.map