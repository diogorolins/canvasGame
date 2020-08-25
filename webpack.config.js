var path = require("path");

module.exports = {
  mode: "development",
  entry: "./canvas.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js",
  },
};
