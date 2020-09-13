console.log('FUNCTIONS && SCOPE HW')



// ## 1. Verbal questions

// Write answers to the following questions as comments. 

// 1. What is the difference between a **parameter** and an **argument**?


console.log('When a function is declared, it can take parameters to use in the function. The parameters are like placeholder names. Arguments are the values we pass into the function when we call it.');


// 2. Within a function, what is the difference between **return** and **console.log**?


console.log('Console.log is a function that is called and logs the value to the console. Returning a value is when the function gives a value but doesn\'t log it. ');



// 3. What are the implications of the ability of a function to return a value?


console.log('When a function returns a value, we can save the value to a variable and use it in another place.');



// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 1 - Verbal questions".
// <hr>



console.log('~~~~~~~~~~~~~~~~')
console.log("checkPalindrome")
console.log('~~~~~~~~~~~~~~~~')
// ## 2. Palindrome again.
// Write a function `checkPalindrome` that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with **capital letters**.

function checkPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

// ```javascript
console.log(checkPalindrome("Radar"));
//  => true
// ```

// ```javascript
console.log(checkPalindrome("Borscht"));
// => false
// ```

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 2 - Palindrome".
// <hr>




console.log('~~~~~~~~~~~~~~~~')
console.log("sumDigits")
console.log('~~~~~~~~~~~~~~~~')
// ## 3. Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.

function sumDigits(num) {
  num = Math.abs(num).toString().split('');
  return num
    .map(n => parseInt(n))
    .reduce((a, b) => a + b);
}

// // ```js
console.log(sumDigits(42));
// => 6;
console.log(sumDigits(0));
console.log(sumDigits(1));
console.log(sumDigits(10));
console.log(sumDigits(1000));
console.log(sumDigits(1342));
console.log(sumDigits(-1234));
// ```

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 3 - Digit Sum".
// <hr>



console.log('~~~~~~~~~~~~~~~~')
console.log("calculateSide")
console.log('~~~~~~~~~~~~~~~~')
// ## 4. Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

// _hint:_ discover the Pythagorean Theorem on a website called google.com

// _hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

// **_restriction_**: for this problem, do NOT use `Math.hypot()` (but for the rest of time, once you've done this problem feel free)

function calculateSide(sideA, sideB) {
  return Math.sqrt(sideA ** 2 + sideB ** 2);
}

// ```js
console.log(calculateSide(8, 6));
// => 10
// ```
// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 4 - Pythagoras".
// <hr>




console.log('~~~~~~~~~~~~~~~~')
console.log("sumArray")
console.log('~~~~~~~~~~~~~~~~')
// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Expected result:
// ```javascript
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21
// ```
// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 5 - Sum Array".
// <hr>



console.log('~~~~~~~~~~~~~~~~')
console.log("checkPrime")
console.log('~~~~~~~~~~~~~~~~')
// ## 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.

// ### Step Two
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>

function checkPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(checkPrime(97));
console.log(checkPrime(100));
console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(4)); //




console.log('~~~~~~~~~~~~~~~~')
console.log("printPrimes")
console.log('~~~~~~~~~~~~~~~~')

function printPrimes(num) {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) primes.push(i);
  }
  return primes;
}

console.log(printPrimes(0));
console.log(printPrimes(1));
console.log(printPrimes(2));
console.log(printPrimes(3));
console.log(printPrimes(4));
console.log(printPrimes(50));
console.log(printPrimes(97));
console.log(printPrimes(127));

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 6 - Prime Numbers".
// <hr>


// ## CSS
// Watch the following three videos on CSS:

// - [First CSS video - 5 minutes](https://www.youtube.com/watch?v=xWiT2TWCFjc&index=3&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
// - [Second CSS video - 11 minutes](https://www.youtube.com/watch?v=UMMHsQPmfug&index=4&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
// - [Third CSS video - 17 minutes](https://www.youtube.com/watch?v=g0Aq2kP5-CY&index=5&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

// You will need to have watched these videos for tomorrow's lab.

// # Hungry for more?

// 1. Complete the afternoon lab. 


console.log('~~~~~~~~~~~~~~~~')
console.log("insertDash")
console.log('~~~~~~~~~~~~~~~~')
// 2. Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.

function insertDash(num) {
  let strNum = num.toString();
   const regex = /([13579])(?=[13579])/g;
  return strNum.replaceAll(regex, '$1-');
}

// ```javascript
console.log(insertDash(454793));
console.log(insertDash(986356123));
console.log(insertDash(98976799632));
console.log(insertDash(24680));
console.log(insertDash(13579));
console.log(insertDash(97531));

// => 4547-9-3
// ```

//     Commit.



console.log('~~~~~~~~~~~~~~~~')
console.log("reverseString")
console.log('~~~~~~~~~~~~~~~~')
// 3. Write a function `reverseString` that takes a string as a parameter and returns that string with the letters reversed **without using `.split()`, `.reverse()`, or `.join()`**.

function reverseString(str) {
  let reverse = '';
  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString('bananarama'));
console.log(reverseString('reverse'));
console.log(reverseString('work it'));


//     Commit.



console.log('~~~~~~~~~~~~~~~~')
console.log("checkPalindrome")
console.log('~~~~~~~~~~~~~~~~')
// 4. Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.



function checkPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

//     Commit.

// 5. Make your palindrome function work even if the string contains punctuation.  So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." or "Cigar? Toss it in a can! It is so tragic." would pass the test.

//     Commit.

// 6. Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards.  It should not care about spacing, capitalization, or punctuation.  For example the following string would pass the test: 

//     "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."

//     Commit.

// 7. You still want more?!?! Do you even sleep? Create an account on [Project euler](https://projecteuler.net/archives) and keep working on those problems.