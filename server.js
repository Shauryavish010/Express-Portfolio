const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Set up EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (like images and CSS)
app.use(express.static("IMG"));

// Home Page
app.get("/", (req, res) => {
    res.render("index", { name: "Shaurya Vishwakarma", image: "C:/Users/LENOVO/OneDrive/Desktop/MINE/Portfolio/Express-Portfolio/IMG/image/profile.jpg" });
});

// Skills Page
app.get("/skills", (req, res) => {
    const skills = ["JavaScript", "Node.js", "Express.js", "Python", "ML"];
    res.render("skills", { skills });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
