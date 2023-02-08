var rucket = document.getElementById('rucket');
var bullet = document.getElementById('bullet');
 var att = document.createAttribute("controls");
 var x = document.getElementById("myAudio");

document.addEventListener('keyup',function(e){
  if(e.key === ' '){
    bullet.classList.replace('bullet','bulletshut');
    playAudio()
  }
})
function playAudio() {
  x.play();
}