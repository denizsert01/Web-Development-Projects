import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})


app.get("/contact", (req, res) => {
    res.send("<h1>contact me</h1><p>Phone : +44123456789</p>");
})


app.get("/about", (req, res) => {
    res.send("<p>I am a web developer!</p>");
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})