const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
} else if (!raining){
  console.log("Leave your umbrella at home!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

