const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)

// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);

// example done by the programmer

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//
// challange: work with JSON and the file Systaem
//
//1. Load and parse the JSOn date
//2. change the name and age property using your info
//3. chnage the name and age in node js property
//4. changes in the json file system



const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "mujeeb";
user.age = 54;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

// console.log(data.name, data.age);
