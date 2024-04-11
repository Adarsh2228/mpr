// require mongoose
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

// schema with email, username, password, and role fields
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// plug in username and password
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);
module.exports = User;