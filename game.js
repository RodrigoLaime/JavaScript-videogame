
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;

  startGame();
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  for (let i = 1; i <= 10; i++){
    console.log(i);
    for (let j = 1; j <= 10; j++){
      game.fillText(emojis['X'], elementsSize * i + 5, elementsSize * j)
    }
  }
  /* for (let i = 1; i <= 10; i++) {
    game.fillText(emojis['X'], elementsSize, elementsSize * i);
  } */
}


/* .----------------------------. */
/* const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame); //apenas termine de cargar ('load') todo,  se ejecuta el codigo startGame
window.addEventListener("resize", startGame); //permite cambiar el tamaño de la pantalla junto con la pantalla del navegador

function startGame() {
  let canvasSize;
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  const elementsSize = canvasSize / 10; //alto y ancho del canvas sobre 10

  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana"; //concatenamos px con la elementsSize
  game.texAlign = "end";

  for (let i = 0; i <= 10; i++) {
    game.fillText(emojis["X"], elementsSize * i, elementsSize);
  }
 */
  /* window.innerHeight; */
  /* window.innerWidth; */

  /* game.fillRect(0, 50, 100, 100);
  game.clearRect(0, 0, 0, 0); */

