"use strict";
const Mongoose = require('mongoose');
const { v4: uuid } = require('uuid');
const userSchema = new Mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid(),
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
const userModel = Mongoose.model('User', userSchema);
module.exports = userModel;
