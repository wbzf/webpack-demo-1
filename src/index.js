import "./x.js";
import png from "./assets/11.png";
// console.log(x);
// console.log("hixxxxxx");
// import "./x.css";

const div = document.getElementById("app");
div.innerHTML = `
    <img src="${png}">
`;

const button = document.createElement("button");
button.innerHTML = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    module => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};

div.appendChild(button);
