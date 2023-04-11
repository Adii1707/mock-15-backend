const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Destination: String,
    No_of_travellers: Number,
    Budget_per_person: Number
})

const dataModel = mongoose.model("data", dataSchema);

module.exports = {
    dataModel
}