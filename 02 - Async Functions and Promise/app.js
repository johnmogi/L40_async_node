// פונקציה אסינכרונית - פונקציה שאנו לא ממתינים לסיומה
// היא ממתינה למשהו - סיום זמן מסוים, החזרת מידע מהשרת וכדומה
// וברגע שהיגע הרגע - היא ממשיכה לרוץ

// function getRandomNumberFromRemoteServer(successCallback, errorCallback) {
//     // הדמיה כאילו הבאנו מספר רנדומלי משרת מרוחק
//     // setTimeout-בגלל שזה אמור לקחת זמן, אנו משתמשים ב
//     setTimeout(() => {
//         try {
//             const randomNumber = Math.floor(Math.random() * 100);
//             // randomNumber.toFixed(-5); // Crash
//             successCallback(randomNumber);
//         }
//         catch (err) {
//             errorCallback(err);
//         }
//     }, 3000);
// }

// getRandomNumberFromRemoteServer(
//     randomNumber => console.log("Random Number: " + randomNumber),
//     err => console.log("Error: ", err.message));

// console.log("End");

// --------------------------------------------------


function getRandomNumberFromRemoteServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const randomNumber = Math.floor(Math.random() * 100);
                randomNumber.toFixed(-5); // Crash
                resolve(randomNumber);
            }
            catch (err) {
                reject(err);
            }
        }, 3000);
    });
}

getRandomNumberFromRemoteServer()
    .then(randomNumber => console.log("Random Number: " + randomNumber))
    .catch(err => console.log("Error: ", err.message));

console.log("End");