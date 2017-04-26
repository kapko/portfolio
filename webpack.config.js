module.exports = {
  entry: {
    'app': __dirname + '/frontend/main',
    'vendor': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },
  output: {
    path: __dirname + '/public/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, 
        loaders: [
          'babel-loader', 
          'awesome-typescript-loader',
          'angular2-template-loader'
        ], 
        exclude: /node_modules/
      },
      {
        test: /\.html$/, loader: 'html'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};
