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
    show: () => {},
    update: () => {},
    destroy: () => {}
}