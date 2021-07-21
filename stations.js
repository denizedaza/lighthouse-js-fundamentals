const chooseStations = function(stations){
  const goodStations = [];
  
  for (const stations of stations){
    const capacity = stations[1];
    const location = stations[2];
    if (capacity >=20 && (location === "school" || location === "community centre")){
      goodStations.push(stations[0]);
    }
  }
  return goodStations;
}