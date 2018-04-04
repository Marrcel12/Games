var Obiekty {
    function (dane) {
        var niebo = {
            obraz: new Obiekty.zadania.Obraz(dane.grafika, 0, 208, 960, 208),
            x:0,
            y:0,
            w: 2880,
            h 642
        };
        dane.obiekty={};
        dane.obiekty.niebo=niebo;
    },
    zadania {
        function Obraz(img, x, y, w, h) {
            this.img = img;
            this.x = x;
            this.w = w;
            this.h = h;
        }
    }
}
