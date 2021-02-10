const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const shoppingRoutes = require("./routes")

app.use(bodyParser.json());
app.use(shoppingRoutes);

app.get("/", (req, res) => {
    return res.json("Start with /shopping List")
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})