const mongoose = require("mongoose");
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
