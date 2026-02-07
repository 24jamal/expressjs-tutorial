const express = require('express')
const router = express.Router()


router.use(userlogger) // this makes global for this router . So method which uses this router calls the userLogger

router.get("/", (req, res) => {

    const query_parameter = req.query.name;
    console.log(query_parameter);
    res.send("Users list");
})


router.get("/new", (req, res) => {

    res.render("users/new.ejs")

})


router.post("/", (req, res) => {
    const isValid = true;

    if (isValid) {
        users.push({ firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        console.log("Error");
        res.render("users/new.ejs", { firstName: req.body.firstName });
    }

    console.log(req.body.firstName);
})

router
    .route("/:id")
    .get((req, res) => {
        const id = req.params.id;
        console.log("params:", req.params);
        console.log("query:", req.query);
        console.log("body:", req.body);
        console.log("headers:", req.headers);
        console.log("method:", req.method);
        console.log("url:", req.url);
        console.log(`User Id ${req.user}`)

        res.send(`<h2>Welcome ${id} </h2>`);
    })
    .put((req, res) => {
        const id = req.params.id;
        console.log(`User ${id} is updated`)
        res.send(`User ${id} is updated succesfully`)
    })
    .patch((req, res) => {
        const id = req.params.id;
        console.log("User  is partially updates")
        res.send(`User ${id} is partially updated succesfully`)

    })
    .delete((req, res) => {
        const id = req.params.id;
        console.log("User is deleted")
        res.send(`User ${id} is deleted succesfully`)
    })

const users = [{ name: "Jamal" }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {

    console.log(`Advanced Routing Function with param id: ${id}`);
    const userId = Number(id);
    req.user = users[userId];
    const account = req.user
    console.log(`User Account ${JSON.stringify(account)}`);

    next() //this routes to corresponding function
})

function userlogger(req, res, next) {
    const url = req.originalUrl;
    console.log(` USER Route URL :: ${url}`);
    console.log("This is postlogger for logs")
    next()
}



module.exports = router