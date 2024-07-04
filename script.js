var keybuttons = document.querySelectorAll(".pianokey").length;

for (var i = 0; i < keybuttons; i++) {

  document.querySelectorAll(".pianokey")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
        var key01 = new Audio("sounds/key01.mp3");
        key01.play();
        break;

    case "s":
        var key02 = new Audio("sounds/key02.mp3");
        key02.play();
        break;

    case "d":
        var key03 = new Audio('sounds/key03.mp3');
        key03.play();
        break;

    case "f":
        var key04 = new Audio('sounds/key04.mp3');
        key04.play();
        break;

    case "g":
        var key05 = new Audio('sounds/key05.mp3');
        key05.play();
        break;

    case "h":
        var key06 = new Audio('sounds/key06.mp3');
        key06.play();
        break;
    case "j":
        var key07 = new Audio('sounds/key07.mp3');
        key07.play();
        break;
    case "k":
        var key08 = new Audio('sounds/key08.mp3');
        key08.play();
        break;
    case "l":
        var key09 = new Audio('sounds/key09.mp3');
        key09.play();
        break;
    case ";":
        var key10 = new Audio('sounds/key10.mp3');
        key10.play();
        break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 50);

}