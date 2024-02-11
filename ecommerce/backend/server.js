// server.js
const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");
global.__basedir = __dirname;
const userRouter = require("./routes/user_r");
const adminRouter = require("./routes/admin_r");
const fileController = require("./controllers/file_c");
const cartRouter = require("./routes/cart_r");

mongoose.connect("mongodb://127.0.0.1:27017/POOJA");

mongoose.connection.on("connected", () => {
  console.log("DB connected");
});

mongoose.connection.on("error", (error) => {
  console.error("Error connecting to DB:", error);
});

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);
app.use(cartRouter);
app.use(fileController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
