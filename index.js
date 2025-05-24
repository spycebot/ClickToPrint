console.log("Script started at ", Date());

function clickToggle() {
    console.log("clickToggle executed at ", Date(), ", this: ", this.innerHTML);
    
    if (this.getAttribute("class") == "toggleOn") {
        this.setAttribute("class", "toggleOff");
        /* NG
        for (const child of this.children) {
            child.setAttribute("class", "toggleOff");
        }
        */
    } else if (this.getAttribute("class") == "toggleOff") {
        this.setAttribute("class", "toggleOn");
        /* NG
        for (const child of this.children) {
            child.setAttribute("class", "toggleOn");
        }
        */
    } else {
        console.log("Selected element had no toggle status.");
    }
    console.log("this.style.class: ", this.getAttribute("class"));
}

function initialise() {
    console.log("Funciton initialise called at ", Date());

    const paragraphMatches = document.getElementsByTagName("p");
    const listItemMatches = document.getElementsByTagName("li");
    const headerMatches = document.getElementsByTagName("h3");

    for (const paragraphElement of paragraphMatches) {
        // OK console.log(paragraphElement.textContent);
        paragraphElement.addEventListener("click", clickToggle, false)
        paragraphElement.setAttribute("class", "toggleOn");
    }

    for (const listElement of listItemMatches) {
        // OK console.log(listElement.textContent);
        listElement.addEventListener("click", clickToggle, false)
        listElement.setAttribute("class", "toggleOn");
    }

    for (const headerElement of headerMatches) {
        // OK console.log(headerElement.textContent);
        headerElement.addEventListener("click", clickToggle, false)
        headerElement.setAttribute("class", "toggleOn");
    }

    /* NG
    const sectionMatches = document.getElementsByTagName("section");

    for (let i = 0; i < sectionMatches.length; i++) {
        console.log(sectionMatches[i].textContent);
        sectionMatches[i].addEventListener("click", clickToggle, false)
        sectionMatches[i].setAttribute("class", "toggleOn");
    }
    */
}

window.addEventListener("load", initialise, false);

console.log("Script ended at ", Date());