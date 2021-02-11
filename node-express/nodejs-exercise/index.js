const fs = require("fs");
const request = require("request");
const prompt = require("prompt");



prompt.start()

prompt.get("search", function (err, result) {
    if (err) {
        console.log(err)
    }console.log(result)
    searchTerm = result.search;
    console.log(`search: ${searchTerm}`)

     
    
    request({
        headers:{
            'Accept':'application/json'
        },
        uri:`https://icanhazdadjoke.com/search?term=${searchTerm}`,
        method:'GET'

    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           console.log(response.body)
         
           const results = JSON.parse(response.body).results
            fs.writeFile("jokes-2.txt", JSON.stringify(results), ()=>console.log('done'))

        }
        else {
            console.log("no joke was found for the search term")
        }
    })
    

})





