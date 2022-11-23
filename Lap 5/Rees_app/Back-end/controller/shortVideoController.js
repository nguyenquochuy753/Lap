const shortVideoModel = require('../models/shortVideo')

const shortVideoController = {
    readShortVideo: async(req , res)=>{
        try {
            const shortVideos = await shortVideoModel.find({}); 
            res.status(200).json(shortVideos); 
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = shortVideoController