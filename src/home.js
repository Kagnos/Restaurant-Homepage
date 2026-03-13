export function buildHomePage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    let p = document.createElement("p");

    content.innerHTML = "";

    h1.textContent = "Welcome to Lorem Restaurant!";
    content.appendChild(h1);

    p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, ab distinctio corrupti soluta voluptatum ut debitis hic? Similique, cupiditate in dolor unde quasi laudantium repellendus maxime sit eius, vel ut ipsa! Eaque molestiae, dolorum itaque soluta nesciunt perspiciatis et provident porro necessitatibus molestias vero autem exercitationem quas voluptatum non odio.";
    content.appendChild(p);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, pariatur. Numquam ex, reiciendis quae ullam distinctio ipsum porro quibusdam dolorum, error corrupti minus magni molestias fugiat tempora, nesciunt voluptatem reprehenderit laboriosam repellendus modi excepturi corporis. Mollitia illo laudantium id fugiat qui nulla tempora rerum eum, ad recusandae exercitationem libero maxime sit itaque quis reiciendis ducimus.";
    content.appendChild(p);
};