// 1. Find Missing Number in Sequence:
// Given an array of consecutive integers with one number missing, find the missing 
// number. 
// Testcase 1: [1, 2, 4, 5] → 3 
// Testcase 2: [10, 11, 13, 14] → 12 
// Testcase 3: [100, 101, 102, 104] → 103 

// function findMissingNumber(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if(arr[i + 1] - arr[i] !== 1) {
//             return arr[i] + 1;
//         }
//     }
//     return null; 
// }   

// console.log(findMissingNumber([1, 2, 4, 5]));
// console.log(findMissingNumber([10, 11, 13, 14])); 
// console.log(findMissingNumber([100, 101, 102, 104])); 



// 2. Find Pair with Given Sum:
// Find if there exists a pair of numbers in the array whose sum equals the given target. 
// Testcase 1: ([1, 2, 4, 7], 6) → true 
// Testcase 2: ([3, 5, 9], 10) → false 
// Testcase 3: ([0, -1, 1], 0) → true 

// function hasPairWithSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }   

// console.log(hasPairWithSum([1, 2, 4, 7], 6)); 
// console.log(hasPairWithSum([3, 5, 9], 10)); 
// console.log(hasPairWithSum([0, -1, 1], 0)); 







// 3. Move Zeros to End:
// Move all zeros in the array to the end while maintaining the order of other elements. 
// Testcase 1: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0] 
// Testcase 2: [1, 0, 2, 0, 0] → [1, 2, 0, 0, 0] 
// Testcase 3: [0, 0, 0] → [0, 0, 0] 



// function moveZerosToEnd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] === 0) {
            
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }

//         }
//     }
//     return arr;
// }

// console.log(moveZerosToEnd([0, 1, 0, 3, 12])); 
// console.log(moveZerosToEnd([1, 0, 2, 0, 0])); 
// console.log(moveZerosToEnd([0, 0, 0])); 










// 4. Find Intersection Without Duplicates:
// Return the intersection of two arrays without repeating elements. 
// Testcase 1: ([1, 2, 2, 3], [2, 3, 4]) → [2, 3] 
// Testcase 2: ([5, 5, 6], [6, 6, 5]) → [5, 6] 
// Testcase 3: ([10, 20], [30, 40]) → [] 

// function intersectionWithoutDuplicates(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }
//     return result;
// }

// console.log(intersectionWithoutDuplicates([1, 2, 2, 3], [2, 3, 4])); 
// console.log(intersectionWithoutDuplicates([5, 5, 6], [6, 6, 5])); 
// console.log(intersectionWithoutDuplicates([10, 20], [30, 40]));     













// 5. Find Longest Consecutive Sequence:
// Find the length of the longest consecutive number sequence in an array. 
// Testcase 1: [100, 4, 200, 1, 3, 2] → 4 
// Testcase 2: [10, 5, 11, 12, 13] → 4 
// Testcase 3: [1, 2, 2, 3] → 3 



// function findLongestConsecutiveSequence(arr) {
//     let i=0;
//     let maxLength = 0;
//     while (i < arr.length) {
//         let currentNum = arr[i];
//         let currentLength = 1;
//         while (arr.includes(currentNum + 1)) {
//             currentNum++;
//             currentLength++;
//         }
//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//         }
//         i++;
//     }
//     return maxLength;
// }   

// console.log(findLongestConsecutiveSequence([100, 4, 200, 1, 3, 2])); 
// console.log(findLongestConsecutiveSequence([10, 5, 11, 12, 13])); 
// console.log(findLongestConsecutiveSequence([1, 2, 2, 3]));






// 6. Flatten Nested Array:
// Convert a multi-dimensional array into a one-dimensional array. 
// Testcase 1: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5] 
// Testcase 2: [[1], [2, [3, [4]]]] → [1, 2, 3, 4] 
// Testcase 3: [1, 2, 3] → [1, 2, 3] 


