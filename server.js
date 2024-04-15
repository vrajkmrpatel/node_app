require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");
const apiKeyMiddleWare = require("./middlewares/apikey");
const { log } = require("console");

app.set("view engine", "ejs");

// console.log(app.get('view engine'));
// console.log(app.get('views'));

// built in middleware GL0BLE DECLARATION
app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(apiKeyMiddleWare);
app.use(mainRouter);
app.use(productRouter);
// you can add prefix string in router
// app.use("/en",mainRouter);

app.use((req, res, next) => {
  return res.json({ message: "Page not found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log('Error: ',err.message);
    res.status(422).json({ message: err.message});
});

// Listen method
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
