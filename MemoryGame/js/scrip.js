var photos = ["img/0.jpg", "img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg", "img/21.jpg", "img/22.jpg", ] //zmienna przechowująca zdjęcia
//losowa liczba z zakresu
function rand(min, max) {
    min = parseInt(min);
    max = parseInt(max);


    return Math.floor(Math.random() * (max - min + 1) + min);
}
//losowanie zdjec
function los() {
    var zdjecia = [];
    for (var i = 0; i < 3; i++) {
        zdjecia.push(photos[rand(0, photos.length - 1)])
    }
    return zdjecia;
}

var zdjecia = los();

function zdjecie() {
    var uzyteIndex = [];
    var uzyteIndex2 = [];
    $(".card").on('click', function () {

        var licznik = rand(0, zdjecia.length - 1);
      
        console.log("licznik" + licznik)
        
        for (var i = 0; i <= uzyteIndex2.length; i++) {
            
            if (uzyteIndex2[i] != licznik) {

                for (var j = 0; j <= uzyteIndex.length; j++) {
                    if (uzyteIndex[j] == licznik) {

                        console.log("drugi if");

                        $(this).attr("src", zdjecia[licznik]);

                        uzyteIndex2.push(licznik);
                        break;
                    } else {
                        console.log("else ");
                        $(this).attr("src", zdjecia[licznik]);
                        uzyteIndex.push(licznik);
                        break;
                    }
                }
            }
        }


        console.log("uzyteIndex: " + uzyteIndex)
        console.log("uzyteIndex2:" + uzyteIndex2);




    });






};




zdjecie();
