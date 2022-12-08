const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    caption: String,
    user: {
        type:String,
        default:'Huy Nguyễn'
    } , 
    image: String
})

const Post = mongoose.model('Post',postSchema)
module.exports = Post