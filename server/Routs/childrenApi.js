const express = require('express')
const router = express.Router()
const Children = require('../models/Children')

router.post('/children', function (request, response) {
    let data = request.body
    let result = {}
    let newChild = new Children({
        idNum : data.idNum,
        name: data.name,
        parentsNames: data.parentsNames,
        parentPhoneNum:{
        parentType:data.parentType,
        PhoneNum:data.PhoneNum,
        },
        parentSecondaryPhoneNum:data.parentSecondaryPhoneNum,
        birthdate:data.birthdate,
        additions:data.additions
    })
    const savePromise = newChild.save()
    savePromise.then(saved => {
    }).catch(err => {
        console.log(err)
    })
    result.code = 201
    result.message = "The data inserted successfuly"
    response.send(result)
})

router.get('/transactions', function (req, res) {
    Transactions.find({}).exec(function (err, transactions) {
        res.send(transactions)
    })
})

router.delete('/transactions/:id', function (req, res) {
    let { id } = req.params
    let result = {}
    Transactions.deleteOne({ _id: id })
        .exec((err, success) => {
            if (success === null) {
                result.code = 404
                result.message ="Not found"
                res.send(result)
            } 
            else {
                result.code = 200
                result.message ="Deleted successfuly"
                res.send(result)
            }
        })
})

router.get('/transactions/categories', function (req, res) {
    const aggregate = [
        {
            "$group": {
                "_id": "$category",
                "total": {
                    "$sum": "$amount"
                }
            }
        }
    ]
    Transactions.aggregate(aggregate)
        .exec(function (err, result) {
            if (err) {
                console.log(err)
                return;
            }
            res.send(result)
        });
})

module.exports = router
