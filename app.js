const express = require("express");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile("./views/test.html", { root: __dirname });
});

app.get("/test", (req, res) => {
    res.redirect("/");
});

app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});