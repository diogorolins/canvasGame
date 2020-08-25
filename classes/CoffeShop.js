class CoffeShop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = settings.coffeShop.width;
    this.height = settings.coffeShop.height;
    this.context = context;
  }

  drawCoffeShop() {
    context.drawImage(
      houses,
      settings.coffeShop.originalX,
      settings.coffeShop.originalY,
      settings.coffeShop.originalWidth,
      settings.coffeShop.orifinalHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
