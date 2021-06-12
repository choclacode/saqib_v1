module.exports = {
  mode: process.env.NODE_ENV ?? 'development',
  entry: './app/resources/js',
  output: {
    filename: 'main.js',
    path: `${__dirname}/../public`,
  },
}
