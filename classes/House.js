class BigHouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = settings.bigHouse.width;
    this.height = settings.bigHouse.height;
    this.context = context;
  }

  drawHouse() {
    context.drawImage(
      houses,
      settings.bigHouse.originalX,
      settings.bigHouse.originalY,
      settings.bigHouse.originalWidth,
      settings.bigHouse.orifinalHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
