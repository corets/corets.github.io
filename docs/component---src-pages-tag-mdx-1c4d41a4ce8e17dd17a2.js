(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{AsX6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),i=a("+I+c"),r=(a("mXGw"),a("/FXl")),o=a("BIGe"),s=(a("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/tag.mdx"}});var c={_frontmatter:s},b=o.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tag"},"Tag"),Object(r.b)("p",null,"Type ",Object(r.b)("em",{parentName:"p"},"tagging")," (also known as ",Object(r.b)("em",{parentName:"p"},"branding"),") is a common practice in advanced TypeScript setups. The main purpose of this approach is to make certain primitive types more predictable. Using branded types leads to a better traceability of data in the project and encourages developers to be more ",Object(r.b)("em",{parentName:"p"},"aware")," when working with critical, primitive data."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/tag\n")),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("p",null,"Let's have a look at this example below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"type UUID = string\n\ntype User = {\n  id: UUID\n}\n")),Object(r.b)("p",null,"We have created a type alias ",Object(r.b)("inlineCode",{parentName:"p"},"UUID")," that is used on the type ",Object(r.b)("inlineCode",{parentName:"p"},"User"),". Any ",Object(r.b)("inlineCode",{parentName:"p"},"string")," value is a valid ",Object(r.b)("inlineCode",{parentName:"p"},"UUID"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const user: User = { id: "some-uuid" }\n')),Object(r.b)("p",null,"This is very implicit, not traceable, and is not very ",Object(r.b)("em",{parentName:"p"},"safe")," since you pay less attention to what is passed around, since everything is just a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("p",null,"What if we could make this more explicit?"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { Tag } from "@corets/tag"\n\ntype UUID = Tag<string, "uuid">\n\ntype User = {\n    id: UUID\n}\n\n// this will not work since string is not assignable to UUID\nconst user1: User = { id: "some-uuid" }\n\n// exlicitly cast it to UUID\nconst user2: User = { id: "some-uuid" as UUID }\n')),Object(r.b)("p",null,"Now we are using a branded ",Object(r.b)("inlineCode",{parentName:"p"},"string")," instead of plain ",Object(r.b)("inlineCode",{parentName:"p"},"string"),". You cannot assign a plain ",Object(r.b)("inlineCode",{parentName:"p"},"string")," to a ",Object(r.b)("inlineCode",{parentName:"p"},"UUID")," anymore, if you do so, you have to cast it explicitly. Now you also have full traceability on where ",Object(r.b)("inlineCode",{parentName:"p"},"UUID"),"s are used in the project."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," You can go even further and add some type guards, a factory function, etc. for tagged types, but this is not covered here."),Object(r.b)("h2",{id:"tagtype-alias"},Object(r.b)("inlineCode",{parentName:"h2"},"Tag<type, alias>")),Object(r.b)("p",null,"Creates a ",Object(r.b)("em",{parentName:"p"},"branded")," type for any kind of primitive values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { Tag } from "@corets/tag"\n\nconst Email = Tag<string, "email">\n\n// this will work\nconst email2: Email = "foo@bar.com" as Email\n// this will not work\nconst email1: Email = "foo@bar.com"\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," You get full traceability of where ",Object(r.b)("em",{parentName:"p"},"branded")," types are used in your project, since you always have to cast a primitive value to that specific type!"))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/tag.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tag-mdx-1c4d41a4ce8e17dd17a2.js.map