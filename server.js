const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// routes
const itemsRoutes = require("./routes/items")

app.use("/items", itemsRoutes)


app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});