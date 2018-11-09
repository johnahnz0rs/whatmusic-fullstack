const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    fname: {type: String, trim: true},
    lname: {type: String, trim: true},
    email: {type: String, trim: true},
    spotify: {
        id: {type: String, trim: true},
        display_name: {type: String, trim: true},
        email: {type: String, trim: true},
        image: {type: String},
        spotify_url: {type: String, trim: true},
        favArtists: {type: Array},
        favGenres: {type: Array}
    },
    youtube: {
        id: {type: String, trim: true}
    },
    apple: {
        id: {type: String, trim: true}
    }
}, {timestamps: true});

mongoose.model('User', userSchema);
const User = mongoose.model('User');

module.exports = User;