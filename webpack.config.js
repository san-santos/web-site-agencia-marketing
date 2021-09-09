const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.css$/, 
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [ 'file-loader' ]
      },
      {
        test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    ]


  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};