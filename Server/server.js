const express = require("express");
const cors = require("cors");
//const cookieSession = require("cookie-session");
const app = express();
const db = require("./app/models");
//const Role = db.role;

db.mongoose

  .connect(db.url, {

    useNewUrlParser: true,

    useUnifiedTopology: true

  })

  .then(() => {

    console.log("Connected to the database!");

  })

  .catch(err => {

    console.log("Cannot connect to the database!", err);

    process.exit();

  });


var corsOptions = {

  origin: ["http://localhost:4200"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(
  //cookieSession({
  //name: "Ben-session",
  //secret: "COOKIE_SECRET", // should use as secret environment variable
  //httpOnly: true
  //}));
app.get("/", (req, res) => {

  res.json({ message: "Welcome to The Spider Web Dev." });

});

//require('./app/routes/auth.routes')(app);
//require('./app/routes/user.routes')(app);
require("./app/routes/contact.routes")(app);
require("./app/routes/type.routes")(app);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}.`);

});