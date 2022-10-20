function sum(a, b) {
  return a + b;
}

function ErrorThrower() {
  throw new Error('Test error!');
}

module.exports = { sum, ErrorThrower };