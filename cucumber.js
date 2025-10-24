// cucumber.js
module.exports = {
  default: {
    require: ['./steps/*.js', './support/*.js'],
    publishQuiet: true,
    format: ['progress'],
    timeout: 60 * 1000 // 60 seconds per step
  }
};