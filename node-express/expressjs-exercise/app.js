const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const shoppingRoutes = require("./routes")

app.use(bodyParser.json());
app.use("/shoppingList", shoppingRoutes);

app.get("/", (req, res) => {
    return res.json("Start with /shoppingList")
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})