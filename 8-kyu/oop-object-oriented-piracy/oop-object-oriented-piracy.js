class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(draft, crew){
    return this.draft - (this.crew * 1.5) > 20
  }
  
}