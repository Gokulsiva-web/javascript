// let p = 'A';
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(p + "\t"); // Write the character with a tab
//         p = String.fromCharCode(p.charCodeAt(0) + 1); // Increment character
//     }
//     console.log(); // Move to the next line after each row
// }

// let p='A',n=5;
// 		for (let i = 1; i <=n; i++) {
			 
// 			for(let j=1;j<=i;j++)
// 			 {
				
//                 process.stdout.write((CharacterData)p);
// 				 p++;
// 			 }
			
// 			System.out.println();
// 		}
		

// let p = 'A';
// let n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//     let output = '';

//     // Add spaces for centering the pyramid
//     for (let j = 1; j <= n - i; j++) {
//         output += ' \t'; // Add tabs to create spaces
//     }

//     // Add the letters for the current row
//     for (let k = 1; k <= i; k++) {
//         output += p + "\t";
//         p = String.fromCharCode(p.charCodeAt(0) + 1); // Move to the next character
//     }

//     console.log(output); // Print the current row
// }
// let p = 'A';
// let n = 5; // Number of rows

// for (let i = 1; i <= n; i++) {
//     let output = '';

//     for (let j = 1; j <= i; j++) {
//         output += p + "\t";
//         p = String.fromCharCode(p.charCodeAt(0) + 1);
//     }

    // console.log(output);
// }
// let p = 'A';
// let n = 5; // Number of rows

// for (let i = n; i >= 1; i--) {
//     let output = '';

//     for (let j = 1; j <= i; j++) {
//         output += p + "\t";
//         p = String.fromCharCode(p.charCodeAt(0) + 1);
//     }

//     console.log(output);
// }


// let rem, reverse = 0, copy, i, j;

// for (i = 153; i <= 999; i++) {
//     copy = i;
//     j = i;
//     while (j != 0) {
//         rem = j % 10;
//         reverse += rem * rem * rem;
//         j = Math.floor(j / 10);
//     }

//     if (copy == reverse)
//         console.log("Armstrong: " + i);

//     reverse = 0;  // Reset reverse for the next iteration
// }

// let num = 1;

// for (let i = 0; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(num + " x " + j + " = " + (num * j));
//     }
//     console.log();  // Print a blank line between tables
//     num++;
// }

// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// // Test the function
// console.log("4 is:", checkEvenOdd(4));  // Even
// console.log("7 is:", checkEvenOdd(7));  // Odd

// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// // Test the function
// let numbersArray = [1, 2, 3, 4, 5];
// console.log("Sum of array:", sumArray(numbersArray));  // 15

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) console.log(i);
// }

// function fibonacci(n) {
//     let a = 0, b = 1, next;
//     for (let i = 1; i <= n; i++) {
//         console.log(a);
//         next = a + b;
//         a = b;
//         b = next;
//     }
// }

// fibonacci(10); // Output: first 10 numbers in the Fibonacci sequence

// let person = {
//     name: "Alice",
//     age: 30,
//     introduce: function() {
//         return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// };

// // Use the method
// console.log(person.introduce());

let numbers = [1, 6, 3, 8, 2, 10, 4];

// Filter and sort
let filteredAndSorted = numbers.filter(num => num <= 5).sort((a, b) => b - a);

console.log("Filtered and Sorted:", filteredAndSorted);



	