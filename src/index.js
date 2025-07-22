import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

loadHome();

homeBtn.addEventListener("click", () => loadHome());
menuBtn.addEventListener("click", () => loadMenu());
aboutBtn.addEventListener("click", () => loadAbout());


