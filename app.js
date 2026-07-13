/*
let btn = document.querySelector(".bin");
let image = document.querySelector(".photo");
//let url = "https://dog.ceo/api/breeds/image/random";
let url = "https://dattebayo-api.onrender.com/clans";
async function getImage() {
    let promise = await fetch(url);
    let data = await promise.json();
    image.src = data.clans[0].name;
    console.log(data);
}

btn.addEventListener("click", getImage);
btn.onclick = () => {
    image.style.border = "2px solid aqua";
    image.style.height = "300px";
    image.style.height = "500px";
    image.style.marginLeft = "350px";

}
    */
let btn = document.querySelector(".btn");
let image = document.querySelector(".photo");
let name = document.querySelector(".name");

async function getCharacter() {
    try {
        // Get all characters
        let response = await fetch("https://dattebayo-api.onrender.com/characters");
        let data = await response.json();

        // Pick a random character
        let randomIndex = Math.floor(Math.random() * data.characters.length);
        let character = data.characters[randomIndex];

        // Show image and name
        image.src = character.images[0];
        name.innerText = character.name;
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", getCharacter);
//btn.innerHTML = "<b>Random Image Generator</b>"
//document.body.appendChild("btn")