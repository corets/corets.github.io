(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JZdC:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r("Fcif"),a=r("+I+c"),o=(r("mXGw"),r("/FXl")),s=r("BIGe"),i=(r("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/form.mdx"}});var c={_frontmatter:i},m=s.a;function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"form"},"Form"),Object(o.b)("p",null,"An opinionated form library for any JavaScript environment, with focus on React and React Native. The main difference between this package and other form libraries out there, is the ability to define a form ",Object(o.b)("em",{parentName:"p"},"outside")," of your presentation layer and just map it inside a component later on. A form built this way will encapsulate all the necessary logic to handle validation, submission, error handling and so on. This leads to proper encapsulation (separation of concerns), easier testing, composability and reusability."),Object(o.b)("p",null,"Quick feature overview:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Runs everywhere"),", including React, React Native"),Object(o.b)("li",{parentName:"ul"},"Strong typings from tail to toe, for ",Object(o.b)("strong",{parentName:"li"},"Optimal developer experience")),Object(o.b)("li",{parentName:"ul"},"Is easily ",Object(o.b)("strong",{parentName:"li"},"Testable without any UI")),Object(o.b)("li",{parentName:"ul"},"Proper decoupling, treat ",Object(o.b)("strong",{parentName:"li"},"Forms as a service")," and reduce complexity inside components"),Object(o.b)("li",{parentName:"ul"},"John Wick kind of crazy ",Object(o.b)("strong",{parentName:"li"},"Powerful validation")," trough ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/schema"}),"@corets/schema")),Object(o.b)("li",{parentName:"ul"},"Convenient ",Object(o.b)("strong",{parentName:"li"},"Status indicators")," (submitting, errors, dirty fields, and so on)"),Object(o.b)("li",{parentName:"ul"},"Tested by an army of killer coding ninja monkeys with a ",Object(o.b)("strong",{parentName:"li"},"Test coverage of 100%"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @corets/form\n")),Object(o.b)("h2",{id:"react"},"React"),Object(o.b)("p",null,"Before you can start using this library inside React, you have to add the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/use-form"}),"@corets/use-form")," package first. It provides a seamless integration through a hooks based API."),Object(o.b)("h2",{id:"quick-start"},"Quick start"),Object(o.b)("p",null,"Use this example as a high level overview of what this library has to offer and whether it suits your personal preference. Here we are going to create a very basic form that has some validation logic and dispatches an HTTP request to a remote endpoint, for processing."),Object(o.b)("p",null,"First, let's define our types:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// sample data type that you want to create through an api call\nexport type User = {\n  uuid: string\n  firstName: string\n  lastName: string\n}\n\n// this is what the form looks like\nexport type CreateUserForm = {\n  firstName: string\n  lastName: string\n}\n\n// meaningful feedback for form consumers\nexport type CreateUserResult = {\n  success?: string\n  error?: string\n  user?: User\n}\n")),Object(o.b)("p",null,"Next, define a method that is going to call the API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// simulate api call for demo purposes\nexport const createUser = async (data: CreateUserForm): Promise<User> => ({ id: 1, ...data })\n")),Object(o.b)("p",null,"Now we can build the form logic:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createFormFromSchema } from "@corets/form"\nimport { object, value } from "@corets/schema"\n\n// a dedicated form factory\nexport const createUserForm = () => {\n  // create a new form with some initial state and validation logic\n  return createFormFromSchema<CreateUserForm, CreateUserResult>(object({\n      firstName: value("").string().min(2).max(20).toTrimmed(),\n      lastName: value("").string().min(2).max(20).toTrimmed()\n    }))\n    // add form handling logic\n    .handler(async (form) => {\n      try {\n        // pretend to make an api call here\n        const user = await createUser(form.get())\n\n        return { success: "User created", user }\n      } catch (error) {\n        return { error: "Could not create user" }\n      }\n    })\n}\n')),Object(o.b)("p",null,"Now let's build the form UI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\n\nimport { useForm } from "@corets/use-form"\nimport { useFormBinder } from "@corets/use-form-binder"\n\nconst CreateUserForm = () => {\n  // create a new form instance and consume it for proper re-renders when state changes,\n  // also returns a binding utility to connect vanilla input elements with form values\n  const form = useForm(createUserForm)\n\n  // create a form binder for vanilla elements\n  const bind = useFormBinder(form)\n\n  // various form state\n  const errors = form.getErrors()\n  const result = form.getResult()\n\n  return (\n    <form {...bind.form()}>\n      <div>{result?.success || result?.error }</div>\n\n      <div>\n        <input {...bind.input("firstName")} placeholder="First name"/>\n        <div>{form.getErrorsAt("firstName")}</div>\n      </div>\n\n      <div>\n        <input {...bind.input("lastName")} placeholder="Last name"/>\n        <div>{errors.getErrorsAt("lastName")}</div>\n      </div>\n\n      <button {...bind.button()}>Create</button>\n    </form>\n  )\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Here we are using a vanilla form binder in order to connect input elements to the form, read more about binders in the next sections."),Object(o.b)("h2",{id:"binders"},"Binders"),Object(o.b)("p",null,"This library is not designed for any specific framework or platform. You should be able to use it everywhere where you can run JavaScript. Considering those limitations, it does not offer any logic on how to connect to the input fields out of the box. Package ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/use-form-binder"}),"@corets/use-form-binder")," provides bindings for vanilla HTML elements, but this won't be enough, most likely."),Object(o.b)("p",null,"Given the nature of modern frontend development, projects use various component libraries and more often than not you have to write a custom input component. Obviously it is not possible to write one binder to ",Object(o.b)("em",{parentName:"p"},"rule them all"),". Therefore the most pragmatic approach is to create dedicated binders for various use cases. The good thing is that ",Object(o.b)("strong",{parentName:"p"},"It's super easy to roll your own binder!")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/corets/use-form-binder/blob/master/src/FormBinder.ts"}),"Take a look at how binders are implemented in the @corets/use-form-binder package")),Object(o.b)("p",null,"Here is an example of a very basic, vanilla text field binder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"\nconst createBinder = (form) => ({\n  input: createInputBinder(form)\n})\n\nconst createInputBinder = (form) => (path) => {\n  return {\n    name: path,\n    value: form.getAt(path),\n    onChange: (e) => form.setAt(path, e.target.value),\n  }\n}\n")),Object(o.b)("p",null,"That's all there is about it! The best thing is, no matter what component you are going to use, ",Object(o.b)("strong",{parentName:"p"},"You can always make it work! ™")),Object(o.b)("p",null,"Now let's use that binder in our form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react"\nimport { createForm } from "@corets/form"\nimport { useForm } from "@corets/use-form"\n\nconst Example = () => {\n  const form = useForm(() => createForm({ field: "value" }))\n  const bind = createBinder(form)\n\n  return <input {...bind.input("field")} />\n}\n')),Object(o.b)("h2",{id:"optimisation"},"Optimisation"),Object(o.b)("p",null,"You can reduce the number of re-renders in big forms, by wrapping your UI blocks into the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/memo"}),Object(o.b)("inlineCode",{parentName:"a"},"<Memo />"))," component from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/memo"}),"@corets/memo")," package. Most likely you won't ever need this, since we try to keep the render count as low as possible anyway, but if you do - we've got you covered."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useState } from "react"\nimport { createForm } from "@corets/form"\nimport { useForm } from "@corets/use-form"\nimport { Memo } from "@corets/memo"\n\nconst Example = () => {\n  const form = useForm(() => createForm({ field1: "foo", field2: "bar" }))\n  const [someValue, setSomeValue] = useState("some state")\n\n  return (\n    <form>\n      <Memo deps={form.deps("field1")}>\n        This section will only ever re-render when some of shared form properties change,\n        like: `submitting`, `submitted` or `result`, or when one of the field related properties\n        receives a change specific to this field, like: `errors`, `values`, `changedFields` or `dirtyFields`.\n      </Memo>\n\n      <Memo deps={form.deps(["field1", "field2"])}>\n        This section will change when one of the two fields receives a relevant change.\n      </Memo>\n\n      <Memo deps={form.deps(["field1", "field2"], { errors: false })}>\n        This block will NOT re-render if there is an error for one of the two fields.\n      </Memo>\n\n      <Memo deps={[...form.deps(["field1", "field2"]), someValue]}>\n        Include an aditional, custom, value to the list of dependencies for a re-render.\n      </Memo>\n    </form>\n  )\n}\n')),Object(o.b)("h2",{id:"testing"},"Testing"),Object(o.b)("p",null,"When writing unit tests, make sure that you set the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#formconfig"}),Object(o.b)("inlineCode",{parentName:"a"},"debounce"))," config property to ",Object(o.b)("inlineCode",{parentName:"p"},"0"),". This will disable all the throttling of the state changes, and you will be able to write your tests in a synchronous manner."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createForm } from "@corets/form"\n\nconst form = createForm().config({ debounce: 0 })\n')),Object(o.b)("h2",{id:"createform"},Object(o.b)("inlineCode",{parentName:"h2"},"createForm")),Object(o.b)("p",null,"Create a new form instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createForm } from "@corets/form"\n\nconst form = createForm({ data: "foo" })\n')),Object(o.b)("p",null,"Create a new form without factory function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { Form } from "@corets/form"\n\nconst form = new Form({ data: "foo" })\n')),Object(o.b)("p",null,"Create a form instance with a specific type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createForm } from "@corets/form"\n\ntype MyForm = { data: string }\n\nconst form = createForm<MyForm>({ data: "foo" })\n')),Object(o.b)("p",null,"Create a new instance with a specific type inferred from initial values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createForm } from "@corets/form"\n\ntype MyForm = { data: string }\n\nconst initialValues: MyForm = { data: "foo" }\nconst form = createForm(initialValues)\n')),Object(o.b)("p",null,"Specify form result type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { createForm } from "@corets/form"\n\ntype MyForm = { data: string }\ntype MyFormResult = { result: string }\n\nconst form = createForm<MyForm, MyFormResult>({ data: "foo" })\n')))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/form.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-form-mdx-9f47e6169a8dc974d8a5.js.map