const arrayCuentas = [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    
  ];

  function bubbleSort(array, key) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j][key] > array[j + 1][key]) {
          // Intercambiar elementos si están en el orden incorrecto
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  // a. Ordenar el array por saldo ascendente
  function ordenarPorSaldoAscendente(array) {
    return bubbleSort([...array], 'saldo');
  }
  
  // b. Ordenar el array por edad del titular ascendente
  function ordenarPorEdadAscendente(array) {
    return bubbleSort([...array], 'edadTitular');
  }
  
  // Llamar a las funciones para ordenar el array
  const arrayOrdenadoPorSaldo = ordenarPorSaldoAscendente(arrayCuentas);
  const arrayOrdenadoPorEdad = ordenarPorEdadAscendente(arrayCuentas);
  
  console.log("Array ordenado por saldo ascendente:", arrayOrdenadoPorSaldo);
  console.log("Array ordenado por edad del titular ascendente:", arrayOrdenadoPorEdad);
  