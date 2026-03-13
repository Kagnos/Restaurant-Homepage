export function buildMenuPage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    content.innerHTML = "";

    h1.textContent = "menu header";
    content.appendChild(h1);

    p.textContent = "menu page!!!";
    content.appendChild(p);
};