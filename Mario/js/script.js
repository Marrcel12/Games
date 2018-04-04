var Silnik = function(dane) 
{
    
    var skyCanv = document.getElementById("sky-canvas");
    var bgCanv = document.getElementById("bg-canvas");
    var fgCanv = document.getElementById("fg-canvas");


    var canvas = {
        skyCanvas: skyCanv,
        bgCanvas: bgCanv,
        fgCanvas: fgCanv,
        skyCtx: skyCanv.getContext("2d"),
        bgCtx: bgCanv.getContext("2d"),
        fgCtx: fgCanv.getContext("2d"),
    }




    var graf = new Image();
    graf.src = "img/stylesheet.png"




    var dane = {
        nrKlatki: 0,
        canvas: canvas,
        garfika: graf
    }
Obiekty.ini(dane)
Silnik(dane);
function start(dane) {
    var petla = function () {
        Silnik.wejscie(dane);
        Silnik.aktualizacje(dane);
        Silnik.render(dane);
        
        dane.nrKlatki++;
        
        
        window.requestAnimationFrame(petla);
    }
    petla();
}
function wejscie(dane){
    
}

function aktualizacje(dane){
    
}
};

window.onload=Silnik();