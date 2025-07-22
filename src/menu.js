import reload from "./reload.js";

// function addRecipe(header, description, price) {
//     const header = document.createElement("h3");
//     header.textContent = header;

//     const description = document.createElement("p");
//     description.textContent = description;

//     const price = document.createElement("p");
//     price.textContent = price;

//     // const img = document.createElement("img");
//     // img.src = img;
// };

export default function loadMenu() {
    const content = document.querySelector("#content");
    reload(content);

    const header = document.createElement("h1");
    header.textContent = "Menu";

    const menuDiv = document.createElement("div");

    const recipeHeader = document.createElement("h3");
    recipeHeader.textContent = "Pizza";
    menuDiv.appendChild(recipeHeader);

    const recipePrice = document.createElement("p");
    recipePrice.textContent = "$10";
    menuDiv.appendChild(recipePrice);

    const recipeDescription = document.createElement("p");
    recipeDescription.textContent = "A yummy pizza";
    menuDiv.appendChild(recipeDescription);

    content.appendChild(header);
    content.appendChild(menuDiv);
};