// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log("Welcome to the password validator tool!")

// reader.question("Type the password you would like to validate: ", function(input){
// 	password = input;

//     if (input.length > 9) {
//         console.log('Password is valid!')
//     } else if (input.length <= 9) {
//         console.log('Password is not valid!')
//     } else
//     reader.close()

// });


// const vowels = []

// for (let i = 0; i < 26; i++) {
//     let keys = 65 + i
//         vowels.push([`${String.fromCharCode(keys)}`])
// }
// console.log(vowels)


// Can also be be written without the keys variable
const vowels = []

for (let i = 0; i < 26; i++) {
        vowels.push([`${String.fromCharCode(65 +i)}`])
}
console.log(vowels)