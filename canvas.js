canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const sprites = new Image();
sprites.src = "./sprite.png";

const backgroundImage = new Image();
backgroundImage.src = "./background.png";

const houses = new Image();
houses.src = "./houses.png";

let bigHouses = [];

let player = new Player();
let background = new Background();
buildHoudses();
let coffeShop = new CoffeShop(320, 120);
let keyPressed = "";
let keyUnpressed = "";
let frames = 0;

function buildHoudses() {
  let bigHouse1 = new BigHouse(20, 100);
  let bigHouse2 = new BigHouse(700, 100);
  bigHouses.push(bigHouse1, bigHouse2);
}

function init() {
  draw();
  player.applyCommand(keyPressed, keyUnpressed);
  frames = frames + 1;
  requestAnimationFrame(init);
}
function draw() {
  clearScreen();
  background.drawBackground();
  coffeShop.drawCoffeShop();
  bigHouses.forEach((h) => h.drawHouse());
  player.drawPlayer();
}

function clearScreen() {
  context.fillStyle = "#087050";
  context.fillRect(0, 0, 800, 600);
}

document.addEventListener("keydown", (event) => {
  initMove(event.keyCode);
});

document.addEventListener("keyup", (event) => {
  stopMove(event.keyCode);
});

function initMove(key) {
  keyPressed = key;
  keyUnpressed = "";
}

function stopMove(key) {
  keyUnpressed = key;
}

init();
