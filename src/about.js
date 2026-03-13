export function buildAboutPage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    content.innerHTML = "";

    h1.textContent = "about header";
    content.appendChild(h1);

    p.textContent = "about page!!!";
    content.appendChild(p);
};