//losowa liczba z zakresu
function rand(min, max) {
    min = parseInt(min, 10);
    max = parseInt(max, 10);


    return Math.floor(Math.random() * (max - min + 1) + min);
}
//losowanie zdjec
function los() {
    var zdjecia = [];
    for (var i = 0; i < 3; i++) {
        zdjecia.push(rand(1, 22))
    }
    return zdjecia;
}



function zdjecie() {
    var licznik = 0;
    $(".card").on('click', function () {
        console.log(licznik);

        if (licznik == 3) {
            licznik = 0;
            console.log(licznik);
        }
        $(this).attr("src", "img/" + zdjecia[licznik] + ".jpg")
        licznik++
         $(this).off("click", function () {
            console.log(licznik);

            if (licznik == 3) {
                licznik = 0;
                console.log(licznik);
            }
            $(this).attr("src", "img/" + zdjecia[licznik] + ".jpg")
            licznik++
        })
    })

   
    

};



var zdjecia = los();
zdjecie();
