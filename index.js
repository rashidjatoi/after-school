const express = require("express");
const mongoose = require("mongoose");
const lessonsRout = require("./routes/lessons");

const app = express();
const port = process.env.PORT || 3000;
// middleware to parse json response, request
app.use(express.json());

//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://tawheed:tawheed@cluster0.kda5pz8.mongodb.net/afterschool?retryWrites=true&w=majority";

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(lessonsRout);
app.get("/", (req, res) => {
  res.json({
    Status: 200,
  });
});

app.listen(port, () => {
  console.log(`Backend is working  ${port}`);
});
