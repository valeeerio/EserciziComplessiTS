function statistiche() {
    var array = [
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1),
    ];
    var minimo = Math.min.apply(Math, array);
    var somma = array[0] + array[1] + array[2] + array[3] - minimo;
    return somma;
}
var Personaggio = /** @class */ (function () {
    function Personaggio(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    Personaggio.prototype.valori = function () {
        var forza = statistiche();
        var destrezza = statistiche();
        var costituzione = statistiche();
        var intelligenza = statistiche();
        var saggezza = statistiche();
        var carisma = statistiche();
        var puntiFerita = Math.floor(10 + (costituzione - 10) / 2);
        console.log("Personaggio ".concat(this.id, ": ").concat(this.nome, " \n      \nForza: ").concat(forza, " \nDestrezza: ").concat(destrezza, " \nCostituzione: ").concat(costituzione, " \nIntelligenza: ").concat(intelligenza, " \nSaggezza: ").concat(saggezza, " \nCarisma: ").concat(carisma, " \nPunti ferita: ").concat(puntiFerita));
    };
    return Personaggio;
}());
var personaggio1 = new Personaggio("Valerio", 1);
personaggio1.valori();
