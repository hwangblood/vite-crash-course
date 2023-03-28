import data from "./data";
import styleClasses from "./style.module.css";

// https://v3.vitejs.dev/guide/env-and-mode.html#env-variables
console.log(import.meta.env);
console.log(`App name is ${import.meta.env.VITE_APP_TITLE}`);
console.log(`Serevr is running in ${import.meta.env.MODE} mode`);
console.log(
  `App ${import.meta.env.DEV ? "is" : "isn't"} running in development.`
);

console.log(data);

console.log(styleClasses);

document.querySelector("h1").className = styleClasses.title;
document.querySelector("body").className = styleClasses.body;
