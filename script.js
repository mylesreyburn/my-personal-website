const button = document.getElementById("tarotButton");
button.addEventListener("click", buttonActivate);

const magician = document.getElementById("magician");
const lovers = document.getElementById("lovers");
const chariot = document.getElementById("chariot");
const hermit = document.getElementById("hermit");
const wheel = document.getElementById("wheel");
const strength = document.getElementById("strength");
const hanged = document.getElementById("hanged");
const death = document.getElementById("death");
const tower = document.getElementById("tower");
const judgement = document.getElementById("judgement");
const world = document.getElementById("world");
const fool = document.getElementById("fool");
const miku = document.getElementById("miku");

const fortuneHeader = document.getElementById("fortuneHeader");
const fortune1 = document.getElementById("fortune1");
const fortune2 = document.getElementById("fortune2");
const fortune3 = document.getElementById("fortune3");
const fortune4 = document.getElementById("fortune4");
const fortune5 = document.getElementById("fortune5");
const fortune6 = document.getElementById("fortune6");
const fortune7 = document.getElementById("fortune7");

function generateTarot() {
    magician.style.display = "none";
    lovers.style.display = "none";
    chariot.style.display = "none";
    hermit.style.display = "none";
    wheel.style.display = "none";
    strength.style.display = "none";
    hanged.style.display = "none";
    death.style.display = "none";
    tower.style.display = "none";
    judgement.style.display = "none";
    world.style.display = "none";
    fool.style.display = "none";
    miku.style.display = "none";

    let cardId = Math.floor(Math.random() * 13) + 1;
    switch(cardId){
        case 1:
            magician.style.display = "block";
            break
        case 2:
            lovers.style.display = "block";
            break
        case 3:
            chariot.style.display = "block";
            break
        case 4:
            hermit.style.display = "block";
            break
        case 5:
            wheel.style.display = "block";
            break
        case 6:
            strength.style.display = "block";
            break
        case 7:
            hanged.style.display = "block";
            break
        case 8:
            death.style.display = "block";
            break
        case 9:
            tower.style.display = "block";
            break
        case 10:
            judgement.style.display = "block";
            break
        case 11:
            world.style.display = "block";
            break
        case 12:
            fool.style.display = "block";
            break
        case 13:
            miku.style.display = "block";
            break
    }
}

function generateFortune(){
    fortuneHeader.style.display = "none";
    fortune1.style.display = "none";
    fortune2.style.display = "none";
    fortune3.style.display = "none";
    fortune4.style.display = "none";
    fortune5.style.display = "none";
    fortune6.style.display = "none";
    fortune7.style.display = "none";

    fortuneHeader.style.display = "block";
    
    let fortuneId = Math.floor(Math.random() * 7) + 1;
    switch(fortuneId){
        case 1:
            fortune1.style.display = "block";
            break
        case 2:
            fortune2.style.display = "block";
            break
        case 3:
            fortune3.style.display = "block";
            break
        case 4:
            fortune4.style.display = "block";
            break
        case 5:
            fortune5.style.display = "block";
            break
        case 6:
            fortune6.style.display = "block";
            break
        case 7:
            fortune7.style.display = "block";
            break
    }
}

function buttonActivate(){
    generateTarot();
    generateFortune();
}