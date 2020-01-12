
// // File System = מערכת הקבצים והתיקיות במחשב

// const fs = require("fs"); // Built-In Module

// fs.writeFile("./my-file.txt", "Hello!\n", err => {

//     if (err) {
//         console.error(err);
//         return;
//     }

//     // כאן אנו יודעים בוודאות שסיימנו לבצע את הכתיבה הראשונה בהצלחה

//     fs.appendFile("./my-file.txt", "Bye Bye!", err => {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         // append-כאן אנו יודעים שהצלחנו גם את ה

//         fs.readFile("./my-file.txt", "utf-8", (err, content) => {

//             if (err) {
//                 console.error(err);
//                 return;
//             }

//             console.log("Done. File Content: " + content);

//         });

//     });

// });



const fileHandler = require("./file-handler");

async function main() {
    try {
        await fileHandler.write("./my-file.txt", "Hello!\n");
        await fileHandler.append("./my-file.txt", "Bye Bye!");
        const content = await fileHandler.read("./my-file.txt");
        console.log(content);
    }
    catch (err) {
        console.error(err);
    }
}

main();
