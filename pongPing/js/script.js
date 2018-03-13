'use strict'
//pobranie canvas do zmiennych 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//wielkosć canvas
canvas.width = 1000;
canvas.height = 500;
//wielkosc pola
const cw = canvas.width;
const ch = canvas.height;

//linia srodkowa
const lineWidth = 5;
const lineHeigh = 16;
//pilka
const ballsize = 20;

//pozycja piłki
let ballX = cw / 2 - ballsize / 2;
let ballY = ch / 2 - ballsize / 2;


//wielkosc paletek
const paddelHigh = 100;
const paddelWidth = 20;

//pozycja paletki playera  i ai w poziomie(X)
const playerX = 70;
const aiX = 910;

//pozycja paletki playera  i ai w pionie(Y)
let playerY = 200;
let aiY = 200;

//predkosc piłiki
let ballspeedX = 2;
let ballspeedY = 3;
//licznik punktów i żyć


let life = 2;
let pnk = document.getElementById("pnkt").innerHTML;
//funkcje
//--------------------------------
//dodawanie pnkt
function pnkt() {
    
    pnk++
    document.getElementById("pnkt").innerHTML = pnk;
}
//Życia
function Youlost() {
    if (life > 0) {
        document.getElementsByClassName("heart")[life].style.color = 'white';
        life--
    } else {
        for (var i = 0; i < 3; i++) {
            document.getElementsByClassName("heart")[i].style.color = 'red';
        }
        alert("przegrałeś");
        ballX = cw / 2 - ballsize / 2;
        ballY = ch / 2 - ballsize / 2;
        life = 2;
        ballspeedX = 2
        ballspeedY = 3
        pnk=-1;
        pnkt();
        


    }

}

//rysowanie paletek
function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHigh)
}

function ai() {
    ctx.fillStyle = 'red';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHigh)
}

//rysowanie piłki
function ball() {
    ctx.fillStyle = 'white';
    ctx.fillRect(ballX, ballY, ballsize, ballsize);

    ballX += ballspeedX; //przyspieszanie
    ballY += ballspeedY;

    if (ballY <= 0 || ballY + ballsize >= ch) {


        ballspeedY = -ballspeedY;
        speedUp()
    }
    if (ballX <= 0 || ballX + ballsize >= cw) {
        ballspeedX = -ballspeedX
        speedUp()
        Youlost()

    }
    //do analzy
    if (ballX <= playerX + paddelWidth &&
        ballX >= playerX &&
        ballY + ballsize >= playerY &&
        ballY <= playerY + paddelHigh) {
        ballspeedX *= -1;
        ballX = playerX + paddelWidth;
        speedUp();
        pnkt();

    }

    if (ballX + ballsize >= aiX &&
        ballX + ballsize <= aiX + paddelWidth &&
        ballY + ballsize >= aiY &&
        ballY <= aiY + paddelHigh) {
        ballspeedX *= -1;
        ballX = aiX - ballsize;
        speedUp();
        pnkt();

    }

}

//rysowanie stołu
function table() {
    //stół
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
    //linie środka  
    for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "grey";
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeigh)
    }

    //linia połówki

}
//poruszanie paletek
const topCanvas = canvas.offsetTop;

function playerPositon(e) {
    playerY = event.clientY - topCanvas - paddelHigh / 2;
    aiY = playerY;
}

canvas.addEventListener("mousemove", playerPositon)
//przyspieszanie
function speedUp() {
    //predkosc x
    if (ballspeedX > 0 && ballspeedX < 16) {
        ballspeedX += 1
    } else if (ballspeedX > 0 && ballspeedX < -16) {
        ballspeedY -= 1
    }
    //predkosc y
    if (ballspeedY > 0 && ballspeedY < 16) {
        ballspeedY += 1
    } else if (ballspeedY > 0 && ballspeedY < -16) {
        ballspeedY -= 1
    }
}

function aiyPos() {

}
//odswierzanie
function game() {
    table();
    ball();
    player();
    ai();
    aiyPos();
}
setInterval(game, 1000 / 60)
