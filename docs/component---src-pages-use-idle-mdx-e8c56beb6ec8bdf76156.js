(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"9cvf":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n("Fcif"),s=n("+I+c"),r=(n("mXGw"),n("/FXl")),o=n("BIGe"),c=(n("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/use-idle.mdx"}});var i={_frontmatter:c},l=o.a;function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)(l,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"use-idle"},"Use Idle"),Object(r.b)("p",null,"Detect when a user goes idle."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/use-idle\n")),Object(r.b)("h2",{id:"useidle"},Object(r.b)("inlineCode",{parentName:"h2"},"useIdle")),Object(r.b)("p",null,"Detect when the user has been inactive for a while:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useEffect } from "react"\nimport { useIdle } from "@corets/use-idle"\n\nconst Example = () => {\n  const isIdle = useIdle({\n    // check every 10s\n    interval: 10 * 1000,\n    // regard user as idle after 30min\n    threshold: 30 * 60 * 1000,\n    // specify events that should reset the idle status (default: ["mousemove", "mouseup", "keyup", "focus", "resize"])\n    events: ["mousemove"],\n    // local storage key for the last activity timestamp (default: last-activity)\n    storageKey: "custom-storage-key"\n  })\n\n  useEffect(() => {\n    if (isIdle) {\n      // do something, for example: logout()\n    }\n  }, [isIdle])\n\n  return (\n    <div>My App</div>\n  )\n}\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/use-idle.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-idle-mdx-e8c56beb6ec8bdf76156.js.map