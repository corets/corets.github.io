(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{GKSR:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return b}));var o=t("Fcif"),r=t("+I+c"),a=(t("mXGw"),t("/FXl")),c=t("BIGe"),i=(t("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/memo.mdx"}});var s={_frontmatter:i},m=c.a;function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(m,Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"memo"},"Memo"),Object(a.b)("p",null,"React component used to isolate children from unnecessary re-renders."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/memo\n")),Object(a.b)("h2",{id:"memo-1"},Object(a.b)("inlineCode",{parentName:"h2"},"<Memo/>")),Object(a.b)("p",null,"Memoizes children components to prevent unnecessary re-renders. Children get re-rendered only when one of the fields passed into the ",Object(a.b)("inlineCode",{parentName:"p"},"deps")," array change, very similar to how ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect"),", ",Object(a.b)("inlineCode",{parentName:"p"},"useMemo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"useCallback")," work. You can also display the render count for debugging purposes by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"showRenders")," property to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useState } from "react"\nimport { Memo } from "@corets/memo"\n\nconst Example = () => {\n  const [a, setA] = useState(0)\n  const [b, setB] = useState(0)\n\n  const incrementFirstValue = () => setA(a + 1)\n  const incrementSecondValue  = () => setB(b + 1)\n\n  return (\n    <div>\n      <div>A: {a}</div>\n      <div>B: {b}</div>\n\n      <Memo deps={[b]} showRenders>\n        <div>Memo: will only re-render when <code>b</code> changes</div>\n        <div>A: {a}</div>\n        <div>B: {b}</div>\n      </Memo>\n\n      <button onClick={incrementFirstValue}>Increment A</button>\n      <button onClick={incrementSecondValue}>Increment B</button>\n    </div>\n  )\n}\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/memo.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-memo-mdx-e63c69332eb41ab8bcf7.js.map