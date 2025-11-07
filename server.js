const express = require("express");
const app = express();
const { readFile } = require("fs").promises;

// app.get("/", (request, response) => {
//     readFile("./public/booking.html", "utf8", (error, html) => {
//         if (error) {
//             response.status(500).send("A server error occurred")
//         }
//         response.send(html);
//     })
// });

app.get("/", async (request, response) => {
    response.send( await readFile("./public/booking.html", "utf8") );
});

app.listen(process.env.PORT || 3000, () => console.log("Server running on http://localhost:3000. To stop the server, press Ctrl + C"))
