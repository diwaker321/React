import React from "react";
import ReactDOM from "react-dom/client"; // dont use only react-dom else it will give an error of (createRoot is not a function)

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = React.createElement("h1",
     {}, "hello coders ");
root.render(element);
