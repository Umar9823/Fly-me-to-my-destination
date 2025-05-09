# ✈️ Fly Me to My Destination

This JavaScript program solves the **"minimum number of planes to reach a destination"** problem using a greedy approach. It is similar to the Jump Game II problem and models a scenario where each airport (represented as an array index) provides a certain amount of fuel (number of airports you can reach from there).

---

## 🧩 Problem Statement

Given an array `fuelArray` where each element represents the **maximum distance (in hops)** a plane can travel from that index (airport), determine the **minimum number of planes** required to reach the last airport from the first one.

If the destination is **not reachable**, return `-1`.

---

## ✅ Example Inputs and Outputs

```javascript
minPlanesToDestination([2, 1, 2, 3, 1]);
minPlanesToDestination([1, 6, 3, 4, 5, 0, 0, 0, 6]); 
minPlanesToDestination([0, 2, 3]); 
