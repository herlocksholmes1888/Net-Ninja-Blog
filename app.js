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
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/blogs/create", (req, res) => {
    res.render("create");
});

// 404
app.use((req, res) => {
    res.status(404).render("404");
});