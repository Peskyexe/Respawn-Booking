const express = require("express");
const app = express();
const path = require('path');
const { readFile, writeFile } = require("fs").promises;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/assets', express.static(path.join(__dirname, "assets")));

let formSubmitted = false;

app.get("/", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "home.html"), "utf8"));
});

app.get("/booking", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "booking.html"), "utf8"));
});

app.get("/booking/takk", async (request, response) => {
    // if (!formSubmitted) {
    //     return response.redirect("/booking");
    // }
    // formSubmitted = false;
    response.send( await readFile(path.join(__dirname, "public", "takk.html"), "utf8"));
});

// Dette her var Co Pilot [
app.post("/booking/submit", async (request, response) => {
    try {
        const bookingData = request.body;
        
        // Read existing bookings
        let bookings = [];
        try {
            const fileContent = await readFile(path.join(__dirname, "bestillinger.json"), "utf8");
            bookings = JSON.parse(fileContent);
        } catch (error) {
            // File doesn't exist or is empty, start with empty array
            bookings = [];
        }
        
        // Add new booking
        bookings.push(bookingData);
        
        // Save to file
        await writeFile(path.join(__dirname, "bestillinger.json"), JSON.stringify(bookings, null, 2), "utf8");
        
        // Set flag to allow access to thank you page
        formSubmitted = true;
        
        response.json({ success: true });
    } catch (error) {
        console.error("Error saving booking:", error);
        response.status(500).json({ success: false, error: error.message });
    }
});
// ]

app.get("/info", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "info.html"), "utf8"));
});

app.get("/kontakt-oss", async (request, response) => {
    response.send( await readFile(path.join(__dirname, "public", "kontakt.html"), "utf8"));
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on http://localhost:3000/booking. To stop the server, press Ctrl + C");
});
