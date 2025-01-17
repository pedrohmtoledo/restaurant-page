function renderMenuPage() {
    const content = document.querySelector("#content");
    const menuPageContent = document.createElement("div");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");
    content.innerHTML = "";
    const menuPage  = `
    <h2> Food To Eat Menu </h2>
    <div class="menu">
        <ul class="menulist">
            <li>Starter</li>
            <li>Main</li>
            <li>Dessert</li>
            <li>Drinks</li>
        </ul>
    </div>`;
        
    homeButton.classList.remove("button-active");
    menuButton.classList.add("button-active");
    aboutButton.classList.remove("button-active");

    menuPageContent.innerHTML = menuPage;
    menuPageContent.classList.add("homepage");
    content.appendChild(menuPageContent);
}



export { renderMenuPage };