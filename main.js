// puissance4.js — node
const readline = require('readline');

class Puissance4 {
  constructor() {
    this.lignes = 6;
    this.colonnes = 7;
    this.grille = Array.from({length:this.lignes},()=>Array(this.colonnes).fill(0));
    this.joueur = 1;
    this.terminal = readline.createInterface({input:process.stdin, output:process.stdout});
    this.jouer();
  }

  afficher() {
    console.clear();
    console.log(' 0 1 2 3 4 5 6');
    for (let l=0; l<this.lignes; l++) {
      let ligne = '';
      for (let c=0; c<this.colonnes; c++) {
        const v = this.grille[l][c];
        ligne += (v===0?'.':v===1?'O':'X')+' ';
      }
      console.log(ligne.trim());
    }
    console.log(`Joueur ${this.joueur} (${this.joueur===1?'O':'X'}) — Choisis une colonne (0-${this.colonnes-1})`);
  }

  poserJeton(col) {
    for (let l=this.lignes-1; l>=0; l--) 
      if (this.grille[l][col]===0) { this.grille[l][col]=this.joueur; return l; }
    return -1;
  }

  dansGrille(l,c) { return l>=0 && l<this.lignes && c>=0 && c<this.colonnes; }

  aGagne(l,c,j) {
    const directions = [[0,1],[1,0],[1,1],[1,-1]];
    for (const [dl,dc] of directions) {
      let suite=1;
      for (let k=1;k<4;k++){ let nl=l+dl*k,nc=c+dc*k; if(this.dansGrille(nl,nc)&&this.grille[nl][nc]===j) suite++; else break; }
      for (let k=1;k<4;k++){ let nl=l-dl*k,nc=c-dc*k; if(this.dansGrille(nl,nc)&&this.grille[nl][nc]===j) suite++; else break; }
      if (suite>=4) return true;
    }
    return false;
  }

  grillePleine(){ return this.grille[0].every(x=>x!==0); }

  jouer() {
    this.afficher();
    this.terminal.question('> ', reponse=>{
      const col = Number(reponse);
      if(!Number.isInteger(col)||col<0||col>=this.colonnes){ console.log('Colonne invalide.'); return this.jouer(); }
      const ligne = this.poserJeton(col);
      if(ligne===-1){ console.log('Colonne pleine.'); return this.jouer(); }
      if(this.aGagne(ligne,col,this.joueur)){ this.afficher(); console.log(`Joueur ${this.joueur} gagne !`); return this.terminal.close(); }
      if(this.grillePleine()){ this.afficher(); console.log('Match nul.'); return this.terminal.close(); }
      this.joueur = this.joueur===1?2:1;
      this.jouer();
    });
  }
}

new Puissance4();
