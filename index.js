console.log("Script started at ", Date());

function clickToggle() {
    console.log("clickToggle executed at ", Date(), ", this: ", this.innerHTML);
    
    if (this.getAttribute("class") == "toggleOn") {
        this.setAttribute("class", "toggleOff");
    } else if (this.getAttribute("class") == "toggleOff") {
        this.setAttribute("class", "toggleOn");
    } else {
        console.log("Yo wtf dude");
    }
    console.log("this.style.class: ", this.getAttribute("class"));
}

function initialise() {
    console.log("Funciton initialise called at ", Date());

    const paragraphMatches = document.getElementsByTagName("p");
    const listItemMatches = document.getElementsByTagName("li");

    for (let i = 0; i < paragraphMatches.length; i++) {
        console.log(paragraphMatches[i].textContent);
        paragraphMatches[i].addEventListener("click", clickToggle, false)
        paragraphMatches[i].setAttribute("class", "toggleOn");
    }

    for (let i = 0; i < listItemMatches.length; i++) {
        console.log(listItemMatches[i].textContent);
        listItemMatches[i].addEventListener("click", clickToggle, false)
        listItemMatches[i].setAttribute("class", "toggleOn");
    }
}

window.addEventListener("load", initialise, false);

console.log("Script ended at ", Date());