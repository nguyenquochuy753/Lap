const mongoose = require('mongoose')

const shortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description:String,
    song:String,
    likes:String,
    shares:String,
    messages:String
})

const shortVideo = mongoose.model('ShortVideo',shortVideoSchema);
module.exports = shortVideo;