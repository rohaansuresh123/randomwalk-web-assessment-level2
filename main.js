import './style.css';
import { TicTacToe } from './src/game.js';
import { GameUI } from './src/ui.js';
import { setupThemeToggle } from './src/theme.js';
import { setupAudio } from './src/audio.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="header">
      <h1>Tic Tac Toe</h1>
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </div>
    <div class="game-container">
      <div class="board"></div>
      <div class="info">
        <div class="status"></div>
        <div class="scores">
          <div class="score-x"></div>
          <div class="score-o"></div>
        </div>
        <div class="controls">
          <button id="reset-game" class="control-btn">Reset Game</button>
          <button id="reset-scores" class="control-btn">Reset Scores</button>
          <button id="toggle-sound" class="control-btn">🔊 Sound</button>
        </div>
      </div>
    </div>
  </div>
`;

const game = new TicTacToe();
const ui = new GameUI(game);
setupThemeToggle();
setupAudio();