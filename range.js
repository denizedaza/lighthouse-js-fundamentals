function range(start, end, step){
  let outputArray = [];

  if ((start, end, step === undefined) || (start > end) || (step < 0)){
    return [];
  } else {
    for (let i = start; i <= end; i = i + step){
      outputArray.push(i);
    }
  }
  return outputArray;
}

console.log(range(0, 10, 2));