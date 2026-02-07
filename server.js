const express = require('express')

const app = express()

app.set("View engine", "ejs")

app.get("/", (req, res) => {

    console.log("THis is check");
    res.render("index.ejs", { text: "Earth" })

})

app.get("/download", (req, res) => {

    console.log("Downloading a file..")
    res.download("server.js")
})

const userRouter = require("./routes/users.js");
const postRouter = require("./routes/posts.js")


app.use("/users", userRouter);
app.use("/posts/", postRouter);
app.listen(3000);
