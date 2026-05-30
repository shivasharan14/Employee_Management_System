const express = require('express')

const router = express.Router()

const empController = require('../controllers/empController')

router.get('/getallEmp', empController.getAllEmp)

router.post('/createEmp', empController.createEmp)

router.delete('/deleteEmp/:id', empController.deleteEmp)

router.patch('/patchEmp/:id', empController.patchEmp)
module.exports = router