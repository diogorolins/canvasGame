import Player from "./classes/Player.js";
import Background from "./classes/Background.js";
import BigHouse from "./classes/House.js";
import CoffeShop from "./classes/CoffeShop.js";
import { settings } from "./settings.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let bigHouses = [];
let bigHouse1 = new BigHouse(20, 100, context, settings);
let bigHouse2 = new BigHouse(700, 100, context, settings);
bigHouses.push(bigHouse1, bigHouse2);

let background = new Background(context, settings);

let player = new Player(context, settings, bigHouses);
let coffeShop = new CoffeShop(320, 120, context, settings);
let keyPressed = "";
let keyUnpressed = "";
let frames = 0;

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
  player.drawPlayer(frames);
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
