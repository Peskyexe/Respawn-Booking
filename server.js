const express = require("express");
const app = express();
const path = require('path');
const { readFile } = require("fs").promises;

app.use(express.static(path.join(__dirname, "public")));
app.use('/assets', express.static(path.join(__dirname, "assets")));

app.get("/", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "home.html"), "utf8"));
});

app.get("/booking", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "booking.html"), "utf8"));
});

app.get("/booking/takk", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "takk.html"), "utf8"));
});

app.get("/info", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "info.html"), "utf8"));
});

app.get("/kontakt-oss", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "kontakt.html"), "utf8"));
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on http://localhost:3000/booking. To stop the server, press Ctrl + C");
});
