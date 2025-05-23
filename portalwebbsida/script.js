Portal1Quotes = [
    //portal
    "You will be baked, and then there will be cake",
    "We are pleased that you made it through the final challenge, where we pretended we were going to murder you",
    "Vital testing apparatus destoryed",
    "You think you're doing some damage? Two plus Two is... ten. IN BASE FOUR IM FINE!",
    "Very good! You are now in possesion of the Aperture Science Handheld Portal Device",
    //portal2
    "Hello! This the part where i kill you",
    "Oh. Hi. So. How are you holding up? BECAUSE IM A POTATO",
    "You might have a very minor case of serious brain damage",
    "Oh for God sake. You're boxes! With legs! It's literally your only purpose! Walking onto buttons",
    "Im speaking in an accent that is beyond her range of hearing (Spoken in a Texas accent)"
]
let Portal = null
let a = 1
function Quote() {
    if(a == 1) {
    Random = Math.floor(Math.random() * 10);
    Portal = document.createElement("p")
    Portal.id = "Portal"
    Portal.textContent = Portal1Quotes[Random]
    document.body.appendChild(Portal)
    a = 0
    }
    else {
        Portal.textContent = ""
        a = 1
    }
    
    
};

