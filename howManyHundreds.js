const howManyHundreds = function(num){
  let answer;
  if (num === 100){
    answer = num / 100;
  } else if (100 % num < 100){
    answer = 0;
  } else {
    let remainder = num % 100;
    answer = (num - remainder) / 100;
  } 
  return answer;
} 
console.log("Using 100: " + howManyHundreds(100));