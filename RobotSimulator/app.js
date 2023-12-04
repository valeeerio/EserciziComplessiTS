var Robot = /** @class */ (function () {
    function Robot(id, movimenti) {
        this.id = id;
        this.posizione = { avanti: 0, destra: 0, sinistra: 0 };
        this.movimenti = movimenti;
    }
    Robot.prototype.eseguiMovimenti = function () {
        for (var _i = 0, _a = this.movimenti; _i < _a.length; _i++) {
            var direzione = _a[_i];
            this.muovi(direzione.toUpperCase());
        }
        console.log("Posizione Finale", this.posizione);
    };
    Robot.prototype.muovi = function (direzione) {
        switch (direzione) {
            case "A":
                this.posizione.avanti++;
                break;
            case "D":
                this.posizione.destra++;
                break;
            case "S":
                this.posizione.sinistra++;
                break;
        }
    };
    return Robot;
}());
var prova = new Robot(1, "adsaas");
prova.eseguiMovimenti();
