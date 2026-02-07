const express = require('express')

const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//logger is mentioned inside the function as param to call middleware individually instead of make middle ware as global to app
app.get("/", logger, (req, res) => {

    console.log("THis is check");
    res.render("index.ejs", { text: "Earth" })

})

app.get("/download", (req, res) => {

    console.log("Downloading a file..")
    res.download("server.js")
})

const userRouter = require("./routes/users.js");
const postRouter = require("./routes/posts.js")

function logger(req, res, next) {

    console.log(`Original URL :: ${req.originalUrl}`);
    next();
}

app.use("/users", userRouter);
app.use("/posts/", postRouter);
app.listen(3000);
