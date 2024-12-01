const express = require("express");
const app = express();
const db = require('./config/db');

const userRoutes = require("./routes/User");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
db.connect();

//middlewares

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );
app.use(express.json());

//routes
app.use("/api/v1/auth", userRoutes);


//def route


app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});