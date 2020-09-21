import express from "express";

const app = express();

const handleHome = (req, res) => res.send("Home");

const handleAboutUs = (req, res) => res.send("About Us");

const handleContact = (req, res) => res.send("Contact");

const handleProtected = (req, res) => res.send("Protected");

const handleMiddleWare = (req, res, next) => {
    console.log("I'm middleware");
    next();
};

const protectedMiddleWare = (req, res) => res.redirect("/");

app.use(handleMiddleWare);

app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);

app.use(protectedMiddleWare);
app.get("/protected", handleProtected);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
