let life1P1 = document.getElementById("life1P1");
let life2P1 = document.getElementById("life2P1");
let life1P2 = document.getElementById("life1P2");
let life2P2 = document.getElementById("life2P2");
life1P1.style.display = "inline-block";
life2P1.style.display = "inline-block";
const audio_P1win = new Audio();
const audio_P2win = new Audio();
audio_P1win.autoplay = true;
audio_P2win.autoplay = true;

const audio_round_end = new Audio();
audio_round_end.autoplay = true;

let win = 0;

let player1name = localStorage.getItem("player1name");
let player2name = localStorage.getItem("player2name");
handL1.innerText = player1name;
handR1.innerText = player1name;
handL2.innerText = player2name;
handR2.innerText = player2name;

const roundCounter = document.getElementById("roundCounter");

function nextRound() {
   if (roundCounter.innerText == "Round 1") {
      roundCounter.innerText = "Round 2";

      audio_round_end.src = "sound/round2SE.mp3";
      player1.style.animation = "newRoundJump 1s alternate 2 forwards";
      player2.style.animation = "newRoundJump 1s alternate 2 forwards";
      P1startLife = 100;
      P2startLife = 100;
      P1life.style.width = `100%`;
      P1lifeHP.innerText = "100%";
      P2life.style.width = `100%`;
      P2lifeHP.innerText = "100%";
   } else if (roundCounter.innerText == "Round 2") {
      if (win == 1) {
         roundCounter.innerText = `${player2name} WIN`;
         audio_P2win.src = "sound/dog_wins.mp3";
         newGame();
      } else if (win == 2) {
         roundCounter.innerText = `${player1name} WIN`;
         audio_P1win.src = "sound/cat_wins.mp3";
         newGame();
      } else {
         roundCounter.innerText = "Round 3";
         audio_round_end.src = "sound/round3SE.mp3";
         player1.style.animation = "newRoundJump 1s alternate 2 forwards";
         player2.style.animation = "newRoundJump 1s alternate 2 forwards";
         P1startLife = 100;
         P2startLife = 100;
         P1life.style.width = `100%`;
         P1lifeHP.innerText = "100%";
         P2life.style.width = `100%`;
         P2lifeHP.innerText = "100%";
      }
   } else {
      if (win == 1) {
         roundCounter.innerText = `${player2name} WIN`;
         audio_P2win.src = "sound/dog_wins.mp3";
      } else if (win == 2) {
         roundCounter.innerText = `${player1name} WIN`;
         audio_P1win.src = "sound/cat_wins.mp3";
      }
      newGame();
   }
}

function endRound() {
   if (P1startLife == 0 && life1P1.style.display != "none") {
      life1P1.style.display = "none";
      win = 0;
   } else if (P1startLife == 0 && life1P1.style.display == "none") {
      life2P1.style.display = "none";
      win = 1;
   } else if (P2startLife == 0 && life1P2.style.display != "none") {
      life1P2.style.display = "none";
      win = 0;
   } else if (P2startLife == 0 && life1P2.style.display == "none") {
      life2P2.style.display = "none";

      win = 2;
   }
}

function newGame() {
   setTimeout(() => {
      response = confirm("Restart Game?");
      if (response) {
         setTimeout(() => {
            location.reload();
         }, 500);
      } else {
         setTimeout(() => {
            location.assign("index.html");
         }, 500);
      }
   }, 1500);
}
