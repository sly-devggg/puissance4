class Puissance4 {
  constructor(boardEl, statusEl) {
    this.rows = 6;
    this.cols = 7;
    this.grid = this.emptyGrid();
    this.current = 1;
    this.gameOver = false;
    this.boardEl = boardEl;
    this.statusEl = statusEl;
    this.setupUI();
    this.render();
    this.updateStatus();
  }
  emptyGrid() {
    return Array.from({length: this.rows}, () => Array(this.cols).fill(0));
  }
  setupUI() {
    this.boardEl.innerHTML = '';
    for (let r=0; r<this.rows; r++){
      for (let c=0; c<this.cols; c++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = r;
        cell.dataset.col = c;
        if (r === 0) {
          cell.addEventListener('click', () => this.handleColumnClick(c));
        }
        const slot = document.createElement('div');
        slot.className = 'slot';
        cell.appendChild(slot);
        this.boardEl.appendChild(cell);
      }
    }
  }
  handleColumnClick(col) {
    if (this.gameOver) return;
    const row = this.dropRow(col);
    if (row === -1) return;
    this.grid[row][col] = this.current;
    this.afterMove(row, col);
  }
  dropRow(col) {
    for (let r=this.rows-1; r>=0; r--){
      if (this.grid[r][col] === 0) return r;
    }
    return -1;
  }
  afterMove(row, col) {
    const win = this.checkWin(row, col, this.current);
    this.render();
    if (win) {
      this.gameOver = true;
      this.highlightWin(win);
      this.statusEl.textContent = `Joueur ${this.current} gagne ! 🎉`;
      return;
    }
    if (this.isFull()) {
      this.gameOver = true;
      this.statusEl.textContent = "Match nul.";
      return;
    }
    this.current = this.current === 1 ? 2 : 1;
    this.updateStatus();
  }
  isFull() { return this.grid[0].every(c => c !== 0); }
  render() {
    const slots = Array.from(this.boardEl.querySelectorAll('.slot'));
    slots.forEach(slot => {
      const parent = slot.parentElement;
      const r = +parent.dataset.row;
      const c = +parent.dataset.col;
      const val = this.grid[r][c];
      slot.className = 'slot';
      if (val === 1) slot.classList.add('p1');
      if (val === 2) slot.classList.add('p2');
    });
  }
  reset() {
    this.grid = this.emptyGrid();
    this.current = 1;
    this.gameOver = false;
    this.clearHighlights();
    this.render();
    this.updateStatus();
  }
  updateStatus() {
    this.statusEl.textContent = `Au tour du joueur ${this.current} ${this.current===1?'🔴':'🟡'}`;
  }
  checkWin(r,c,player) {
    const dirs = [[0,1],[1,0],[1,1],[1,-1]];
    for (const [dr,dc] of dirs){
      const line=[[r,c]];
      for (let k=1;k<4;k++){
        const nr=r+dr*k,nc=c+dc*k;
        if (this.inBounds(nr,nc) && this.grid[nr][nc]===player) line.push([nr,nc]); else break;
      }
      for (let k=1;k<4;k++){
        const nr=r-dr*k,nc=c-dc*k;
        if (this.inBounds(nr,nc) && this.grid[nr][nc]===player) line.unshift([nr,nc]); else break;
      }
      if (line.length>=4) return line.slice(0,4);
    }
    return null;
  }
  inBounds(r,c){ return r>=0 && r<this.rows && c>=0 && c<this.cols; }
  highlightWin(coords){
    const cells = Array.from(this.boardEl.querySelectorAll('.cell'));
    for (const [r,c] of coords){
      const match = cells.find(el=>+el.dataset.row===r && +el.dataset.col===c);
      if (match){
        match.querySelector('.slot').classList.add('winning');
      }
    }
  }
  clearHighlights(){
    this.boardEl.querySelectorAll('.slot.winning').forEach(s=>s.classList.remove('winning'));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const status = document.getElementById('status');
  const game = new Puissance4(board, status);

  document.getElementById('newGameBtn').addEventListener('click', () => {
    game.reset();
  });
});
