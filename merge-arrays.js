function merge(array1, array2){
  for (let k = 0; k < array2.length; k++){
    array1.push(array2[k]);
  }
  var compare = 0;
  for (var i = 0; i < array1.length; i++) {
    for (var j = i + 1; i < array1.length; i++){
      if (array1[i] > array1[j]){
        compare = array1[i];
        array1[i] = array1[j];
        array1[j] = compare;
      }
    }
  }
  return array1.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
