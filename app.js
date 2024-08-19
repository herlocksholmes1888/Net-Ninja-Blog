const express = require("express");

const app = express();
const port = 3000;

// View Engine 
app.set("view engine", "ejs");

// Port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// GET Requests
app.get("/", (req, res) => {
    const blogs = [
        { title: "Top 10 Reasons Why Sonic is Sorry", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Eggman's Callout Post", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Shadow the Hedgehog Seen at Hot Topic", snippet: "Lorem ipsum dolor sit amet consectetur" },
    ];

    res.render("index", { home: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { about: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { create: "Create" });
});

// 404
app.use((req, res) => {
    res.status(404).render("404"), { error: "404" };
});