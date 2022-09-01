const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame); //apenas termine de cargar ('load') todo,  se ejecuta el codigo startGame

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

  for (let i = 1; i <= 10; i++) {
    game.fillText(emojis["X"], elementsSize * i, elementsSize);
  }

  /* window.innerHeight; */
  /* window.innerWidth; */

  /* game.fillRect(0, 50, 100, 100);
  game.clearRect(0, 0, 0, 0); */
}
