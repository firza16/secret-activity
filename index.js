import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const api_url = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(api_url);
    const result = response.data;
    res.render("index.ejs", {
      secret: result.secret,
      user: result.username,
    });
  } catch (error) {
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
