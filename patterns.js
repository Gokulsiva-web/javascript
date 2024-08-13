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

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Test the function
let numbersArray = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(numbersArray));  // 15




	