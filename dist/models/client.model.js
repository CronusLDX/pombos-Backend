"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const ClientSchema = new mongoose_1.Schema({
    _id: { type: String, default: () => uuidv4() },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    letterSend: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true });
const clientModel = (0, mongoose_1.model)('Client', ClientSchema);
module.exports = clientModel;
