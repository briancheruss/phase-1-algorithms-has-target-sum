function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const num of array) {
    // Calculate the difference between the target and the current number
    const difference = target - num;

    if (seenNumbers.has(difference)) {
      return true;
    }

    seenNumbers.add(num);
  }
  
  return false;
}

/* 
  Write the Big O time complexity of your function here
  // Time complexity: O(n)
*/

/* 
  Add your pseudocode here
   - Create an empty Set called "seenNumbers" to keep track of seen numbers
  - For each "num" in the input "array":
    - Calculate the "difference" as "target - num"
    - If "difference" is found in "seenNumbers":
      - Return true
    - Otherwise, add "num" to "seenNumbers"
  - If the loop completes without finding a pair, return false
*/

/*
  Add written explanation of your solution here
  Here's how the function works step by step:

 1. Initialize an empty Set called seenNumbers to keep track of the numbers encountered while iterating through the input array.

 2. Iterate through each element, num, in the input array using a for...of loop.

 3. For each element, calculate the difference by subtracting the current element num from the target number.

 4. Check if the difference is present in the seenNumbers Set. If it is, this means that there is another number earlier in the array such that when added to num, it equals the target. In this case, return true to indicate that a pair of numbers has been found.

 5. If the difference is not found in the seenNumbers Set, add the current element num to the Set. This allows us to keep track of the numbers we've seen so far.

 6. Continue this process for all elements in the input array.

 7. If the loop completes without finding a pair of numbers that add up to the target, return false to indicate that no such pair exists.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
