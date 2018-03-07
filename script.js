var player = 1; //definuje który gracz zaczyna 

//mechanizm przełączania gra
$(".pole").click(function () {
    if (player == 1) {
        $(this).html("X");
        $(this).unbind( "click" );
        player++
        check("X");
    }
    else{
        $(this).html("O");
        $(this).unbind( "click" );
        player--
        check("O");
    }
}); 


//mechanizm sprawdzania który gracz wygrał

function check(a) {
    
    if( $("#a").html()===a &&  $("#b").html()===a &&  $("#c").html()===a || 
        $("#a").html()===a &&  $("#d").html()===a && $("#g").html()===a ||
        $("#a").html()===a &&  $("#e").html()===a && $("#i").html()===a||
        $("#c").html()===a &&  $("#f").html()===a && $("#i").html()===a ||
        $("#a").html()===a &&  $("#d").html()===a && $("#g").html()===a||
        $("#d").html()===a &&  $("#e").html()===a && $("#f").html()===a||
        $("#g").html()===a &&  $("#h").html()===a && $("#i").html()===a||
       $("#b").html()===a &&  $("#e").html()===a && $("#h").html()===a||
        $("#g").html()===a &&  $("#e").html()===a && $("#c").html()===a
      ){
       
        alert(a+" "+"wygrał ");
      console.log(pola);
    }
    
    
}
