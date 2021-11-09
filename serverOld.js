const express = require ("express");

const server = express();

server.listen(3000, () => {
    console.log("server running on port 3000");
});

server.get("/home", (req, res) => {
    res.send("we are home");
});
server.get("/about", (req, res) => {
    res.send("we are in about");
});
server.use((req, res) => {
    res.send("404 error");
});