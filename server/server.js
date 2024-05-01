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
const stripe = require('stripe')('sk_test_51NkUQgSDWmLXZZwiNowpbbX5exLS6gIuIZdapQScxxocrSziQ4W8hEtkCfzLgpSmA7qshnIULDEZCDUAHSkNd7Bj00JSVyq3uJ');
const nodemailer = require('nodemailer');




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



// Nodemailer configuration
const mailTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      user: "shiroshetty30@gmail.com", // Update with your email address
      pass: "ibaymoahwvqddpty" // Update with your email password
  }
});

// Endpoint to process payments
app.post('/api/payment', async (req, res) => {
  const { amount, reason} = req.body; // Extract userEmail from request body
  console.log(amount, reason);

  try {
      // Create a PaymentIntent with the amount
      const paymentIntent = await stripe.paymentIntents.create({
          amount: amount * 100, // Stripe expects amount in cents
          currency: 'usd', // Specify currency
          description: reason,
          // Provide a description (optional)
      });

      // Send payment success email to user
      const mailOptionsPaymentSuccess = {
          from: 'shiroshetty30@gmail.com', // Sender address
          to: 'shuklaadarsh2228@gmail.com', // User's email address
          subject: 'Payment Successful',
          text: `Dear User,\n\nYour payment of ${amount} USD has been successfully processed. Thank you for your payment.\n\n ENJOY YOUR SHOPPING!!!!`
      };

      // Send payment success email
      mailTransporter.sendMail(mailOptionsPaymentSuccess, (error, info) => {
          if (error) {
              console.error('Error sending payment success email:', error);
          } else {
              console.log('Payment success email sent: %s', info.messageId);
          }
      });

      // Return the client secret to the frontend
      res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
      console.error('Error processing payment:', error.message);
      res.status(500).json({ error: error.message });
  }
});

// Start the server
// app.listen(port, () => {
//   console.log(Server is running on http://localhost:${port});
// });