function smartGarbage(trash, bins){
 const keys = Object.keys(bins);

for (let i of keys){
  if (i === trash){
    bins[i] += 1;
  }
}
 
 return (bins);
}

console.log(smartGarbage('recycling', 
{ waste: 4, recycling: 2, compost: 5 }));