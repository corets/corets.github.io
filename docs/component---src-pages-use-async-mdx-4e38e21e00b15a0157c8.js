(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{K9cW:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return d}));var a=t("Fcif"),o=t("+I+c"),r=(t("mXGw"),t("/FXl")),s=t("BIGe"),i=(t("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-async.mdx"}});var c={_frontmatter:i},l=s.a;function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"use-async"},"Use Async"),Object(r.b)("p",null,"A convenient hook to deal with async operations inside React components."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-async\n")),Object(r.b)("h2",{id:"useasync"},Object(r.b)("inlineCode",{parentName:"h2"},"useAsync")),Object(r.b)("p",null,"Function ",Object(r.b)("inlineCode",{parentName:"p"},"useAsync")," takes any other function that returns anything that can be ",Object(r.b)("em",{parentName:"p"},"awaited")," and returns its result as soon as the promise resolves. You also get some useful things like a ",Object(r.b)("inlineCode",{parentName:"p"},"isLoading")," indicator, the possible ",Object(r.b)("inlineCode",{parentName:"p"},"error")," that might have been thrown / or occurred through rejection, a ",Object(r.b)("inlineCode",{parentName:"p"},"reload")," function to rerun the async procedure and a ",Object(r.b)("inlineCode",{parentName:"p"},"refresh")," function that can be used to trigger a ",Object(r.b)("em",{parentName:"p"},"silent")," reload (without changing loading status and not disposing previous result until a new one has been loaded). Async action can also be canceled with ",Object(r.b)("inlineCode",{parentName:"p"},"cancel")," or resolved directly using ",Object(r.b)("inlineCode",{parentName:"p"},"resolve"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { useAsync } from "@corets/use-async"\n\nconst fetchCommodityPrice = (commodity: string) =>\n  new Promise<string>((resolve) =>\n    setTimeout(\n      () => resolve(`${commodity}: 1000$`),\n      3000\n    ))\n\nconst Example = () => {\n  const handle = useAsync(() => fetchCommodityPrice("gold"), [])\n\n  if (handle.isLoading) {\n    return <span>Loading...</span>\n  }\n\n  if (handle.isErrored) {\n    return <span>There was an error :(</span>\n  }\n\n  const handleReload = () => handle.reload()\n  const handleRefresh = () => handle.refresh()\n  const handleReloadWithOverride = () => handle.reload(() => fetchCommodityPrice("silver"))\n  const handleRefreshWithOverride = () => handle.refresh(() => fetchCommodityPrice("silver"))\n  const handleResolve = () => handle.resolve("Platinum: 99999$")\n  const handleCancel = () => handle.cancel()\n\n  return (\n    <div>\n      <span>{handle.result}</span>\n      <button onClick={handleReload}>reload</button>\n      <button onClick={handleRefresh}>reload silently</button>\n      <button onClick={handleReloadWithOverride}>override reload</button>\n      <button onClick={handleRefreshWithOverride}>override and reload silently</button>\n      <button onClick={handleResolve}>resolve immediately</button>\n      <button onClick={handleCancel}>cancel</button>\n    </div>\n  )\n}\n')))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-async.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-async-mdx-4e38e21e00b15a0157c8.js.map