const edades = [33, 27, 34, 30, 34, 25];

function ordenarAscendente(arr) {
  return arr.sort((a, b) => a - b);
}

function ordenarDescendente(arr) {
  return arr.sort((a, b) => b - a);
}

const edadesAscendente = ordenarAscendente([...edades]);
console.log("Ascendente:", edadesAscendente);

const edadesDescendente = ordenarDescendente([...edades]);
console.log("Descendente:", edadesDescendente);
