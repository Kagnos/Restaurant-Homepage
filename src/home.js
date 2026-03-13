export function buildHomePage() {
    const content = document.querySelector("#content");
    const p = document.createElement("p");
    p.textContent = "Testing!!!";
    content.appendChild(p);
};