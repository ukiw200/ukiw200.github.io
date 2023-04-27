var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping =0;
var counter = 0;
var score;
score=counter;
var activeJump = true;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random +"px";
    if(activeJump==true){
    counter++;
    score=counter;

    document.getElementById("score").innerText = score;
    }

});

setInterval(function(){
    if(activeJump==true){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){  
      character.style.top = (characterTop+3)+"px";
}

var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
var cTop = -(500-characterTop);

if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
    
    character.style.top = 100+ "px";
    score=counter;

    document.getElementById("score").innerText = score;
    counter=0;
    activeJump =false;
    done();
   
    
}
}},10);

function Jump(){
    jumping =1;
    let jumpingcount= 0;
    var jumpinterval = setInterval(function(){
        var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpingcount<15)){  
        character.style.top = (characterTop-5)+"px";
        }
        if (jumpingcount>20){
            clearInterval(jumpinterval);
            jumping=0;
            jumpingcount=0;

        }

        jumpingcount++;
    },10)

}
function restart(){
    location.reload();
  
}


function done(){
    gameover.style.display =  "block";
    character.style.top = 100+ "px";
    block.style.display = "none";
    character.style.display ="none";
   
}


function goBack() {
    window.location.href = "/index.html";
}

