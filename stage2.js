const option3 = document.getElementById("option3");
const audio_select = new Audio("sound/hit.wav");

option3.addEventListener("click", option3selected);

function option3selected() {
   audio_select.play();
   setTimeout(() => {
      location.assign("stage3.html");
   }, 500);
}
