



const canvas = document.querySelector('canvas');
const C = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
const zwaartekracht = 0.5;

class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        };
        this.velocity = {
            x:0,
            y:0
        };

        this.width = 30;
        this.height = 30;
    }
    draw(){
        C.fillStyle ='red';
        C.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        
        if (this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += zwaartekracht;
        }
        else{
            this.velocity.y = 0;
        }
    }
}

class Platform{
    constructor({x, y,image}){
        this.position ={
            x,
            y
        }
        this.width = 200;
        this.height = 20;
      this.image = image
    }
    draw() {
        //C.fillStyle = 'blue';
        //C.fillRect(this.position.x, this.position.y, this.width, this.height);
        
        C.drawImage(this.image, this. position.x,this.position.y)
    }
    
}

const player = new Player();
const platforms = [
    new Platform({x: 200, y:800, image}),
    //new Platform({x: 500, y:600}),
    //new Platform({x: 900, y:400}),
    //new Platform({x: 1200, y:400}),
    //new Platform({x: 1500, y:400}),
    //new Platform({x: 1800, y:600}),
    //new Platform({x: 2100, y:800})
];

const keys = {
    right:{
        pressed : false
    },
    Left:{
        pressed : false
    }
}
player.draw();

var scrollOfset = 0;

function animate(){
    requestAnimationFrame(animate);
    C.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach((platform) => {
        platform.draw();
    })
    if(keys.right.pressed && player.position.x <= 600){
        player.velocity.x = 5;
        
        
    }
    else if(keys.Left.pressed && player.position.x >= 600){
        player.velocity.x = -5;
        
        
       
    }
    else
    {
       player.velocity.x = 0; 

       if(keys.right.pressed){
        platforms.forEach((platform) => {
            platform.position.x -= 5;
            scrollOfset +=5;
            document.getElementById("scrollOfset").innerHTML = scrollOfset;
            win();
        })
       
       }
       else{
        if(keys.Left.pressed){
            platforms.forEach((platform) => {
                platform.position.x += 5;
                scrollOfset -=5;
                document.getElementById("scrollOfset").innerHTML = scrollOfset;
            })
            
        }
       }
    } 
    // platform staande
    platforms.forEach((platform) => {
    if(
        player.position.y+player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y && 
        player.position.x + player.width>= platform.position.x && 
        player.position.x <=  platform.position.x+platform.width
        )
        {
       player.velocity.y = 0;
    }
})
}
animate();

addEventListener('keydown', ({keyCode}) => {
    switch(keyCode){
        case 38:   // up arrow
            player.velocity.y = -20; // make the player move upwards
            break; 

        case 40:  // down arrow
            break;

        case 39:  // right arrow
        keys.right.pressed= true;
            break;
        
        case 37: // left arrow
        keys.Left.pressed= true;
            break;
        
        case 32: //stop
        player.velocity.x =0
            break;
    }
});
addEventListener('keyup', ({keyCode}) => {
    switch(keyCode){
        case 38:   // up arrow
            player.velocity.y = 0; // make the player move upwards
            break; 

        case 40:  // down arrow
            break;

        case 39:  // right arrow
            keys.right.pressed= false;
            break;
        
        case 37: // left arrow
        keys.Left.pressed= false;
            break;
        
        
    }
});

function win(){
    if(scrollOfset >= 12000){
        alert('you won');

    }
}
