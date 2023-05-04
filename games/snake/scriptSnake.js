



///////////////////////////////////////////////////////////snake/////////////////////////////////////////////////////////////////////////////////////////////////
// board
var blocksize = 25;
var rows;
rows = 20;//hoogte
var cols = 50; //breette
var board;
var context;
// score
var score = 0;
var endScore = 0;

// snake hoofd
var snakeX = blocksize *5;
var snakeY = blocksize *5;
var snelheidX=0;
var snelheidY= 0;

var snakeBody = [];
//food
var foodX;
var foodY;

var settingsActive = false;




document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("sliderHoogte");
    var outputHoogte = document.getElementById("valueHoogte");
    
  
    outputHoogte.innerHTML = slider.value;
    slider.oninput = function() {
    outputHoogte.innerHTML = this.value;
    rows = this.value;
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var slider2 = document.getElementById("sliderBreete");
    var outputBreete = document.getElementById("valueBreete");
    
   
    outputBreete.innerHTML = slider2.value;
    slider2.oninput = function() {
    outputBreete.innerHTML = this.value;
    cols = this.value;
    }
  });


window.onload = function(){
    
    Welcome()
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d"); // voor op het bord te tekenen

    PlaceFood();
    document.addEventListener("keyup",changeDirection)
   
   setInterval(update,1000/10);
}
function update(){
    context.fillStyle= "black";
    context.fillRect(0,0,board.width, board.height);
    
    context.fillStyle="red";
    context.fillRect(foodX,foodY,blocksize,blocksize);

    if( snakeX ==foodX && snakeY== foodY){
        snakeBody.push([foodX,foodY]);
        score++; // score verhogen
        
        document.getElementById("score").innerText = score;
        


        PlaceFood();
    }

    for( let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }

    if( snakeBody.length){
        snakeBody [0] =[snakeX,snakeY];
    }

    context.fillStyle ="lime";
    snakeX += snelheidX *blocksize;
    snakeY += snelheidY * blocksize;
    
    context.fillRect(snakeX,snakeY, blocksize,blocksize);
    for(let i = 0; i< snakeBody.length;i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }

// game over 
    if(snakeX < 0|| snakeX > cols *blocksize || snakeY < 0 || snakeY > rows* blocksize){
        GameOver();
    }
    for (let i = 0; i < snakeBody.length; i++){
        if(snakeX== snakeBody[i][0]&& snakeY == snakeBody[i][1]){   
        GameOver();
        
    }
   

    }
}
function changeDirection(e){
    if(e.code == "ArrowUp" && snelheidY!= 1){
        snelheidX = 0;
        snelheidY = -1;
    }
    else if(e.code == "ArrowDown"&& snelheidY!=-1){
        snelheidX = 0;
        snelheidY = 1;
    }
    else if(e.code == "ArrowLeft" &&snelheidX!=1){
        snelheidX = -1;
        snelheidY = 0;
    }
    else if(e.code == "ArrowRight"&& snelheidX!=-1){
        snelheidX = 1;
        snelheidY = 0;
    }

}

function PlaceFood(){
    foodX= Math.floor(Math.random()* cols)* blocksize;
    foodY= Math.floor(Math.random()*rows) * blocksize;
}
function instellingen(){
    gameContainer.style.display = "block";

    settingsActive = true;
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    Welkom.style.display = "none";
    board.style.display = "block";
    PlaceFood();



}
function GameOver(){
    if(settingsActive){
        settingsActive = false;
        return;
    }
   
    var end;
    document.getElementById("score").innerText = score;
    end = score;
    document.getElementById("Totalscore").innerText = end;

    start();
   }
   
  

   function start(){
    restart_button.style.display = "block";
    totalscore.style.display ="block";
    title1.style.display = "block";
    gameover.style.display = "block";
   }
    
function restart(){
    location.reload();
  
}

function Welcome(){
    Welkom.style.display = "block";
    restart_button.style.display = "none";
    totalscore.style.display ="none";
    title1.style.display = "none";
    gameover.style.display = "none";
    gameContainer.style.display = "none";



}
function goBack() {
    window.location.href = "/games/beginscherm/beginscherm.html";
}


  //////////////////////////////////////////////////////////////////////////////////////////////////////////// game 2 ///////////////////////////////////////////////////////////////