// function flattenArray(arr) {    
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flattenArray(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(flattenArray([1, [2, 3], [4, [5]]])); 
// console.log(flattenArray([[1], [2, [3, [4]]]])); 
// console.log(flattenArray([1, 2, 3]));   







// 7. Chunk Array into Groups:
// Split the array into groups of given size. 
// Testcase 1: ([1, 2, 3, 4, 5], 2) → [[1, 2], [3, 4], [5]] 
// Testcase 2: ([1, 2, 3], 1) → [[1], [2], [3]] 
// Testcase 3: ([1, 2, 3, 4], 3) → [[1, 2, 3], [4]] 


// function chunkArray(arr, size) {
//     for (let i = 0; i < arr.length; i += size) {
//         let chunk = arr.slice(i, i + size);
//         console.log(chunk);
//     }
// }   

// console.log(chunkArray([1, 2, 3, 4, 5], 2)); 
// console.log(chunkArray([1, 2, 3], 1)); 
// console.log(chunkArray([1, 2, 3, 4], 3));       








// 8. Rotate Array by K Steps:
// Rotate the array to the right by k positions. 
// Testcase 1: ([1, 2, 3, 4, 5], 2) → [4, 5, 1, 2, 3] 
// Testcase 2: ([10, 20, 30], 1) → [30, 10, 20] 
// Testcase 3: ([1, 2], 5) → [2, 1]


// function rotateArray(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//  if (i < k) {   
//     }
//     k = k % arr.length; 
//     let rotated = arr.slice(-k).concat(arr.slice(0, arr.length - k)); 
//     return rotated; 
// }
// }       

// console.log(rotateArray([1, 2, 3, 4, 5], 2));                  
// console.log(rotateArray([10, 20, 30], 1));           
// console.log(rotateArray([1, 2], 5));           





// 9. Find Majority Element:
// Find the element that appears more than n/2 times in the array. 
// Testcase 1: [3, 3, 4, 2, 3, 3, 5] → 3 
// Testcase 2: [1, 1, 2, 1] → 1 
// Testcase 3: [10, 20, 30] → null 

// function findMajorityElement(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }           
//             if (count > arr.length / 2) {
//                 return arr[i];
//             }
//         }
//     }
//     return null; 
// }

// console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 5])); 
// console.log(findMajorityElement([1, 1, 2, 1])); 
// console.log(findMajorityElement([10, 20, 30]));



// 10. Find Kth Largest Element:
// Return the kth largest element in the array. 
// Testcase 1: ([3, 2, 1, 5, 6, 4], 2) → 5 
// Testcase 2: ([10, 20, 30, 40], 1) → 40 
// Testcase 3: ([5, 5, 5, 5], 3) → 5 

// function findKthLargest(arr, k) {
//     arr.sort((a, b) => b - a); 
//     return arr[k - 1];
// }

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); 
// console.log(findKthLargest([10, 20, 30, 40], 1)); 
// console.log(findKthLargest([5, 5, 5, 5], 3));   




// 11.Rearrange Positive and Negative Numbers Alternately:
// Rearrange the array such that positive and negative numbers appear alternately. 
// Testcase 1: [1, -2, 3, -4, 5] → [1, -2, 3, -4, 5] 
// Testcase 2: [-1, -2, -3, 4, 5, 6] → [4, -1, 5, -2, 6, -3] 
// Testcase 3: [1, 2, 3, -1, -2, -3] → [1, -1, 2, -2, 3, -3] 

// function rearrangePosNeg(arr) {
//     let pos = [];
//     let neg = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             pos.push(arr[i]);
//         } else {
//             neg.push(arr[i]);
//         }
//     }
//     let result = [];
//     let i = 0, j = 0;
//     while (i < pos.length || j < neg.length) {
//         if (i < pos.length) {
//             result.push(pos[i]);
//             i++;
//         }
//         if (j < neg.length) {
//             result.push(neg[j]);
//             j++;
//         }
//     }       
//     return result;
// }

// console.log(rearrangePosNeg([1, -2, 3, -4, 5])); 
// console.log(rearrangePosNeg([-1, -2, -3, 4, 5, 6])); 
// console.log(rearrangePosNeg([1, 2, 3, -1, -2, -3]));    



// 12. Find Subarray with Given Sum:
// Find the continuous subarray whose elements sum up to a target value. 
// Testcase 1: ([1, 2, 3, 7, 5], 12) → [2, 3, 7] 
// Testcase 2: ([10, 2, -2, -20, 10], -10) → [10, 2, -2, -20] 
// Testcase 3: ([1, 4, 20, 3, 10, 5], 33) → [20, 3, 10] 




// 13. Find All Unique Triplets Summing to Zero:
// Find all unique triplets in the array that sum up to zero. 
// Testcase 1: [-1, 0, 1, 2, -1, -4] → [[-1, -1, 2], [-1, 0, 1]] 
// Testcase 2: [0, 0, 0] → [[0, 0, 0]] 
// Testcase 3: [1, 2, -2, -1] → []



// 14. Spiral Traverse of 2D Array:
// Return all elements of a 2D array in spiral order. 
// Testcase 1: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] → [1, 2, 3, 6, 9, 8, 7, 4, 5] 
// Testcase 2: [[1, 2], [3, 4], [5, 6]] → [1, 2, 4, 6, 5, 3] 
// Testcase 3: [[1]] → [1] 





// 15. Find Product of Array Except Self:
// Return an array where each element is the product of all elements except itself. 
// Testcase 1: [1, 2, 3, 4] → [24, 12, 8, 6] 
// Testcase 2: [2, 3, 4, 5] → [60, 40, 30, 24] 
// // Testcase 3: [10, 0, 5] → [0, 50, 0]

// function productExceptSelf(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let product = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 product *= arr[j];
//             }
//         }
//         result.push(product);
//     }
//     return result;
// }

// console.log(productExceptSelf([1, 2, 3, 4])); 
// console.log(productExceptSelf([2, 3, 4, 5])); 
// console.log(productExceptSelf([10, 0, 5])); 