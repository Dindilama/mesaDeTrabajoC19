const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

letras.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

console.log(letras); 