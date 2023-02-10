const characters = document.querySelector('.character-selection');
const fighting = document.querySelector('.fighting');
const resultado = document.querySelector('.winer');

loadEventListeners();

function loadEventListeners() {
    characters.addEventListener('click', selectCharacter);
}

function selectCharacter(character){

    if(character.target.classList.contains('option')){
        let aleatorio = Math.floor(Math.random()*3)
        let characterSelected = character.target;
        let pcCharacterGenerated = characters.children[aleatorio];
        //console.log(aleatorio)
        //console.log(characterSelected);
        infoCharacters(characterSelected,pcCharacterGenerated)
    }
}

function infoCharacters(userCharacter, pcCharacter){

    //console.log(userCharacter);
    //console.log(pcCharacter);

    const infoUserCharacter = {
        nombre : userCharacter.classList[1],
        imagen : window.getComputedStyle(userCharacter).getPropertyValue('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, ''),
        id: userCharacter.getAttribute("id")
    } 

    const infoPcCharacter = {
        nombre : pcCharacter.classList[1],
        imagen : window.getComputedStyle(pcCharacter).getPropertyValue('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, ''),
        id: pcCharacter.getAttribute("id")
    } 

    //console.log(infoUserCharacter);
    //console.log(infoPcCharacter);
    
    fight(infoUserCharacter,infoPcCharacter)
}

function fight(user, pc) {

    //console.log(user)
    //console.log(pc)

    if(user.id == pc.id){
        //alert('Ambos jugaron lo mismo')
        resultado.querySelector('p').textContent = "Empate"
        fighting.querySelector('.user').src = user.imagen;
        fighting.querySelector('.pc').src = pc.imagen;
        
        resultado.querySelector('p').style.color = "#FF8C00";
    } else if(user.id == 1 && pc.id == 3){
        //alert('Jugaste 🥌 y la pc ✂')
        resultado.querySelector('p').textContent = "You Win!!"
        fighting.querySelector('.user').src = user.imagen;
        fighting.querySelector('.pc').src = pc.imagen;
        resultado.querySelector('p').style.color = "#FFD700";
    } else if(user.id == 2 && pc.id == 1){
        //alert('Jugaste 🧻 y la pc 🥌')
        resultado.querySelector('p').textContent = "You Win!!"
        fighting.querySelector('.user').src = user.imagen;
        fighting.querySelector('.pc').src = pc.imagen;
        resultado.querySelector('p').style.color = "#FFD700";
    } else if(user.id == 3 && pc.id == 2){
        //alert('Jugaste ✂ y la pc 🧻')
        resultado.querySelector('p').textContent = "You Win!!"
        fighting.querySelector('.user').src = user.imagen;
        fighting.querySelector('.pc').src = pc.imagen;
        resultado.querySelector('p').style.color = "#FFD700";
    } else{
        resultado.querySelector('p').textContent = "You Lose!!"
        fighting.querySelector('.user').src = user.imagen;
        fighting.querySelector('.pc').src = pc.imagen;
        resultado.querySelector('p').style.color = "#FF4500";
    }
}
