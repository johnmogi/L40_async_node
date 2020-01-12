// const readline = require("readline");

// // One Time Configuration: 
// const ui = readline.createInterface({
//     input: process.stdin, // The Standard Input (מאיפה לקלוט מידע)
//     output: process.stdout // The Standard Output (לאיפה להציג את המידע)
// });

// ui.question("Enter your first name: ", firstName => {

//     console.log("Your first name is: " + firstName);

//     ui.question("Enter your last name: ", lastName => {

//         console.log("Your last name is: " + lastName);

//         ui.close();

//     });

// });


// const input = require("./input");
// input.getValue("Enter your first name: ")
//     .then(firstName => {
//         console.log("Your first name: " + firstName);
//         input.getValue("Enter your last name: ")
//             .then(lastName => {
//                 console.log("Your last name: " + lastName);
//                 input.close();
//             })
//             .catch(err => console.log(err.message));
//     })
//     .catch(err => console.log(err.message));


const input = require("./input");

// IIFE = Immediately Invoked Function Expression (function(){ ... })();

async function main() {
    try {
        const firstName = await input.getValue("Enter your first name: "); // Blocking Operation
        const lastName = await input.getValue("Enter your last name: "); // Blocking Operation
        console.log("Your full name is: " + firstName + " " + lastName);
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        input.close();
    }
}

main();













