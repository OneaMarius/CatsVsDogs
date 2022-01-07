const option5 = document.getElementsByClassName("player");
const audio_select = new Audio("sound/dog_effect.mp3");

for (i = 0; i < 8; i++) {
   option5[i].addEventListener("click", option5selected);
}

function option5selected() {
   audio_select.play();
   setTimeout(() => {
      location.assign("stage5.html");
   }, 500);
}

option5[0].addEventListener("click", op_1_P2);
option5[1].addEventListener("click", op_2_P2);
option5[2].addEventListener("click", op_3_P2);
option5[3].addEventListener("click", op_4_P2);
option5[4].addEventListener("click", op_5_P2);
option5[5].addEventListener("click", op_6_P2);
option5[6].addEventListener("click", op_7_P2);
option5[7].addEventListener("click", op_8_P2);

function op_1_P2() {
   localStorage.setItem("player2", option5[0].innerHTML);
   localStorage.setItem("player2name", option5[0].title);
}
function op_2_P2() {
   localStorage.setItem("player2", option5[1].innerHTML);
   localStorage.setItem("player2name", option5[1].title);
}
function op_3_P2() {
   localStorage.setItem("player2", option5[2].innerHTML);
   localStorage.setItem("player2name", option5[2].title);
}
function op_4_P2() {
   localStorage.setItem("player2", option5[3].innerHTML);
   localStorage.setItem("player2name", option5[3].title);
}
function op_5_P2() {
   localStorage.setItem("player2", option5[4].innerHTML);
   localStorage.setItem("player2name", option5[4].title);
}
function op_6_P2() {
   localStorage.setItem("player2", option5[5].innerHTML);
   localStorage.setItem("player2name", option5[5].title);
}
function op_7_P2() {
   localStorage.setItem("player2", option5[6].innerHTML);
   localStorage.setItem("player2name", option5[6].title);
}
function op_8_P2() {
   localStorage.setItem("player2", option5[7].innerHTML);
   localStorage.setItem("player2name", option5[7].title);
}
