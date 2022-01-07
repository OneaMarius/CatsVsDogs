const P1life = document.getElementById("hpP1");
const P1lifeHP = document.getElementById("hpP1A");
const P2life = document.getElementById("hpP2");
const P2lifeHP = document.getElementById("hpP2A");
const hit = document.getElementById("hit");
const bite = document.getElementById("bite");
const hit2 = document.getElementById("hit2");
const bite2 = document.getElementById("bite2");
const laserP1 = document.getElementById("laserP1");
const laserP2 = document.getElementById("laserP2");
const P1Select = document.getElementById("P1Select");
const P2Select = document.getElementById("P2Select");

const audio_hit_sound = new Audio();
audio_hit_sound.autoplay = true;

hit.addEventListener("click", player1dmg);
bite.addEventListener("click", player1bite);
hit2.addEventListener("click", player2dmg);
bite2.addEventListener("click", player2bite);

let P1startLife = 100;
let P2startLife = 100;
hit2.style.display = "none";
bite2.style.display = "none";

P1Select.innerHTML = localStorage.getItem("player1");
P2Select.innerHTML = localStorage.getItem("player2");

player1.style.animation = "enterP1 2s alternate 1 forwards";
player2.style.animation = "enterP2 2s alternate 1 forwards";

function player1dmg() {
   audio_hit_sound.src = "sound/catatk.mp3";
   testDMG = randomDMG1();
   P2startLife = P2startLife - testDMG;

   hit.style.display = "none";
   bite.style.display = "none";

   setTimeout(() => {
      if (P2startLife > 0) {
         P2life.style.width = `${P2startLife}%`;
         P2lifeHP.innerText = P2startLife + "%";
      } else {
         P2life.style.width = `0%`;
         P2lifeHP.innerText = "0%";
         P2startLife = 0;

         setTimeout(() => {
            endRound();
            nextRound();
         }, 2500);
      }
      audio_hit_sound.src = "sound/dog_Effect.mp3";
      head2.style.animation = "head-anim-P2 1s alternate 0s 2 forwards";
   }, 2500);

   setTimeout(() => {
      hit2.style.display = "block";
      bite2.style.display = "block";
   }, 5000);

   clearAnimationP2();
   player1.style.animation = "atkP1 2s alternate 1s 2 forwards";
   handR1.style.animation = "R-hand-anim-P1 2s alternate 1s 2 forwards";
   handL1.style.animation = "L-hand-anim-P1 2s alternate 1s 2 forwards";
   footR1.style.animation = "R-foot-anim-P1 2s alternate 1s 2 forwards";
   footL1.style.animation = "L-foot-anim-P1 2s alternate 1s 2 forwards";

   hitDmgP2.style.display = "none";
   biteDmgP2.style.display = "none";

   hitDmgP1.innerText = `-${testDMG}`;
   hitDmgP1.style.display = "block";
   hitDmgP1.style.animation = "dmg-anim 5s alternate 0s 1 forwards";
}

function player1bite() {
   audio_hit_sound.src = "sound/catatk.mp3";
   testDMG = randomDMG2();
   P2startLife = P2startLife - testDMG;

   hit.style.display = "none";
   bite.style.display = "none";

   setTimeout(() => {
      if (P2startLife > 0) {
         P2life.style.width = `${P2startLife}%`;
         P2lifeHP.innerText = P2startLife + "%";
      } else {
         P2life.style.width = `0%`;
         P2lifeHP.innerText = "0%";
         P2startLife = 0;

         setTimeout(() => {
            endRound();
            nextRound();
         }, 2500);
      }
      audio_hit_sound.src = "sound/dog2_Effect.mp3";
      head2.style.animation = "head-anim-P2 1s alternate 0s 2 forwards";
   }, 2500);

   setTimeout(() => {
      hit2.style.display = "block";
      bite2.style.display = "block";
   }, 5000);

   clearAnimationP2();
   player1.style.animation = "body-anim-P1 2s alternate 1s 2 forwards";
   handR1.style.animation = "R-hand-anim-P1 2s alternate 1s 2 forwards";
   handL1.style.animation = "L-hand-anim-P1 2s alternate 1s 2 forwards";
   footR1.style.animation = "R-foot-anim-P1 2s alternate 1s 2 forwards";
   footL1.style.animation = "L-foot-anim-P1 2s alternate 1s 2 forwards";

   hitDmgP2.style.display = "none";
   biteDmgP2.style.display = "none";

   hitDmgP1.innerText = `-${testDMG}`;
   hitDmgP1.style.display = "block";
   hitDmgP1.style.animation = "dmg-anim 5s alternate 0s 1 forwards";
}

