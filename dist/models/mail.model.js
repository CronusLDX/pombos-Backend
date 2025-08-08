"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const MailSchema = new mongoose_1.Schema({
    _id: { type: String, default: () => uuidv4() },
    title: { type: String, required: true },
    address: { type: String, required: true },
    destination: { type: String, required: true },
    remitter: { type: String, required: true },
    pidgey: { type: String, required: true },
    status: { type: String, required: true },
    content: { type: String, required: true },
}, { timestamps: true });
const mailModel = (0, mongoose_1.model)('Mail', MailSchema);
module.exports = mailModel;
