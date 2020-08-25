class Background {
  constructor(context, settings) {
    this.context = context;
    this.settings = settings;
  }

  drawBackground() {
    const backgroundImage = new Image();
    backgroundImage.src = "./images/background.png";

    this.context.drawImage(
      backgroundImage,
      0,
      0,
      918,
      515,
      0,
      0,
      this.settings.screen.width,
      this.settings.screen.height
    );
  }
}

export default Background;
