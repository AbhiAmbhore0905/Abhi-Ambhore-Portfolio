const mongoose = require("mongoose")

module.exports = mongoose.model("notification", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}))