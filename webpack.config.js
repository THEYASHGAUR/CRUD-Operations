import path from 'path';

export default {
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  mode: 'development'
};
