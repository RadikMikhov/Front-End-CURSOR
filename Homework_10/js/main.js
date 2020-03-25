let keyQ = document.getElementById("81");
let keyW = document.getElementById("87");
let keyE = document.getElementById("69");
let keyR = document.getElementById("82");
let keyT = document.getElementById("84");
let keyY = document.getElementById("89");
let keyU = document.getElementById("85");
let keyI = document.getElementById("73");
let keyO = document.getElementById("79");

const playSoundQ = () => {
  let myAudioQ = new Audio("sounds/q.mp3");
  myAudioQ.play();
};
const playSoundW = () => {
  let myAudioW = new Audio("sounds/w.mp3");
  myAudioW.play();
};
const playSoundE = () => {
  let myAudioE = new Audio("sounds/e.mp3");
  myAudioE.play();
};
const playSoundR = () => {
  let myAudioR = new Audio("sounds/r.mp3");
  myAudioR.play();
};
const playSoundT = () => {
  let myAudioT = new Audio("sounds/t.mp3");
  myAudioT.play();
};
const playSoundY = () => {
  let myAudioY = new Audio("sounds/y.mp3");
  myAudioY.play();
};
const playSoundU = () => {
  let myAudioU = new Audio("sounds/u.mp3");
  myAudioU.play();
};
const playSoundI = () => {
  let myAudioI = new Audio("sounds/i.mp3");
  myAudioI.play();
};
const playSoundO = () => {
  let myAudioO = new Audio("sounds/o.mp3");
  myAudioO.play();
};

//-----------------------------actions for keydown---------------------------------------------------------
document.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 81:
      playSoundQ();
      keyQ.style.fontSize = "32px";
      setTimeout(() => (keyQ.style.fontSize = "30px"), 100);
      keyQ.classList.add("boxHover");
      setTimeout(() => keyQ.classList.remove("boxHover"), 100);
      break;
    case 87:
      playSoundW();
      keyW.style.fontSize = "32px";
      setTimeout(() => (keyW.style.fontSize = "30px"), 100);
      keyW.classList.add("boxHover");
      setTimeout(() => keyW.classList.remove("boxHover"), 100);
      break;
    case 69:
      playSoundE();
      keyE.style.fontSize = "32px";
      setTimeout(() => (keyE.style.fontSize = "30px"), 100);
      keyE.classList.add("boxHover");
      setTimeout(() => keyE.classList.remove("boxHover"), 100);
      break;
    case 82:
      playSoundR();
      keyR.style.fontSize = "32px";
      setTimeout(() => (keyR.style.fontSize = "30px"), 100);
      keyR.classList.add("boxHover");
      setTimeout(() => keyR.classList.remove("boxHover"), 100);
      break;
    case 84:
      playSoundT();
      keyT.style.fontSize = "32px";
      setTimeout(() => (keyQ.style.fontSize = "30px"), 100);
      keyT.classList.add("boxHover");
      setTimeout(() => keyT.classList.remove("boxHover"), 100);
      break;
    case 89:
      playSoundY();
      keyY.style.fontSize = "32px";
      setTimeout(() => (keyY.style.fontSize = "30px"), 100);
      keyY.classList.add("boxHover");
      setTimeout(() => keyY.classList.remove("boxHover"), 100);
      break;
    case 85:
      playSoundU();
      keyU.style.fontSize = "32px";
      setTimeout(() => (keyU.style.fontSize = "30px"), 100);
      keyU.classList.add("boxHover");
      setTimeout(() => keyU.classList.remove("boxHover"), 100);
      break;
    case 73:
      playSoundI();
      keyI.style.fontSize = "32px";
      setTimeout(() => (keyI.style.fontSize = "30px"), 100);
      keyI.classList.add("boxHover");
      setTimeout(() => keyI.classList.remove("boxHover"), 100);
      break;
    case 79:
      playSoundO();
      keyO.style.fontSize = "32px";
      setTimeout(() => (keyO.style.fontSize = "30px"), 100);
      keyO.classList.add("boxErrorHover");
      setTimeout(() => keyO.classList.remove("boxErrorHover"), 100);
      break;
    default:
      console.log("another one");
  }
});
//------------------------------------------------------------------------------------------------

//--------------------------------------actions for click------------------------------------------
keyQ.addEventListener("click", function() {
  playSoundQ();
  keyQ.style.fontSize = "32px";
  setTimeout(() => (keyQ.style.fontSize = "30px"), 100);
  keyQ.classList.add("boxHover");
  setTimeout(() => keyQ.classList.remove("boxHover"), 100);
});

keyW.addEventListener("click", function() {
  playSoundW();
  keyW.style.fontSize = "32px";
  setTimeout(() => (keyW.style.fontSize = "30px"), 100);
  keyW.classList.add("boxHover");
  setTimeout(() => keyW.classList.remove("boxHover"), 100);
});

keyE.addEventListener("click", function() {
  playSoundE();
  keyE.style.fontSize = "32px";
  setTimeout(() => (keyE.style.fontSize = "30px"), 100);
  keyE.classList.add("boxHover");
  setTimeout(() => keyE.classList.remove("boxHover"), 100);
});

keyR.addEventListener("click", function() {
  playSoundR();
  keyR.style.fontSize = "32px";
  setTimeout(() => (keyR.style.fontSize = "30px"), 100);
  keyR.classList.add("boxHover");
  setTimeout(() => keyR.classList.remove("boxHover"), 100);
});

keyT.addEventListener("click", function() {
  playSoundT();
  keyT.style.fontSize = "32px";
  setTimeout(() => (keyT.style.fontSize = "30px"), 100);
  keyT.classList.add("boxHover");
  setTimeout(() => keyT.classList.remove("boxHover"), 100);
});

keyY.addEventListener("click", function() {
  playSoundY();
  keyY.style.fontSize = "32px";
  setTimeout(() => (keyY.style.fontSize = "30px"), 100);
  keyY.classList.add("boxHover");
  setTimeout(() => keyY.classList.remove("boxHover"), 100);
});

keyU.addEventListener("click", function() {
  playSoundU();
  keyU.style.fontSize = "32px";
  setTimeout(() => (keyU.style.fontSize = "30px"), 100);
  keyU.classList.add("boxHover");
  setTimeout(() => keyU.classList.remove("boxHover"), 100);
});

keyI.addEventListener("click", function() {
  playSoundI();
  keyI.style.fontSize = "32px";
  setTimeout(() => (keyI.style.fontSize = "30px"), 100);
  keyI.classList.add("boxHover");
  setTimeout(() => keyI.classList.remove("boxHover"), 100);
});

keyO.addEventListener("click", function() {
  playSoundO();
  keyO.style.fontSize = "32px";
  setTimeout(() => (keyO.style.fontSize = "30px"), 100);
  keyO.classList.add("boxErrorHover");
  setTimeout(() => keyO.classList.remove("boxErrorHover"), 100);
});
//-----------------------------------------------------------------------------
