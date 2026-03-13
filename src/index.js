import "./styles.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
import { buildAboutPage } from "./about.js";

buildHomePage();

let currentPage = "home-button";
const navButtons = document.querySelectorAll("nav > button");

function checkCurrentPage (button) {
    if (currentPage !== button) {
        switch (button) {
            case "home-button":
                currentPage = "home-button";
                return buildHomePage();
            case "menu-button":
                currentPage = "menu-button";
                return buildMenuPage();
            case "about-button":
                currentPage = "about-button";
                return buildAboutPage();
        };
    };
};

navButtons.forEach((button) =>
    button.addEventListener("click", () => {
        checkCurrentPage(button.id);
    })
);