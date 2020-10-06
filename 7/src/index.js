import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
const upload = multer({ dest: "uploads/" });

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.render("home");
});
app.post("/upload", upload.single("txtFile"), (req, res) => {
  const {
    file: { path },
  } = req;
  const data = fs.readFileSync(path, "utf8");
  res.render("uploaded", { data });
});
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
