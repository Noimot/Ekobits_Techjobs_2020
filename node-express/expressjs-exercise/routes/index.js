const express = require("express");

const router = express.Router();

let shoppingList = ["Clothes", "Shoes", "Handbag", "Headscarf"];
var item = 0;

router
.route("/")
.get((req, res) => {
    return res.json(shoppingList)
})
.post((req, res) => {
    shoppingList.push(req.body.item)
    return res.json({message: "Created"})
});

router
.route("/:item")
.get((req, res) => {
    const listItem = shoppingList.find(val => val === Number(req.params.item))
    return res.json(listItem)
})
.patch((req, res) => {
    const listItem = shoppingList.find(val => val === Number(req.params.item))
    listItem.item = req.body.item;
    return res.json({ message: "updated"})
})
.delete((req, res) => {
    const listIndex = shoppingList.findIndex(val => val === Number(req.params.item))
    shoppingList.splice(listIndex, 1);
    return res.json({ message: "Deleted"})
});

module.exports = router;