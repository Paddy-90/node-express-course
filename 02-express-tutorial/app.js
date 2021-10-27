const express = require("express");
const app = express();
const path = require("path");
const {products} = require("./data");

app.get('/:productId', (req, res)=>{
c
    res.json(newProducts);
})


app.listen(5000, () => {
    console.log("Server läuft");
})