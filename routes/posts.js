const express = require("express");
const { route } = require("./users");

const router = express.Router();

router.get("/", (req, res) => {

    console.log("This is posts routes");
    res.send("This is posts route")
})

module.exports = router