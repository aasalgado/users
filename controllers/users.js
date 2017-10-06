const
    User = require('../models/User.js')

module.exports = {
    index: (req,res) => {
        User.find({}, (err, users) => {
            if (err) return console.log(err)
            res.json(users)
        })
    },
    create: (req,res) => {
        var newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return console.log(err)
            res.json({message: `New user named ${req.body.name} was created`, success: true, })
        })
    },
    show: (req,res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) return console.log(err)
            res.json(user)
        })
    },
    update: (req,res) => {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,user) => {
            res.json(user)
        })
    },
    destroy: (req,res) => {
        User.findByIdAndRemove(req.params.id, (err) => {
            if (err) return console.log(err)
            res.json({message: `User was deleted`, success: true})
        })
    }
}