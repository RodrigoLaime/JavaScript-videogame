const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");

let canvasSize;
let elementsSize;

/* codigo para que se mueva el personaje */
const playerPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10;

  startGame();
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana";
  game.textAlign = "end";

  const map = maps[0]; //crear un array multidimencional cambia de nivel
  const mapRows = map.trim().split("\n"); //crear filar del mapa, lipiar los espacios vacios y crea un nuevo array por cada salto de linea
  const mapRowCols = mapRows.map((row) => row.trim().split("")); //bidimencional, crear un array apartir de otro array, que a su ves va a ser un array de arrays(cada fila va a ser un arreglo y cada fila va aser otro arreglo donde cada elemento son las distintas columnas)
  console.log({ map, mapRows, mapRowCols });

  game.clearRect(0, 0, canvasSize, canvasSize);

  mapRowCols.forEach((row, rowI) => {
    //con forEach recorremos mapRowCols que es el array bidimencional, que recive la fila y el indice de la fila
    row.forEach((col, colI) => {
      //a partir de las filas recorremos a cada uno de las columnas de cada fila y al indice de cadad columna
      const emoji = emojis[col]; //sacamos el emoji de la lista
      //por cada fila foreach para sacar a la columna
      const posX = elementsSize * (colI + 1.2); //renderisamo la posicion o cordenada de la columna
      const posY = elementsSize * (rowI + 0.8); //renderisamo la posicion o cordenada de la fila

      if (col == "O") {
        if (playerPosition.x && playerPosition.y) {
        }
        /* playerPosition.x = posX;
        playerPosition.y = posY;
        console.log({ playerPosition }); */
      }
      game.fillText(emoji, posX, posY);
      console.log({ row, rowI, col, colI });
    });
  });

  movePlayer();
}

function movePlayer() {
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

window.addEventListener("keydown", moveByKeys);

btnUp.addEventListener("click", moveUp);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);

function moveByKeys(event) {
  if (event.key == "ArrowUp") {
    moveUp();
  } else if (event.key == "ArrowLeft") {
    moveLeft();
  } else if (event.key == "ArrowRight") {
    moveRight();
  } else if (event.key == "ArrowDown") {
    moveDown();
  }
} //resumimos el codigo eliminando los corchetes de la condicion if

function moveUp() {
  console.log("Me quiero mover hacia arriba");
  playerPosition.y -= elementsSize;
  startGame();
}

function moveLeft() {
  console.log("Me quiero mover hacia izquierda");
}

function moveRight() {
  console.log("Me quiero mover hacia derecha");
}

function moveDown() {
  console.log("Me quiero mover hacia abajo");
}
