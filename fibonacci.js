//Problema 2: Números pares en la sucesión de Fibonacci Cada nuevo número en la sucesión de Fibonacci se genera al sumar los dos números anteriores. Comenzando con 1 y 2, los primeros 10 números serán:
function fibonaccipar(n) {
let a = 1;
let b = 2;
let suma = 0;
 while (a <= n) {
    if (a % 2 == 0) {
      suma = suma + a;
      console.log(a);
    }
    let temp = a + b;
    a = b;
    b = temp;
  }
  console.log("suma =", suma);

  return true;
}

fibonaccipar(100);