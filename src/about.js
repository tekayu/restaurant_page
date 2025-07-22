import reload from "./reload.js";

export default function loadAbout() {
    const content = document.querySelector("#content");
    reload(content);

    const header = document.createElement("h1");
    header.textContent = "About";
    
    const contactInfo = document.createElement("div");

    const contactName = document.createElement("p");
    contactName.textContent = "Joshua de Bruin";

    const contactNum = document.createElement("p");
    contactNum.textContent = "123 456 789";

    contactInfo.appendChild(contactName)
    contactInfo.appendChild(contactNum)

    content.appendChild(header);
    content.appendChild(contactInfo);
};