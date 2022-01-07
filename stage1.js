const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const audio_select = new Audio("sound/hit.wav");

option1.addEventListener("click", option1selected);

function option1selected() {
   audio_select.play();
   setTimeout(() => {
      location.assign("stage3.html");
   }, 500);
}


function goHome() {
   location.assign('https://www.mariusonea.ro');
}