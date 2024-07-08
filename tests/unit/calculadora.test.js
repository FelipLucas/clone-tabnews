const calculadora = require('../models/calculator.js');

test("somar 2 + 2 deveria retornar 4", () =>{
  const resultado = calculadora.somar(2, 2);

  expect(resultado).toBe(4);
});
  test("somar 100 + 5 deveria retornar 105", () =>{
    const resultado = calculadora.somar(100, 5);

    expect(resultado).toBe(105);
  });
  test("somar 1000 + 3000 deveria retornar 105", () =>{
    const resultado = calculadora.somar(1000, 3000);

    expect(resultado).toBe(4000);
  });