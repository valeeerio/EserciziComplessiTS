var Robot = /** @class */ (function () {
    function Robot(id, direzione, movimenti) {
        this.id = id;
        this.direzione = direzione;
        this.posizione = { x: 0, y: 0 };
        this.movimenti = movimenti;
    }
    Robot.prototype.eseguiMovimenti = function () {
        for (var _i = 0, _a = this.movimenti; _i < _a.length; _i++) {
            var movimento = _a[_i];
            this.muovi(movimento.toUpperCase(), this.direzione.toUpperCase());
        }
        console.log("Robot ".concat(this.id, ": Direzione: \"").concat(this.direzione, "\"\nPosizione Finale"), this.posizione);
    };
    Robot.prototype.muovi = function (movimento, direzione) {
        if (direzione === "N") {
            switch (movimento) {
                case "A":
                    this.posizione.y++;
                    break;
                case "R":
                    this.direzione = "E";
                    break;
                case "L":
                    this.direzione = "O";
                    break;
            }
        }
        else if (direzione === "E") {
            switch (movimento) {
                case "A":
                    this.posizione.x++;
                    break;
                case "R":
                    this.direzione = "S";
                    break;
                case "L":
                    this.direzione = "N";
                    break;
            }
        }
        else if (direzione === "S") {
            switch (movimento) {
                case "A":
                    this.posizione.y--;
                    break;
                case "R":
                    this.direzione = "O";
                    break;
                case "L":
                    this.direzione = "E";
                    break;
            }
        }
        else if (direzione === "O") {
            switch (movimento) {
                case "A":
                    this.posizione.x--;
                    break;
                case "R":
                    this.direzione = "N";
                    break;
                case "L":
                    this.direzione = "S";
                    break;
            }
        }
    };
    return Robot;
}());
var robot1 = new Robot(1, "N", "RAALAL");
robot1.eseguiMovimenti();
