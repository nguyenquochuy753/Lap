const postModel = require('../models/post')

const postController = {
    get: async(req , res)=>{
        try {
            const posts = await postModel.find({}) 
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    add: async(req , res)=>{
        try {
            const post = new postModel({
                caption:req.body.caption,
            })
            if(req.file)
            {
                post.image=req.file.path
            }
            await post.save()
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = postController