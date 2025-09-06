// console.log("start of server.js");

const express = require("express");

const app   = express();

app.use("/test",(require, res) => {
    res.send("Hello from server")
})
app.use("/hello",(require, res) => {
    res.send(" page hello from server")
})
app.listen(3000, () => {
    console.log("server start on port 3000");
});