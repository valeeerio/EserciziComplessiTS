function ricerca(elenco, elementoDaCercare) {
    var inizio = 0;
    var fine = elenco.length;
    console.log("Verifichiamo se l'elemento (".concat(elementoDaCercare, ") \u00E8 all'intenro della lista ").concat(elenco));
    while (inizio <= fine) {
        var centro = Math.floor((inizio + fine) / 2);
        if (elenco[centro] === elementoDaCercare) {
            return centro;
        }
        else if (elenco[centro] < elementoDaCercare) {
            inizio = centro + 1;
        }
        else {
            fine = centro - 1;
        }
    }
    return null;
}
var elementoDaCercare = 2;
var elenco = [20, 65, 32, 90];
var posizione = ricerca(elenco, elementoDaCercare);
if (posizione != null)
    console.log("L'elemento ".concat(elementoDaCercare, " \u00E8 presente alla posizione ").concat(posizione + 1));
else
    console.log("L'elemento ".concat(elementoDaCercare, " non \u00E8 presente nella lista"));
