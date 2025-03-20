const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point for your app
  entry: {
    app: './src/js/app.js', // JavaScript entry point
  }, 

  // Output for the bundled file
  output: {
    filename: '[name].js', // Name of the output file
    path: path.resolve(__dirname, 'assets'), // Output to Shopify's assets folder
  },

  // Mode: 'development' or 'production'
  mode: 'development', // Use 'production' for optimized files

  // Loaders for processing different file types
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env'], // Transpile modern JavaScript
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to separate files
          'css-loader', // Resolves CSS imports
          {
            loader: 'postcss-loader', // Use PostCSS for Tailwind and Autoprefixer
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ], 
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Output CSS files: styles.css
    }),
  ],
  // Enable source maps for easier debugging
  devtool: 'source-map',
};
