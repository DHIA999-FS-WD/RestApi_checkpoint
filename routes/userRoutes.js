const express = require("express");
const router = express.Router();

router
  //   GET :  RETURN ALL USERS
  .get("/", (req, res) => {
    console.log("get all users");
    User.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).send("404");
      });
  })
  //   POST :  ADD A NEW USER TO THE DATABASE
  .post("/add", async (req, res) => {
    console.log(" ADD A NEW USER TO THE DATABASE", req.body);
    let newUser = await User(req.body);
    User.create(newUser);
    User.find()
      .then((data) => {
        //   res.status(200).json(data);
        res.status(200).send("user added");
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send("404");
      });
  })
  //    PUT : EDIT A USER BY ID
  .put("/update/:_id", async (req, res) => {
    console.log("EDIT A USER BY ID ", req.params);
    let data = await User.updateOne(req.params, { $set: req.body });
    console.log("you will update the :", req.body);
    res.status(200).send(data);
  })
  //       DELETE : REMOVE A USER BY ID
  .delete("/delete/:_id", async (req, res) => {
    console.log("REMOVE A USER BY ID ", req.params);
    let data = await User.deleteOne(req.params);
    res.status(200).send(data);
  });

module.exports = router;
