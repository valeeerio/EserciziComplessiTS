class Robot {
  public posizione: { x: number; y: number };
  private movimenti: string;

  constructor(
    private id: number,
    private direzione: string,
    movimenti: string
  ) {
    this.posizione = { x: 0, y: 0 };
    this.movimenti = movimenti;
  }

  eseguiMovimenti() {
    for (const movimento of this.movimenti) {
      this.muovi(movimento.toUpperCase(), this.direzione.toUpperCase());
    }
    console.log(
      `Robot ${this.id}: Direzione: "${this.direzione}"\nPosizione Finale`,
      this.posizione
    );
  }

  private muovi(movimento: string, direzione: string) {
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
    } else if (direzione === "E") {
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
    } else if (direzione === "S") {
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
    } else if (direzione === "O") {
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
  }
}

const robot1 = new Robot(1, "N", "RAALAL");
robot1.eseguiMovimenti();
