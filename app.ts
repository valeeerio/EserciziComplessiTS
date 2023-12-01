class Personaggio {
  constructor(protected nome: string, protected id: number) {}

  valori() {
    const forza = Math.floor(Math.random() * 18 + 1);
    const destrezza = Math.floor(Math.random() * 18 + 1);
    const costituzione = Math.floor(Math.random() * 18 + 1);
    const intelligenza = Math.floor(Math.random() * 18 + 1);
    const saggezza = Math.floor(Math.random() * 18 + 1);
    const carisma = Math.floor(Math.random() * 18 + 1);

    console.log(
      `Ciao sono ${this.nome} e sono il ${this.id} personaggio, e queste sono le mie caratteristiche: \nForza: ${forza} \nDestrezza: ${destrezza} \nCostituzione: ${costituzione} \nIntelligenza: ${intelligenza} \nSaggezza: ${saggezza} \nCarisma: ${carisma}`
    );

    console.log(`I miei punti ferita sono ${10 + (costituzione - 10) / 2}`);
  }
}

const personaggio1 = new Personaggio("Valerio", 1);
personaggio1.valori();
