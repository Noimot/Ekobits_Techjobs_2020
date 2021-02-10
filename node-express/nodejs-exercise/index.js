const fs = require("fs");
const request = require("request");
const prompt = require("prompt");

let searchTerm;
let searchResponse;

prompt.start()

prompt.get("search", function (err, result) {
    if (err) {
        console.log(err)
    }
    searchTerm = result.search;
    console.log(`search: ${searchTerm}`)

})

// let a, b;
// [a, b, searchTerm] = process.argv;

let randonSearch = (Math.floor(Math.random() * 5))
// request(`https://icanhazdadjoke.com/search?term=${searchTerm}`, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         searchResponse = console.log(Math.florr(Math.random() * response.body)
//         console.log(searchResponse)
//     }
//     else {
//         console.log("no joke was found for the search item")
//     }
// })

// fs.writeFile("jokes.txt", function (err) {
//     console.log(searchResponse)
// })



