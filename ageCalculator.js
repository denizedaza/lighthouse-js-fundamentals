const ageCalculator = function (name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  //let outputString = 

  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Suzie", 1983, 2021));
console.log(ageCalculator("Paulo", 1986, 2021));
console.log(ageCalculator("Miranda", 1983, 2021));
console.log(ageCalculator("Ferdinand", 1988, 2021));