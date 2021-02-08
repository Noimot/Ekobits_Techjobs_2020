const fs = require("fs");
const request = require("request");
const prompt = require("prompt");

let searchTerm;
let searchResponse;

prompt.start()

prompt.get(["search"], function(err, result){
    if (err){
        console.log(err)
    }
     searchTerm = result.search;
        console.log(`search: ${searchTerm}`)

})

const [, , searchTerm] = process.argv;

request(`https://icanhazdadjoke.com/search?term=${searchTerm}`, function(error, response, body){
    if(!error && response.statusCode == 200){
         searchResponse = console.log(Math.random() * Json.parse(body))
    }
    else {
        console.log(error)
    }
})

fs.writeFileSync("jokes.txt", searchresponse)



