const express = require("express");
const { connectDb } = require("./utils/db/connectDb");
const { AuthRouter } = require("./router/auth/user.router");
const cors = require('cors')

const app = express();

// Load env vars
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDb();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use("/api/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
