import React from "react"; // import react library from node module
import ReactDOM from "react-dom/client"; // import react dom library

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
  
     ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 
// used to render the react element  to the root div like appendChild in normal js