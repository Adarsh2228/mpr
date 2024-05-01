// // // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const User=require("./models/User")

// mongoose.connect('mongodb+srv://root:toor@cluster0.uwtbgia.mongodb.net/ecom', {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// })
// .then(() => {
// console.log('Connected to MongoDB');
// })
// .catch((error) => {
// console.error('Error connecting to MongoDB:', error);
// });

// const session = require("express-session");
// //config/objects used in sessions
// const sessionConfig = {
// secret: "thisisshiuldbeabettersecret!",
// resave: false,
// saveUninitialized: true,
// cookie: {
// //by default rahta then to
// httpOnly: true,
// //expiration dates
// expires: Date.now() + 10000 * 60 * 60 * 24 * 7,
// maxAge: 1000 * 60 * 60 * 24 * 7,
// },
// };
// app.use(express.json());
// app.use(cors());
// const passport = require("passport");
// const LocalStragery = require("passport-local");
// //to use sessions
// app.use(session(sessionConfig));
// //to use passport
// app.use(passport.initialize());
// app.use(passport.session());
// //hash kar dega password using 'PBKDf2' algorithm
// passport.use(new LocalStragery(User.authenticate()));
// //to store in sessions
// passport.serializeUser(User.serializeUser());
// //to remove from session while logout
// passport.deserializeUser(User.deserializeUser());

// const user_routes = require("./routes/User");
// app.use("/api/user", user_routes);

// // Require and use the api.js file
// const api_routes = require("./api");
// app.use("/api", api_routes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
// console.log(`Server is running on port ${PORT}`);
// });

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User=require("./models/User")

mongoose.connect('mongodb+srv://root:toor@cluster0.uwtbgia.mongodb.net/ecom', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
console.log('Connected to MongoDB');
})
.catch((error) => {
console.error('Error connecting to MongoDB:', error);
});

const session = require("express-session");
//config/objects used in sessions
const sessionConfig = {
secret: "thisisshiuldbeabettersecret!",
resave: false,
saveUninitialized: true,
cookie: {
//by default rahta then to
httpOnly: true,
//expiration dates
expires: Date.now() + 10000 * 60 * 60 * 24 * 7,
maxAge: 1000 * 60 * 60 * 24 * 7,
},
};
app.use(express.json());
app.use(cors());
const passport = require("passport");
const LocalStragery = require("passport-local");
//to use sessions
app.use(session(sessionConfig));
//to use passport
app.use(passport.initialize());
app.use(passport.session());
//hash kar dega password using 'PBKDf2' algorithm
passport.use(new LocalStragery(User.authenticate()));
//to store in sessions
passport.serializeUser(User.serializeUser());
//to remove from session while logout
passport.deserializeUser(User.deserializeUser());

const user_routes = require("./routes/User");
app.use("/api/user", user_routes);

// Require and use the api.js file
const api_routes = require("./api");
app.use("/api", api_routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});