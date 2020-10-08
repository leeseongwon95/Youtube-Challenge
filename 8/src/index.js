import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  let {
    query: { url },
  } = req;

  if (url) {
    if (!url.match(/^http/)) {
      url = `http://${url}`;
    }

    request(url, (error, response, body) => {
      if (response && response.statusCode <= 445) {
        res.send("Up!");
      } else if (!response) {
        res.send("Down");
      }
    });
  } else {
    res.send("");
  }
});

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
