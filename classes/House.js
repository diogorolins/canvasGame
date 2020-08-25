export default class BigHouse {
  constructor(x, y, context, settings) {
    this.x = x;
    this.y = y;
    this.width = settings.bigHouse.width;
    this.height = settings.bigHouse.height;
    this.context = context;
    this.settings = settings;
  }

  drawHouse() {
    const houses = new Image();
    houses.src = "./images/houses.png";
    this,
      this.context.drawImage(
        houses,
        this.settings.bigHouse.originalX,
        this.settings.bigHouse.originalY,
        this.settings.bigHouse.originalWidth,
        this.settings.bigHouse.orifinalHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
  }
}
