const express = require("express");
const { get } = require("http");
const { dirname } = require("path");
const app = express();
const path = require("path");
const publicFolderPath = path.resolve(__dirname, '../Public')
app.use(express.static(publicFolderPath))

const port = process.env.PORT || 3000;
app.listen(port, console.log("Servidor corriendo en el puerto " + port))
let home = path.resolve(__dirname, "./Views/home.html")
app.get("/", (req, res) => {
    res.sendFile(home)
})

let registro = path.resolve(__dirname, "./Views/register.html")
app.get("/register.html", (req, res) => {
    res.sendFile(registro)
})
let login = path.resolve(__dirname, "./Views/login.html")
app.get("/login.html", (req, res) => {
    res.sendFile(login)
})


