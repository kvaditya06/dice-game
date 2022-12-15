var  randomNumber1 = Math.floor(Math.random()*6)+1;
var  randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1="images/dice" + randomNumber1 + ".png" //images/dice1.png OR dice2.png OR dice3.png etc
//Use this to change elements in HTML

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);

var randomDiceImage2="images/dice" + randomNumber2 + ".png"


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

var res = 0;
if(randomNumber1>randomNumber2){
    res=1;
}else if(randomNumber2>randomNumber1){
    res=2;
}else{
    res=0;
}

var heading = document.querySelectorAll("h1")[0]

if(res===1){
   
    heading.innerText="Player 1 Wins";

}

if(res===2){
   
    heading.innerText="Player 2 Wins";

}