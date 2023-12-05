function ricerca(elenco: number[], elementoDaCercare: number) {
  let inizio = 0;
  let fine = elenco.length;

  console.log(
    `Verifichiamo se l'elemento (${elementoDaCercare}) è all'intenro della lista ${elenco}`
  );

  while (inizio <= fine) {
    const centro = Math.floor((inizio + fine) / 2);

    if (elenco[centro] === elementoDaCercare) {
      return centro;
    } else if (elenco[centro] < elementoDaCercare) {
      inizio = centro + 1;
    } else {
      fine = centro - 1;
    }
  }
  return null;
}

const elementoDaCercare: number = 2;
const elenco: number[] = [20, 65, 32, 90];

const posizione = ricerca(elenco, elementoDaCercare);

if (posizione != null)
  console.log(
    `L'elemento ${elementoDaCercare} è presente alla posizione ${posizione + 1}`
  );
else console.log(`L'elemento ${elementoDaCercare} non è presente nella lista`);
