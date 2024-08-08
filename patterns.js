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
		

let p = 'A';
let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
    let output = '';

    // Add spaces for centering the pyramid
    for (let j = 1; j <= n - i; j++) {
        output += ' \t'; // Add tabs to create spaces
    }

    // Add the letters for the current row
    for (let k = 1; k <= i; k++) {
        output += p + "\t";
        p = String.fromCharCode(p.charCodeAt(0) + 1); // Move to the next character
    }

    console.log(output); // Print the current row
}
