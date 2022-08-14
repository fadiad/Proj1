const express = require('express')
const router = express.Router()

const Teacher = require("../models/Teacher")
const Shift = require("../models/Shift")
const Children = require("../models/Children")


// get teacher by name or id number
router.get('/teacher', function (req, res) {

    let filters = {}
    if (req.query.idNum != undefined)
        filters["idNum"] = req.query.idNum

    if (req.query.name != undefined)
        filters["name"] = req.query.name

    Teacher.find(filters).populate('shifts').exec(function (err, teacher) {
        res.send(teacher)
    })
})

// add teacher  
router.post('/teacher', async function (req, res) {
    let teacher = new Teacher({
        "idNum": req.body.idNum,
        "name": req.body.name,
        "phone": req.body.phone,
        "secondaryPhone": req.body.secondaryPhone,
        "accountNum": req.body.accountNum,
        "pictures": req.body.pictures,
        "address": req.body.address,
        "additions": req.body.additions,
    })
    await teacher.save()

    res.send("done")
})

module.exports = router