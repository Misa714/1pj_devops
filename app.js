// 1. Función de suma (la que busca suma.test.js)
function suma(a, b) {
  return a + b;
}

// 2. Función de interés simple (la que busca app.test.js)
function calcularInteresSimple(p, i, t) {
  if (p < 0 || i < 0 || t < 0) return 0;
  return p * i * t;
}

// IMPORTANTE: Exportar ambas para que los tests las encuentren
module.exports = { suma, calcularInteresSimple };