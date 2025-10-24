// 1. Even or Odd Without Using Modulus
// Description: Write a function isEven(num) that determines whether a number is even without using the modulus (%) operator. Testcases:
// ● Input: isEven(8) → Output: true
// ● Input: isEven(13) → Output: false
// ● Input: isEven(0) → Output: true



 function isEven(num){
    return(num & 1) === 1;
 }
 console.log(isEven(8));
 console.log(isEven(13));
 console.log(isEven(0));

// 2. Find Largest of Three Numbers
// Description: Write a function findLargest(a, b, c) that returns the largest among three numbers using only if–else statements. Testcases:
// ● Input: findLargest(3, 7, 5) → Output: 7
// ● Input: findLargest(-2, -8, -1) → Output: -1
// ● Input: findLargest(10, 10, 5) → Output: 10























// 3. FizzBuzz Variation
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n.
// ● For multiples of 3, print "Fizz".
// ● For multiples of 5, print "Buzz".
// ● For multiples of both, print "FizzBuzz". Return an array of results. Testcases:
// ● Input: fizzBuzz(5) → Output: [1, 2, "Fizz", 4, "Buzz"]
// ● Input: fizzBuzz(15) → Output includes "FizzBuzz" at position 15
// ● Input: fizzBuzz(3) → Output: [1, 2, "Fizz"]



























// 4. Reverse a Number
// Description: Write a function reverseNumber(num) that reverses the digits of a given number using a loop. Testcases:
// ● Input: reverseNumber(1234) → Output: 4321
// ● Input: reverseNumber(890) → Output: 98
// ● Input: reverseNumber(5) → Output: 5





























// 5. Count Vowels in a String
// Description: Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a string. Testcases:
// ● Input: countVowels("hello") → Output: 2
// ● Input: countVowels("JAVASCRIPT") → Output: 3
// ● Input: countVowels("xyz") → Output: 0























// 6. Sum of Digits Until Single Digit
// Description: Write a function digitalRoot(num) that repeatedly adds the digits of a number until the sum becomes a single digit. Testcases:
// ● Input: digitalRoot(9875) → Output: 2
// ● Input: digitalRoot(38) → Output: 2
// ● Input: digitalRoot(5) → Output: 5



















// 7. Print Prime Numbers Up to N
// Description: Write a function printPrimes(n) that returns all prime numbers less than or equal to n. Testcases:
// ● Input: printPrimes(10) → Output: [2, 3, 5, 7]
// ● Input: printPrimes(1) → Output: []
// ● Input: printPrimes(20) → Output: [2, 3, 5, 7, 11, 13, 17, 19]

















// 8. Palindrome Check (Number or String)
// Description: Write a function isPalindrome(value) that returns true if the given string or number is a palindrome. Testcases:
// ● Input: isPalindrome("madam") → Output: true
// ● Input: isPalindrome(121) → Output: true
// ● Input: isPalindrome("hello") → Output: false

























// 9. Count Words in a Sentence
// Description: Write a function countWords(sentence) that counts how many words are in a given string (words separated by spaces). Testcases:
// ● Input: countWords("Hello world") → Output: 2
// ● Input: countWords("I love JavaScript very much") → Output: 5
// ● Input: countWords("") → Output: 0









