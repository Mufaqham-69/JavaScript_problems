// 1. Even or Odd Without Using Modulus
// Description: Write a function isEven(num) that determines whether a number is even without using the modulus (%) operator. Testcases:
// ● Input: isEven(8) → Output: true
// ● Input: isEven(13) → Output: false
// ● Input: isEven(0) → Output: true



//  function isEven(num){
//     return(num & 1) === 1;
//  }
//  console.log(isEven(8));
//  console.log(isEven(13));
//  console.log(isEven(0));

// 2. Find Largest of Three Numbers
// Description: Write a function findLargest(a, b, c) that returns the largest among three numbers using only if–else statements. Testcases:
// ● Input: findLargest(3, 7, 5) → Output: 7
// ● Input: findLargest(-2, -8, -1) → Output: -1
// ● Input: findLargest(10, 10, 5) → Output: 10


// function findLargest(a,b,c){
//     if(a>=b&& a>=c){
//         return a;
//     }
//     else if(b>=a && b>=c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// console.log(findLargest (3,7,5));
// console.log(findLargest (-2,-8,-1));
// console.log(findLargest (10,10,5));




// 3. FizzBuzz Variation
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n.
// ● For multiples of 3, print "Fizz".
// ● For multiples of 5, print "Buzz".
// ● For multiples of both, print "FizzBuzz". Return an array of results. Testcases:
// ● Input: fizzBuzz(5) → Output: [1, 2, "Fizz", 4, "Buzz"]
// ● Input: fizzBuzz(15) → Output includes "FizzBuzz" at position 15
// ● Input: fizzBuzz(3) → Output: [1, 2, "Fizz"]

// function fizzBuzz(n){
//    const result = [];
//    for (let i = 1; i <= n; i++) {
      
//       if(i%3==0){
//          result.push("Buzz");
//       }
//       else if(i%5==0) {
//        result.push("Fizz");
//       }
//       else{
//          result.push(i); 
//       }
//    }
//    return result;
// }
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(3));


// 4. Reverse a Number
// Description: Write a function reverseNumber(num) that reverses the digits of a given number using a loop. Testcases:
// ● Input: reverseNumber(1234) → Output: 4321
// ● Input: reverseNumber(890) → Output: 98
// ● Input: reverseNumber(5) → Output: 5


// function reverseNumber(num) {
//     const sign = num < 0 ? -1 : 1;
//     num = Math.abs(num);
//     let reversed = 0;
//     while (num > 0) {
//         reversed = reversed * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }
//     return reversed * sign;
// }

// console.log(reverseNumber(1234)); 
// console.log(reverseNumber(890));  
// console.log(reverseNumber(5));    

// 5. Count Vowels in a String
// Description: Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a string. Testcases:
// ● Input: countVowels("hello") → Output: 2
// ● Input: countVowels("JAVASCRIPT") → Output: 3
// ● Input: countVowels("xyz") → Output: 0

// function countVowels(str) {
//     if (!str) return 0;
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.has(str[i].toLowerCase())) count++;
//     }
//     return count;
// }

// console.log(countVowels("hello"));      
// console.log(countVowels("JAVASCRIPT"));
// console.log(countVowels("xyz"));        


// 6. Sum of Digits Until Single Digit
// Description: Write a function digitalRoot(num) that repeatedly adds the digits of a number until the sum becomes a single digit. Testcases:
// ● Input: digitalRoot(9875) → Output: 2
// ● Input: digitalRoot(38) → Output: 2
// ● Input: digitalRoot(5) → Output: 5

// function digitalRoot(num) {
//     num = Math.abs(Number(num)) || 0;
//     while (num >= 10) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         num = sum;
//     }
//     return num;
// }

// console.log(digitalRoot(9875)); 
// console.log(digitalRoot(38));   
// console.log(digitalRoot(5)); 



// 7. Print Prime Numbers Up to N
// Description: Write a function printPrimes(n) that returns all prime numbers less than or equal to n. Testcases:
// ● Input: printPrimes(10) → Output: [2, 3, 5, 7]
// ● Input: printPrimes(1) → Output: []
// ● Input: printPrimes(20) → Output: [2, 3, 5, 7, 11, 13, 17, 19]

// function printPrimes(n) {
//     const primes = [];
//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) { isPrime = false; break; }
//         }
//         if (isPrime) primes.push(i);
//     }
//     return primes;
// }

// console.log(printPrimes(10)); 
// console.log(printPrimes(1));  
// console.log(printPrimes(20));



// 8. Palindrome Check (Number or String)
// Description: Write a function isPalindrome(value) that returns true if the given string or number is a palindrome. Testcases:
// ● Input: isPalindrome("madam") → Output: true
// ● Input: isPalindrome(121) → Output: true
// ● Input: isPalindrome("hello") → Output: false


// function isPalindrome(val) {
// val= val.toString();
// let newval= val.split("").reverse().join("");
// if(val === newval){
//    return true
// }
// else{
// return false
// } 
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome(121));


// 9. Count Words in a Sentence
// Description: Write a function countWords(sentence) that counts how many words are in a given string (words separated by spaces). Testcases:
// ● Input: countWords("Hello world") → Output: 2
// ● Input: countWords("I love JavaScript very much") → Output: 5
// ● Input: countWords("") → Output: 0

// function countWords(sentence){
//     if(sentence.trim( )==="" ){
//         return 0;
//     }

//     const words =sentence.trim().split(/\s+/)
//     return words.length;
// }
// console.log(countWords("Hello World"));
// console.log(countWords("I love JavaScript very much"));
// console.log(countWords(""));







