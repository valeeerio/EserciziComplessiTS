var Personaggio = /** @class */ (function () {
    function Personaggio(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    Personaggio.prototype.valori = function () {
        var forza = Math.floor(Math.random() * 18 + 1);
        var destrezza = Math.floor(Math.random() * 18 + 1);
        var costituzione = Math.floor(Math.random() * 18 + 1);
        var intelligenza = Math.floor(Math.random() * 18 + 1);
        var saggezza = Math.floor(Math.random() * 18 + 1);
        var carisma = Math.floor(Math.random() * 18 + 1);
        console.log("Ciao sono ".concat(this.nome, " e sono il ").concat(this.id, " personaggio, e queste sono le mie caratteristiche: \nForza: ").concat(forza, " \nDestrezza: ").concat(destrezza, " \nCostituzione: ").concat(costituzione, " \nIntelligenza: ").concat(intelligenza, " \nSaggezza: ").concat(saggezza, " \nCarisma: ").concat(carisma));
        console.log("I miei punti ferita sono ".concat(10 + (costituzione - 10) / 2));
    };
    return Personaggio;
}());
var personaggio1 = new Personaggio("Valerio", 1);
personaggio1.valori();
