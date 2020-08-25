class Background {
  constructor() {
    this.context = context;
  }

  drawBackground() {
    context.drawImage(
      backgroundImage,
      0,
      0,
      918,
      515,
      0,
      0,
      settings.screen.width,
      settings.screen.height
    );
  }
}
