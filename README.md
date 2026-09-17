// you can recreate the whole node_modules folder just by using package-lock.
// package-lock is created automatically when you run npm install
// it locks down the exact version of all dependencies and sub-dependencies

//its imp to upload on github because 
// 1. other devs can recreate same env
// 2. ensures same versions across different machines
// 3. security - prevents supply chain attacks
// 4. build reproducibility
// it contains the exact version of parcel
//package.json - specifies the dependencies that your project needs to run (runtime dependencies) and development dependencies (tools needed during development but not in production)
// devDependencies - are not included in the final build of your application and are only used during the development process.
//it should be to upload on github because 
// 1. other devs can recreate same env
// 2. ensures same versions across different machines
// 3. security - prevents supply chain attacks
// 4. build reproducibility
// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1", {}, "i am an h1 tag"),React.createElement("h2", {}, "i am an h2 tag")]));
// const heading = React.createElement("h1",{id:heading, xyz: "abc"}, "hello world");
// console.log(heading);// return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(heading);// to take this object to dom we have to render it
// //console.log(parent);
// //oot.render(parent);
// // jsx make easy the whole process



//     const parent = {
//         tag: "div",
//         props: {
//             id: "parent",
//             children: [{
//                 tag: "div",
//                 props: {
//                     id: "child",
//                     children: [{
//                         tag: "h1",
//                         props: {
//                             children: "i am an h1 tag"
//                         }
//                     }]
//                 }
//             }]
//         }
//     }

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// let heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// ); //it is from first link which is core part of react
// console.log(heading); // object and it is react element

// let root = ReactDOM.createRoot(document.getElementById("root")); //it is from second link which is part of react dom

/*
<div id="parent">
<div id="child">
<h1>I'm a h1 tag</h1>
<h2>I'm a h2 tag</h2>
</div>
<div id="child">
<h1>I'm a h1 tag</h1>
<h2>I'm a h2 tag</h2>
</div>
</div>
*/
// nested html structure is created using react.
// normal browser script it is a module type it reduce error

# parcel
-Dev bulid
-local server
-HMR=  Hot Module Replacement
-File watching algorithm - written by C++
-image opmimization
-minification of file
-bulding 
-compressing
- basically parcel is a library
-consistent hashing
- code spilent
- diffential bundeling - to support older browser
- diagnostic
- error handling
- https
-tree shaking - uncommited change, remove unused code
- diff dev and produnction bundles



# browserlist
-country specific details


/**
 * Header
 * - logo
 * - nav items
 * Body
 * -Search
 * - Restrurant container
 *    -Restrurantcard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */



export default filename = just use normal no brackets
export component name directly = use {}


react hooks = normal js utility function
- useState()= to generate superpowerful state variables in react
- udeEffect()



#types of touting in web apps
client side
server side



