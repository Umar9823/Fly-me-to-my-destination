function minPlanesToDestination(fuelArray) {
  const n = fuelArray.length;
  if (n <= 1) return 0;
  if (fuelArray[0] === 0) return -1;

  let planes = 0;
  let maxReach = 0;
  let currentEnd = 0;

  for (let i = 0; i < n - 1; i++) {
    maxReach = Math.max(maxReach, i + fuelArray[i]);

    if (i === currentEnd) {
      planes++;
      currentEnd = maxReach;

      if (currentEnd >= n - 1) {
        return planes;
      }
    }

    if (i >= maxReach) return -1;
  }

  return currentEnd >= n - 1 ? planes : -1;
}
console.log(minPlanesToDestination([2,1,2,3,1])); 
console.log(minPlanesToDestination([1,6,3,4,5,0,0,0,6]));  
console.log(minPlanesToDestination([0,2,3]));
