const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };


const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const randomPos1 = Math.floor(Math.random() * array.length);
      const randomPos2 = Math.floor(Math.random() * array.length);
      swap(array, randomPos1, randomPos2);
    }
};

const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };

const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      swap(array, i, minIndex);
    }
};
const quick_sort = (array, start, end) => {
    if (start < end) {
      const pivotIndex = partition(array, start, end);
      quick_sort(array, start, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, end);
    }
};

const partition = (array, start, end) => {
    const pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (array[j] <= pivot) {
        i++;
        swap(array, i, j);
      }
    }
    swap(array, i + 1, end);
    return i + 1;
};

const vetor = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Vetor original:", vetor);


swap(vetor, 1, 3);
console.log("Vetor após swap:", vetor);


shuffle(vetor, 5);
console.log("Vetor após shuffle:", vetor);


bubble_sort(vetor);
console.log("Vetor após Bubble Sort:", vetor);


selection_sort(vetor);
console.log("Vetor após Selection Sort:", vetor);


quick_sort(vetor, 0, vetor.length - 1);
console.log("Vetor após Quick Sort:", vetor);

function add() {
          
  const valorInput = document.getElementById('valor');
  const listaValores = document.getElementById('valores');

 
  const node = document.createElement('li');
  const textNode = document.createTextNode(valorInput.value);
  node.appendChild(textNode);
  listaValores.appendChild(node);
}

function ordenar() {
            
  const listaValores = document.getElementById('valores');
  const listaAlgoritmo = document.getElementById('algoritmo');


  const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));

  const algoritmoSelecionado = listaAlgoritmo.options[listaAlgoritmo.selectedIndex].value;

  if (algoritmoSelecionado === 'bubble') {
      bubble_sort(valores);
  } else if (algoritmoSelecionado === 'selection') {
      selection_sort(valores);
  } else if (algoritmoSelecionado === 'quick') {
      quick_sort(valores, 0, valores.length - 1);
  }

 
  listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).join('');
}

function misturar() {
            
  const listaValores = document.getElementById('valores');

  
  const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));

  
  shuffle(valores, 5);

  
  listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).join('');
}



