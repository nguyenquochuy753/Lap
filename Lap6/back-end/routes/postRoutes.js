const postController = require('../controller/postController')
const router = require('express').Router()
const upload = require('../controller/upload')

router.get('/get',postController.get)
router.post('/add',upload.single('image'),postController.add)

module.exports = router