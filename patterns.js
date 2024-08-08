let p = 'A';
let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(p + "\t"); // Write the character with a tab
        p = String.fromCharCode(p.charCodeAt(0) + 1); // Increment character
    }
    console.log(); // Move to the next line after each row
}

// let p='A',n=5;
// 		for (let i = 1; i <=n; i++) {
			 
// 			for(let j=1;j<=i;j++)
// 			 {
				
//                 process.stdout.write((CharacterData)p);
// 				 p++;
// 			 }
			
// 			System.out.println();
// 		}
		