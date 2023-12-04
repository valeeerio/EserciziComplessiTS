class Robot {
  public posizione: { avanti: number; destra: number; sinistra: number };
  private movimenti: string;

  constructor(private id: number, movimenti: string) {
    this.posizione = { avanti: 0, destra: 0, sinistra: 0 };
    this.movimenti = movimenti;
  }

  eseguiMovimenti() {
    for (const direzione of this.movimenti) {
      this.muovi(direzione.toUpperCase());
    }
    console.log("Posizione Finale", this.posizione);
  }

  private muovi(direzione: string) {
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
  }
}

const prova = new Robot(1, "adsaas");
prova.eseguiMovimenti();
