export function buildMenuPage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let hr = document.createElement("hr");

    content.innerHTML = "";

    h1.textContent = "Lorem Menu";
    content.appendChild(h1);

    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsam laboriosam nam cumque sunt saepe assumenda! Magni asperiores aspernatur explicabo, quod non nulla. Ea, temporibus.";
    content.appendChild(p);

    content.appendChild(hr);

    h2.textContent = "Lorem 01";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);

    h2 = h2.cloneNode();
    h2.textContent = "Lorem 02";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);

    h2 = h2.cloneNode();
    h2.textContent = "Lorem 03";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);

    h2 = h2.cloneNode();
    h2.textContent = "Lorem 04";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);

    h2 = h2.cloneNode();
    h2.textContent = "Lorem 05";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);

    h2 = h2.cloneNode();
    h2.textContent = "Lorem 06";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);

    h2 = h2.cloneNode();
    h2.textContent = "Lorem 07";
    content.appendChild(h2);

    p = p.cloneNode();
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit praesentium obcaecati dolores.";
    content.appendChild(p);

    hr = hr.cloneNode();
    content.appendChild(hr);
};