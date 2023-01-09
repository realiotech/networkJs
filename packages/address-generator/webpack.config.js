const path = require('path');

module.exports = {
  entry: './src/index.ts',
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'realio-address-generator.bundle.js',
    library: {
      type: "module",
    },
    module: true,
    path: path.resolve(__dirname, 'bundle'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
