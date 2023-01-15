"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    mongoose_1.default.set('strictQuery', true);
    await mongoose_1.default.connect('mongodb+srv://Motayeh:12Mat21*m@epicure.ra93z6j.mongodb.net/?retryWrites=true&w=majority');
};
exports.connectDb = connectDb;
