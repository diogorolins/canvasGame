export default class Player {
  constructor(context, settings, bigHouses) {
    this.posX = settings.player.x;
    this.posY = settings.player.height; // 100;
    this.width = settings.player.size;
    this.height = settings.player.height;
    this.speed = settings.player.speed;
    this.settings = settings;
    this.context = context;
    this.bigHouses = bigHouses;

    this.moveCommands = {
      39: {
        move: "right",
        function: (keyUnpressed) => {
          if (keyUnpressed !== 39) this.moveRight(this.checkRightLimit());
        },
      },
      37: {
        move: "left",
        function: (keyUnpressed) => {
          if (keyUnpressed !== 37) this.moveLeft(this.checkLeftLimit());
        },
      },
      38: {
        move: "up",
        function: (keyUnpressed) => {
          if (keyUnpressed !== 38) this.moveUp(this.checkTopLimit());
        },
      },
      40: {
        move: "down",
        function: (keyUnpressed) => {
          if (keyUnpressed !== 40) this.moveDown(this.checkDownLimit());
        },
      },
    };
    this.moves = {
      right: [
        { x: 81, y: 44 },
        { x: 102, y: 44 },
        { x: 123, y: 44 },
        { x: 146, y: 44 },
        { x: 168, y: 44 },
      ],
      left: [
        { x: 83, y: 125 },
        { x: 102, y: 125 },
        { x: 126, y: 125 },
        { x: 149, y: 125 },
        { x: 171, y: 125 },
      ],
      up: [
        { x: 83, y: 86 },
        { x: 104, y: 86 },
        { x: 126, y: 86 },
        { x: 149, y: 86 },
        { x: 171, y: 86 },
      ],
      down: [
        { x: 83, y: 6 },
        { x: 104, y: 6 },
        { x: 125, y: 6 },
        { x: 146, y: 6 },
        { x: 168, y: 6 },
      ],
    };

    this.actualDirection = "right";
    this.actualMove = 0;
  }

  drawPlayer(frames) {
    this.frames = frames;
    const sprites = new Image();
    sprites.src = "./images/sprite.png";

    const actualX = this.moves[this.actualDirection][this.actualMove].x;
    const actualY = this.moves[this.actualDirection][this.actualMove].y;

    this.context.drawImage(
      sprites,
      actualX,
      actualY,
      24,
      37,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  applyCommand(keyPressed, keyUnpressed) {
    if (this.moveCommands[keyPressed]) {
      this.moveCommands[keyPressed].function(keyUnpressed);
    }
  }

  checkPlayerMoves() {
    if (this.frames % 8 === 0) {
      if (this.actualMove < this.moves[this.actualDirection].length - 1) {
        this.actualMove += 1;
      } else {
        this.actualMove = 0;
      }
    }
  }

  moveRight(colision) {
    if (this.actualDirection !== "right") {
      this.actualMove = 0;
    }
    this.actualDirection = "right";

    let houseColision = false;
    if (this.lastMove === "right") {
      houseColision = this.checkHouseLimit("right");
    } else {
      this.lastMove = "right";
    }

    if (!colision && !houseColision) {
      this.posX = this.posX + this.speed;
      this.checkPlayerMoves(this.frames);
    }
  }

  moveLeft(colision) {
    if (this.actualDirection !== "left") {
      this.actualMove = 0;
    }
    this.actualDirection = "left";

    let houseColision = false;
    if (this.lastMove === "left") {
      houseColision = this.checkHouseLimit("left");
    } else {
      this.lastMove = "left";
    }

    if (!colision && !houseColision) {
      this.posX = this.posX - this.speed;
      this.checkPlayerMoves(this.frames);
    }
  }

  moveUp(colision) {
    if (this.actualDirection !== "up") {
      this.actualMove = 0;
    }

    this.actualDirection = "up";
    let houseColision = false;
    if (this.lastMove === "up") {
      houseColision = this.checkHouseLimit("up");
    } else {
      this.lastMove = "up";
    }

    if (!colision && !houseColision) {
      this.posY = this.posY - this.speed;
      this.checkPlayerMoves(this.frames);
    }
  }

  moveDown(colision) {
    if (this.actualDirection !== "down") {
      this.actualMove = 0;
    }

    this.actualDirection = "down";
    let houseColision = false;
    if (this.lastMove === "down") {
      houseColision = this.checkHouseLimit("down");
    } else {
      this.lastMove = "down";
    }

    if (!colision && !houseColision) {
      this.posY = this.posY + this.speed;
      this.checkPlayerMoves(this.frames);
    }
  }

  checkTopLimit() {
    if (this.posY <= 0) return true;
    return false;
  }

  checkDownLimit() {
    if (this.posY >= this.settings.screen.height - this.height) return true;
    return false;
  }

  checkLeftLimit() {
    if (this.posX <= 0) return true;
    return false;
  }

  checkRightLimit() {
    if (this.posX + this.width >= this.settings.screen.width) return true;
    return false;
  }

  checkHouseLimit(move) {
    let hit = false;

    this.bigHouses.forEach((h) => {
      if (
        this.posY + this.height <= h.y + h.height + 20 &&
        this.posY >= h.y + h.height - 150 &&
        this.posX <= h.x + h.width &&
        this.posX + this.width >= h.x
      ) {
        hit = true;
        this.lastMove = move;
      }
    });

    return hit;
  }
}
