class CoffeShop {
  constructor(x, y, context, settings) {
    this.x = x;
    this.y = y;
    this.width = settings.coffeShop.width;
    this.height = settings.coffeShop.height;
    this.context = context;
    this.settings = settings;
  }

  drawCoffeShop() {
    const houses = new Image();
    houses.src = "./images/houses.png";
    this.context.drawImage(
      houses,
      this.settings.coffeShop.originalX,
      this.settings.coffeShop.originalY,
      this.settings.coffeShop.originalWidth,
      this.settings.coffeShop.orifinalHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default CoffeShop;
