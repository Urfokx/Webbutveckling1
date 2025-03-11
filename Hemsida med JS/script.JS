a = 0

let body = document.body
function rödBakgrund() {
    let button = document.getElementById("inlineButton")
    button.addEventListener("click", function() {
        document.body.style.backgroundColor = "Red"
    });
};

function skrivText() {
    if (a < 1) {
    let Text = document.createElement("Text")
    Text.textContent = "Hejsan, jag skriver ut text när du klickar på mig "
    document.body.appendChild(Text)
    a = 1
    };
};

let imageKnapp = document.getElementById("imageKnapp")

imageKnapp.addEventListener("click", function(){
    let bild = document.createElement("img")
    bild.src = "worth_it.png"
    document.body.appendChild(bild)

});