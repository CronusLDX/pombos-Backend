"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const PidgeySchema = new mongoose_1.Schema({
    _id: { type: String, default: () => uuidv4() },
    picture: { type: String, required: true },
    nickname: { type: String, required: true },
    averageSpeed: { type: Number, required: true },
    status: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    letterDelivered: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true });
const pidgeyModel = (0, mongoose_1.model)('Pidgey', PidgeySchema);
module.exports = pidgeyModel;
