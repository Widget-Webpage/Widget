const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "./widget_app/src/index.js"),  // path to our input file
  output: {
    filename: 'index-bundle.js',  // output bundle file name
    path: path.resolve(__dirname, './widget_app/static'),  // path to our Django static directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"],
                   plugins: ['@babel/plugin-proposal-class-properties']}
      },
    ]
  },
}
