const myApp = require("express");
const User = require("./Schema");
const Signup = require("./User_Signup");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let jsonwebtoken = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const app = myApp();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

///Mongodb connecetion
mongoose.connect("mongodb://127.0.0.1:27017/final_project", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("databse is  connected");
});

// add activity router
app.post("/addActivity/:id", (req, res) => {
  // await User.create(req.body);
  let addactivity = new User({
    // ...req.body,
    name: req.body.name,
    activity: req.body.activity,
    weight: req.body.weight,
    minutes: req.body.minutes,
    date: req.body.date,
    discription: req.body.discription,
    user_id: req.params.id,
  });
  addactivity.save();
  res.json(addactivity);
  //console.log(req.body);
  //res.json("signup chal gya ");
});

///getactivity data router
app.get("/get_users/:id", async (req, res) => {
  // console.log("Log", req.params.id);
  try {
    let users = await User.find({ user_id: req.params.id });
    res.send(users);
    // console.log(users);
    // return res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
// app.get("/get_users", async (req, res) => {
//   // console.log("Log", req.params.id);
//   let users = await User.find();
//   try {
//     return res.status(200).json(users);
//     // res.json(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

/// update activity router
app.get("/edit/:id", async (req, res) => {
  let users = await User.findById(req.params.id);
  try {
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.put("/update/:id", async (req, res) => {
  await User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body });
  res.json("ho gya");
});

/// delete activity

app.delete("/delteActivity/:id", async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id });
  res.json("success fully delete");
});
// signup router
app.post("/signup", async (req, res) => {
  //const haspassword = await bcrypt.hash(req.body.password, 8);
  const usercheck = await Signup(
    req.body
    // name:req.body.name,
    // email:req.body.email,
    // password:req.body.password,
    // password_confirmation:req.body
    //// password:haspassword,
  );
  const getEmail = await Signup.findOne({ email: usercheck.email });
  if (getEmail) {
    //res.send({ messege: "Email Already Exists" });
    res.json("Email Already Exists");
  } else {
    // req.session.usercheck = getEmail;
    // await Signup.create(req.body);
    usercheck.save();
    res.json(usercheck);
  }
});
/// login router
// app.post("/login", async (req, res) => {
//   try {
//     let check = await Signup.findOne({
//       email: req.body.email,
//       password: req.body.password,
//     });
//     // console.log(check);
//     if (check) {
//       res.json("exist");
//      //res.status(200).json(...check);
//       //   req.session = check;
//     } else {
//       res.json("notexist");
//     }

//   } catch (e) {
//     res.json("notexist");
//   }
// });
app.post("/login", async (req, res) => {
  const findUser = await Signup.find({
    email: req.body.email,
    password: req.body.password,
  });
  if (findUser.length !== 0) {
    try {
      const user = await Signup.find({
        email: req.body.email,
        ///new adding
        password: req.body.password,
      });
      return res.status(200).json(...user);
      // return res.status(200);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("user does not exist");
    return res.status(400).json({ message: "user does not exist" });
  }
});
app.listen(7080, () => {
  console.log("success");
});
