function statistiche() {
  const array: number[] = [
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
  ];

  let minimo: number = Math.min(...array);
  const somma = array[0] + array[1] + array[2] + array[3] - minimo;
  return somma;
}

class Personaggio {
  constructor(protected nome: string, protected id: number) {}

  valori() {
    const forza = statistiche();
    const destrezza = statistiche();
    const costituzione = statistiche();
    const intelligenza = statistiche();
    const saggezza = statistiche();
    const carisma = statistiche();
    const puntiFerita = Math.floor(10 + (costituzione - 10) / 2);

    console.log(
      `Ciao sono ${this.nome} e sono il ${this.id} personaggio, e queste sono le mie caratteristiche: \nForza: ${forza} \nDestrezza: ${destrezza} \nCostituzione: ${costituzione} \nIntelligenza: ${intelligenza} \nSaggezza: ${saggezza} \nCarisma: ${carisma} \nI miei punti ferita sono ${puntiFerita}`
    );
  }
}
const personaggio1 = new Personaggio("Valerio", 1);
personaggio1.valori();
const personaggio2 = new Personaggio("pisellone", 2);
personaggio2.valori();
