export function buildAboutPage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    let p = document.createElement("p");

    content.innerHTML = "";

    h1.textContent = "About Our Restaurant";
    content.appendChild(h1);

    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi architecto accusamus eveniet provident ullam non eius ex sit rem saepe voluptatem natus nisi, porro et omnis adipisci labore molestias harum? Quidem, ratione officiis suscipit soluta necessitatibus veniam voluptates magnam voluptatibus repellendus!";
    content.appendChild(p);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate explicabo blanditiis, sint deleniti laboriosam cupiditate maiores, exercitationem labore similique ipsa suscipit in facere illum quis repellat recusandae fuga tempore ex voluptas!";
    content.appendChild(p);
};