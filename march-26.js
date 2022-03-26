const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome all word fanatics!")

reader.question("I only want you to type letters here! Anything else will be denied 👎🏼: ", function(input){
	password = input;
    const lowerCaseLetters =
    const upperCaseLetters =
    if (input.length > 9) {
        console.log('Password is valid!')
    } else if (input.length <= 9) {
        console.log('Password is not valid!')
    } else
    reader.close()

});


// const vowels = []

// for (let i = 0; i < 26; i++) {
//     let keys = 65 + i
//         vowels.push([`${String.fromCharCode(keys)}`])
// }
// console.log(vowels)


// Can also be be written without the keys variable
// uppercase letters
// const upperCaseLetters = []

// for (let i = 0; i < 26; i++) {
//         upperCaseLetters.push([`${String.fromCharCode(65 + i)}`])
// }
// console.log(upperCaseLetters)

// lowercase letters
// const lowerCaseLetters = []

// for (let i = 0; i < 26; i++) {
//         lowerCaseLetters.push([`${String.fromCharCode(97 + i)}`])
// }
// console.log(lowerCaseLetters)

//keys without brackets
for (let i = 0; i < 26; i++) {
    let keys = 65 + i
    console.log(String.fromCharCode(keys))
}