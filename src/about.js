function renderAboutPage() {
    const content = document.querySelector("#content");
    const aboutPageContent = document.createElement("div");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");
    content.innerHTML = "";
    const aboutPage  = `
    <h2> Food To Eat Information </h2>
    <div class="information">
    address
    contact
    </div>`;

        
    homeButton.classList.remove("button-active");
    menuButton.classList.remove("button-active");
    aboutButton.classList.add("button-active");

    aboutPageContent.innerHTML = aboutPage;
    aboutPageContent.classList.add("homepage");
    content.appendChild(aboutPageContent);
}



export { renderAboutPage };