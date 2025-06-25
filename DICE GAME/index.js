
var randomNumber = Math.floor(Math.random()*6);
var randomNumber1 = randomNumber + 1;

if(randomNumber1 === 1){
   document.querySelector("img").setAttribute("src", "./images/dice1.png"); 
}else if(randomNumber1 === 2){
    document.querySelector("img").setAttribute("src", "./images/dice2.png"); 
}else if(randomNumber1 === 3){
    document.querySelector("img").setAttribute("src", "./images/dice3.png"); 
}else if(randomNumber1 === 4){
    document.querySelector("img").setAttribute("src", "./images/dice4.png"); 
}else if(randomNumber1 === 5){
    document.querySelector("img").setAttribute("src", "./images/dice5.png"); 
}else if(randomNumber1 === 6){
    document.querySelector("img").setAttribute("src", "./images/dice6.png");  
}

let newRandom = Math.floor(Math.random()*6);
let  newRandomNumber = newRandom + 1;
if( newRandomNumber === 1 ){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
}else if( newRandomNumber === 2){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
}else if( newRandomNumber === 3){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
}else if( newRandomNumber === 4){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
}else if( newRandomNumber === 5){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
}else if( newRandomNumber  === 6){
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
}

if(randomNumber1 === newRandomNumber){
    document.querySelector("h1").innerHTML = "Draw";
}else if(randomNumber1 > newRandomNumber){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}else if(randomNumber1 < newRandomNumber){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}


