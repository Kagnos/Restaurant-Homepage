export function buildHomePage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    content.innerHTML = "";

    h1.textContent = "home header";
    content.appendChild(h1);

    p.textContent = "home page!!!";
    content.appendChild(p);
};