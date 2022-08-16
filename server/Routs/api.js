const express = require('express')
const router = express.Router()

const Teacher = require("../models/Teacher")
const Shift = require("../models/Shift")
const Children = require("../models/Children")


router.get('/childrens', function (req, res) {
    Children.find({}, function (err, children) {
        res.send(children)
    })
})

router.get('/child', function (req, res) {
    Children.find({ "idNum": req.query.id }, function (err, child) {
        res.send(child)
    })
})

router.post('/children', async function (req, res) {
    let child = new Children({
        "idNum": req.body.idNum,
        "name": req.body.name,
        "Fname": req.body.Fname,
        "Mname": req.body.Mname,
        "Fnumber": req.body.Fphone,
        "Mnumber": req.body.MPhone,
        "birthdate": req.body.BD
    })
    await child.save()
    Children.find({}, function (err, children) {
        res.send(children)
    })
})

router.delete('/child/:id', function (req, res) {
    let id = req.params.id

    Children.deleteOne({ _id: id })
        .exec((err, success) => {
            res.send("result")
        })
})
















// ==============Teacher=================
router.get('/teachers', function (req, res) {
    Teacher.find({}, function (err, Teachers) {
        res.send(Teachers)
    })
})


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

    Teacher.find({}, function (err, Teachers) {
        res.send(Teachers)
    })
})

router.post('/shift', async function (req, res) {
    let shift = new Shift({
        "start": req.body.start,
        "end": req.body.end,
        "date": req.body.date,
        "total": req.body.total,
    })
    await shift.save()
    await Teacher.findByIdAndUpdate(req.body.id, { $push: { shift: shift } }).exec()
    res.send("done")
})


router.get('/shift', function (req, res) {
    Teacher.find({ "_id": req.query.id }).populate('shift').exec(function (err, teacher) {
        res.send(teacher)
    })
})


module.exports = router