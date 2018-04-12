
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 250;

const ch = canvas.height;
const cw = canvas.width;



let px = 10; //pozycja gracza
let py = 10;

let bx=2;
let by=2;//wielkość kwadratu
let xv=0; //ilość zwiekszenia
let yv=0;


setInterval(game,1000 / 15) 

function game(){
    px+=xv
    py+=yv
   table();
}

document.addEventListener("keydown", keyPush);
    

function keyPush(event) {
    switch (event.keyCode) {
        case 37: //strzałka w lewo
            xv = -1;
            yv = 0;
            break;
        case 40: //strzałka w góre
            xv = 0;
            yv = 1;
            break;
        case 39: //strzałka w prawo
            xv = 1;
            yv = 1
            break;
        case 38: //strzałka w dół
            xv = 0;
            yv = -1;
            break;
    }
}


function table() {
    //stół
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle="red"
     ctx.fillRect(px, py, bx, by);
}












table();


