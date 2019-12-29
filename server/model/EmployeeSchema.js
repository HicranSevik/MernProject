const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: String,
        unique: false,
        index: true
    },
    email: {
        type: String,
        required: [true, "Email girilmesi zorunludur."],
        unique: true,
        index: true
    },
    age: {
        type: Number,
        require: [true, "yaş girmediniz."]
    },
    mobile: {
        type: String,
        unique: true
    }
});

//node.js de document==> row( sql'de)

module.exports = mongoose.model("Employee", EmployeeSchema);