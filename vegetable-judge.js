const judgeVegetable = function (vegetables, metric){
//  const keys = Object.keys(metric);
  let submitterName = "";
  let highest = 0;
  for(let i = 0; i < vegetables.length; i++){
    if (vegetables[i].metric > highest){
      highest = vegetables[i].metric ;
      submitterName = vegetables[i][submitter];
    }
  }
  return submitterName;
}

// const judgeVegetable = function (vegetables, metric) {
//   vegetables.sort(function (a, b) {
//     return a.redness - b.redness;
//   });
//   return vegetables[vegetables.length - 1].submitter;
// }