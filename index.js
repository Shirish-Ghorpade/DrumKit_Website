// My approch
// for(var i = 0; i < 7; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//
//   });
// }


// Angela's approach
var numberOfButtons = document.querySelectorAll(".drum").length;
/*To avoid confusion of afetr adding new buttons in HTML so use class be specific*/

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var clickedButton = this.innerHTML;
    makeSound(clickedButton);
    applyAnimation(clickedButton);
  });
}


document.addEventListener("keydown", function(evt){   //----->evt is any just parameter to give info about clicked button
  makeSound(evt.key);
  applyAnimation(evt.key);
});


function makeSound(key){

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function applyAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey); //------>Access the which button is got clicked
  activeButton.classList.add("pressed"); //----->add .pressed class to that button so css is apply to that button while clicked it
  setTimeout (function(){ //------>Use setTimeout and 1st parameter as function and 2nd parameter as 100 miliseconds(0.1second)
    activeButton.classList.remove("pressed");
  },100);
}