function player2dmg() {
   audio_hit_sound.src = "sound/dogatk.mp3";
   testDMG = randomDMG1();
   P1startLife = P1startLife - testDMG;

   hit2.style.display = "none";
   bite2.style.display = "none";

   setTimeout(() => {
      if (P1startLife > 0) {
         P1life.style.width = `${P1startLife}%`;
         P1lifeHP.innerText = P1startLife + "%";
      } else {
         P1life.style.width = `0%`;
         P1lifeHP.innerText = "0%";
         P1startLife = 0;

         setTimeout(() => {
            endRound();
            nextRound();
         }, 2500);
      }
      audio_hit_sound.src = "sound/cat_Effect.mp3";
      head1.style.animation = "head-anim-P1 1s alternate 0s 2 forwards";
   }, 2500);

   setTimeout(() => {
      hit.style.display = "block";
      bite.style.display = "block";
   }, 5000);

   clearAnimationP1();
   player2.style.animation = "atkP2 2s alternate 1s 2 forwards";
   handR2.style.animation = "R-hand-anim-P2 2s alternate 1s 2 forwards";
   handL2.style.animation = "L-hand-anim-P2 2s alternate 1s 2 forwards";
   footR2.style.animation = "R-foot-anim-P2 2s alternate 1s 2 forwards";
   footL2.style.animation = "L-foot-anim-P2 2s alternate 1s 2 forwards";

   hitDmgP1.style.display = "none";
   biteDmgP1.style.display = "none";

   hitDmgP2.innerText = `-${testDMG}`;
   hitDmgP2.style.display = "block";
   hitDmgP2.style.animation = "dmg-anim 5s alternate 0s 1 forwards";
}

function player2bite() {
   audio_hit_sound.src = "sound/dogatk.mp3";
   testDMG = randomDMG2();
   P1startLife = P1startLife - testDMG;

   hit2.style.display = "none";
   bite2.style.display = "none";

   setTimeout(() => {
      if (P1startLife > 0) {
         P1life.style.width = `${P1startLife}%`;
         P1lifeHP.innerText = P1startLife + "%";
      } else {
         P1life.style.width = `0%`;
         P1lifeHP.innerText = "0%";
         P1startLife = 0;

         setTimeout(() => {
            endRound();
            nextRound();
         }, 2500);
      }
      audio_hit_sound.src = "sound/cat2_Effect.mp3";
      head1.style.animation = "head-anim-P1 1s alternate 0s 2 forwards";
   }, 2500);

   setTimeout(() => {
      hit.style.display = "block";
      bite.style.display = "block";
   }, 5000);

   clearAnimationP1();
   player2.style.animation = "body-anim-P2 2s alternate 1s 2 forwards";
   handR2.style.animation = "R-hand-anim-P2 2s alternate 1s 2 forwards";
   handL2.style.animation = "L-hand-anim-P2 2s alternate 1s 2 forwards";
   footR2.style.animation = "R-foot-anim-P2 2s alternate 1s 2 forwards";
   footL2.style.animation = "L-foot-anim-P2 2s alternate 1s 2 forwards";

   hitDmgP1.style.display = "none";
   biteDmgP1.style.display = "none";

   hitDmgP2.innerText = `-${testDMG}`;
   hitDmgP2.style.display = "block";
   hitDmgP2.style.animation = "dmg-anim 5s alternate 0s 1 forwards";
}

function randomDMG1() {
   dmg = parseInt((Math.random() * 10).toFixed(0)) + 20;
   // dmg = 25;
   return dmg;
}

function randomDMG2() {
   dmg = parseInt((Math.random() * 40).toFixed(0)) + 5;
   // dmg = 50;
   return dmg;
}

function clearAnimationP1() {
   player1.style.animation = "";
   handR1.style.animation = "";
   handL1.style.animation = "";
   footR1.style.animation = "";
   footL1.style.animation = "";
   head1.style.animation = "";
}

function clearAnimationP2() {
   player2.style.animation = "";
   handR2.style.animation = "";
   handL2.style.animation = "";
   footR2.style.animation = "";
   footL2.style.animation = "";
   head2.style.animation = "";
}
