const
    mongoose = require('mongoose'),
        userSchema = new mongoose.Schema({
            name:{type: String, required: true},
            zodiac: {type: String},
            age:{type: Number}
        }, {timestamps: true})
    module.exports = mongoose.model('User', userSchema)