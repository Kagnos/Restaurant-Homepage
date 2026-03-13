import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

home();
menu();
about();

const navButtons = document.querySelectorAll("nav > button");

navButtons.forEach((button) =>
    button.addEventListener("click", () => {
        switch(button.id) {
            case "home-button":
                return console.log("home button pressed");
            case "menu-button":
                return console.log("menu button pressed");
            case "about-button":
                return console.log("about button pressed");
        };
    })
);