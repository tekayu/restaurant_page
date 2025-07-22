import logo from "/images/logo.png";
import reload from "./reload.js";

export default function loadHome(){
    const content = document.querySelector("#content");
    reload(content);

    const header = document.createElement("h1");
    header.textContent = "Restaurant Page";

    const pageLogo = document.createElement("img");
    pageLogo.src = logo;

    const infoP = document.createElement("p");
    infoP.textContent = "This is a beautiful restaurant page to show off your food!"


    content.appendChild(header);
    content.appendChild(pageLogo);
    content.appendChild(infoP);
};
