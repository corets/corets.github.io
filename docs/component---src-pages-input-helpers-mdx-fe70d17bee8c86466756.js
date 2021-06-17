(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QaWn:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var l=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),c=n("BIGe"),s=(n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/input-helpers.mdx"}});var r={_frontmatter:s},o=c.a;function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(o,Object(l.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"input-helpers"},"Input Helpers"),Object(a.b)("p",null,"Various helpers related to input specific functionality."),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/input-helpers\n")),Object(a.b)("h2",{id:"select-a-file-and-send-to-server"},"Select a file and send to server"),Object(a.b)("p",null,"Submit file to server immediately after the selection:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import React from \"react\"\nimport { selectFile } from \"@corets/input-helpers\"\nimport axios from \"axios\"\n\nconst Example = () => {\n  const handleSelectFile = async () => {\n    const file = await selectFile()\n\n    if ( ! file) return\n\n    submitFile(file)\n  }\n\n  const submitFile = async (file: File) => {\n    const formData = new FormData()\n    formData.append('file', file)\n\n    await axios.post(`/endpoint`, formData, {\n      headers: { 'content-type': 'multipart/form-data' },\n    })\n  }\n\n  return <button onClick={handleSelectFile}/>\n}\n")),Object(a.b)("h2",{id:"select-a-file-and-show-preview"},"Select a file and show preview"),Object(a.b)("p",null,"Show a file preview immediately after the selection:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useState } from "react"\nimport { selectFileOfType } from "@corets/input-helpers"\n\nconst Example = () => {\n  const [selectedFile, setSelectedFile] = useState()\n\n  const handleSelectFileOfType = async () => {\n    const file = await selectFileOfType(\'image/*\')\n\n    if ( ! file) return\n\n    setSelectedFile(file)\n  }\n\n  return (\n    <div>\n      <button onClick={handleSelectFileOfType}/>\n\n      {selectedFile && (\n        <img src={URL.createObjectURL(selectedFile)}/>\n      )}\n    </div>\n  )\n}\n')),Object(a.b)("h2",{id:"selectfile"},Object(a.b)("inlineCode",{parentName:"h2"},"selectFile")),Object(a.b)("p",null,"Prompt user to select one file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),'import { selectFile } from "./selectFile"\n\nconst file = await selectFile()\n\nif (file) {\n  // some something with the file...\n}\n')),Object(a.b)("h2",{id:"selectfiles"},Object(a.b)("inlineCode",{parentName:"h2"},"selectFiles")),Object(a.b)("p",null,"Prompt user to select multiple files:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),'import { selectFiles } from "@corets/input-helpers"\n\nconst files = await selectFiles()\n\nif (files.length > 0) {\n  // do something with the files...\n}\n')),Object(a.b)("h2",{id:"selectfileoftype"},Object(a.b)("inlineCode",{parentName:"h2"},"selectFileOfType")),Object(a.b)("p",null,"Prompt user to select a file of a specific type:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import { selectFileOfType } from \"@corets/input-helpers\"\n\nconst file = await selectFileOfType('image/*')\n\nif (file) {\n  // so something with the file\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Read more about file types ",Object(a.b)("a",Object(l.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"}),"here"),"."),Object(a.b)("h2",{id:"selectfilesoftype"},Object(a.b)("inlineCode",{parentName:"h2"},"selectFilesOfType")),Object(a.b)("p",null,"Prompt user to select multiple files of a specific type:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import { selectFilesOfType } from \"@corets/input-helpers\"\n\nconst files = await selectFilesOfType('image/*')\n\nif (files.length > 0) {\n  // so something with the files...\n}\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/input-helpers.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-input-helpers-mdx-fe70d17bee8c86466756.js.map