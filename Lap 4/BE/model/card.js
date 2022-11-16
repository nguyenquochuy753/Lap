const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name:{
        type: String
    },
    imgURL:{
        type: String
    }
})

const Card = mongoose.model("Card",cardSchema);

module.exports = Card