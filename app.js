const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPalleteBoxes = 12;

const generatePalette =()=>{
    //Refreshing and Clearing the container at start.
    container.innerHTML = "";

    for (let i = 0; i < maxPalleteBoxes; i++) {
        //generating random Hex values.
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        //Creating new li items and appending it to the document or container.
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        color.addEventListener("click",()=>{copycolor(color,randomHex)})                   
        container.appendChild(color);                   
    }
}

//Calling the function once on loading the website.
generatePalette();

const copycolor = (element,hexVal)=>{
    const colorElement = element.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{  
        colorElement.innerHTML = "COPIED";
        setTimeout(()=>{
            colorElement.innerHTML = hexVal;
        },2000)
    });
}

refreshBtn.addEventListener("click",generatePalette);
