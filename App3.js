import React from "react";
import ReactDOM from "react-dom/client";

// React element = object = HTMLelement(rander)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );//same as jsxHeading

// JSX (transplied before it reaches the js)-parcel- Bable(javascript compiler)(transfer js to react)
// JSX == React.createElement
const jsxHeading = <h1 className="head" tabIndex={5}>Namaste react by jsx</h1>  //this is not html in javascript it is jsx(html like syntax) 

// const fn = () => (
//   <h1>Namaste react by arrow function</h1>
// );// same as const HeadingComponent


const Title = () => (
  <h1>Namaste react by component</h1>
);

// react component
// class based component- old
// functional component- new(just a normal javascript program)
// {} 
// const HeaderComponent = () => {
//   return (
//     <div>
//       {jsxHeading}
//       <h2>Namaste react by functional component</h2>
//     </div>
//   );
// };

// component composition
// const HeadingComponent = () => (
//   <div id="container">
//     <Title/> 
//    <h1 className="heading">Namaste react by functional component</h1>
//    </div>
// );

const number = 10000
const data = api.getData();
// put anything javascript inside it = {}
const HeadingComponent = () => (
  <div id="container">
    {number}
    <h2>{100 + 100}</h2>
   <h1 className="heading">Namaste react by functional component</h1>
   </div>
);

// <title/> element inside component
// {title} element inside element
// {Title()} called a function inside jsx




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);// will be replace by heading 
root.render(<HeadingComponent />)// for component

