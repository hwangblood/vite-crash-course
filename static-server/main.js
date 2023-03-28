import data from "./data";
import styleClasses from "./style.module.css";

console.log("Hello from main.js");

console.log(data);

console.log(styleClasses);

document.querySelector("h1").className = styleClasses.title;
document.querySelector("body").className = styleClasses.body;
