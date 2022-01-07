const option4 = document.getElementsByClassName("player");
const audio_select = new Audio("sound/cat_effect.mp3");

for (i = 0; i < 8; i++) {
   option4[i].addEventListener("click", option4selected);
}

function option4selected() {
   audio_select.play();
   setTimeout(() => {
      location.assign("stage4.html");
   }, 500);
}

option4[0].addEventListener("click", op_1_P1);
option4[1].addEventListener("click", op_2_P1);
option4[2].addEventListener("click", op_3_P1);
option4[3].addEventListener("click", op_4_P1);
option4[4].addEventListener("click", op_5_P1);
option4[5].addEventListener("click", op_6_P1);
option4[6].addEventListener("click", op_7_P1);
option4[7].addEventListener("click", op_8_P1);

function op_1_P1() {
   localStorage.setItem("player1", option4[0].innerHTML);
   localStorage.setItem("player1name", option4[0].title);
}
function op_2_P1() {
   localStorage.setItem("player1", option4[1].innerHTML);
   localStorage.setItem("player1name", option4[1].title);
}
function op_3_P1() {
   localStorage.setItem("player1", option4[2].innerHTML);
   localStorage.setItem("player1name", option4[2].title);
}
function op_4_P1() {
   localStorage.setItem("player1", option4[3].innerHTML);
   localStorage.setItem("player1name", option4[3].title);
}
function op_5_P1() {
   localStorage.setItem("player1", option4[4].innerHTML);
   localStorage.setItem("player1name", option4[4].title);
}
function op_6_P1() {
   localStorage.setItem("player1", option4[5].innerHTML);
   localStorage.setItem("player1name", option4[5].title);
}
function op_7_P1() {
   localStorage.setItem("player1", option4[6].innerHTML);
   localStorage.setItem("player1name", option4[6].title);
}
function op_8_P1() {
   localStorage.setItem("player1", option4[7].innerHTML);
   localStorage.setItem("player1name", option4[7].title);
}
