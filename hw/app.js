const input = require("./input");
const fileHandler = require("./file-handler");


// IIFE = Immediately Invoked Function Expression (function(){ ... })();

async function main() {
    try {
        const firstName = await input.getValue("Enter your first name: "); // Blocking Operation
        const lastName = await input.getValue("Enter your last name: "); // Blocking Operation
        const ccField = await input.getValue("Enter your credit card: "); // Blocking Operation
        const emailField = await input.getValue("Enter your email: "); // Blocking Operation
        const addressField = await input.getValue("Enter youraddress: "); // Blocking Operation
        console.log("Your details are : " + firstName + " " + lastName + " " + ccField + " " + emailField + " " + addressField);
    } catch (err) {
        console.log(err.message);
    } finally {
        input.close();
    }
}

main();