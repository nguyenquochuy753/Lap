const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CardModel = require("./model/card")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://huy:123456h@cluster0.vkpegkj.mongodb.net/carddatabase19?retryWrites=true&w=majority',()=>{
    console.log("DB connected");
})

app.post('insert' , async(req , res)=>{
    const card = new CardModel({ name: 'Pug', imgURL:'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRQRq57PPBe58-ycmLASoiCsF00B4X6_7NpwIwOqpLektRueBEzllFVcQMlBwAg__vruHUaFSCuHVd3Yr0' });
    try {
        await card.save();
    } catch (error) {
        console.log(error);
    }
})

app.get('/read',async(req , res)=>{
    CardModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
})

app.listen(3001,()=>{
    console.log("Server running on port 3001")
})
