const express = require("express");

const app = express();
const port = 3000;

// View Engine 
app.set("view engine", "ejs");

// Port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use((req, res, next) => {
    console.log("New request made: ");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    // next() makes it so that Express moves on after
    // the middleware is called
    next();
});

// GET Requests
app.get("/", (req, res) => {
    const blogs = [
        { title: "Top 10 Reasons Why Sonic is Sorry", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Eggman's Callout Post", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Shadow the Hedgehog Seen at Hot Topic", snippet: "Lorem ipsum dolor sit amet consectetur" }
    ];

    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "New Blog" });
});

// 404
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});