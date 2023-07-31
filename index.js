import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date();
   const day = d.getDay();
   console.log(day);
   let type = "a weekday";
  let adv = "it's time to work hard";
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }
    res.render("index.ejs",{daytype:type, advice: adv});
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });