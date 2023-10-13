const express = require("express");
const app = express();
require("dotenv").config();
// i import the PORT from the dotenv file
const PORT = process.env.PORT || 4000;

const connectDB = require("./config/db");
connectDB();
const User = require("./models/User");
const userRouter = require("./routes/userRoutes");

//                              i start by creacte 3 document of users
// User.create([
//   { firstName: "bouzaiene", lastName: "dhia", age: 22 },
//   { firstName: "mohamed", lastName: "louay", age: 21 },
//   { firstName: "omrani", lastName: "iheb", age: 20 },
// ])
//   .then((user) => {
//     console.log("users created", users);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//middleware
app.use(express.json());
// i make all users route in separate page '/routes/userRoutes.js'
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server run on port : ${PORT}`);
});
