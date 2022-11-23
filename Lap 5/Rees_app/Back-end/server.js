const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const shortVideoRoutes = require('./routes/shortVideo')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://huy:123456h@cluster0.vkpegkj.mongodb.net/carddatabase19?retryWrites=true&w=majority',()=>{
    console.log('DB Connected');
})

app.use('/v1/shortVideo',shortVideoRoutes);

app.listen(8000,()=>{
    console.log('Server running on port 8000');
})