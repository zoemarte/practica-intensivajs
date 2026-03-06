//Problema 1: Múltiplos de 3 y 5 Si enumeramos todos los números naturales menores a 10 que sean múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.Encuentre la suma de todos los múltiplos de 3 o 5 debajo del valor del parámetro proporcionado 

function multiplesOf3Or5(number) {
  let suma = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
      
    }

  }
  return suma;
}

console.log(multiplesOf3Or5(10));