const
express = require('express'),
app = express(),
port = 3000,
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
logger = require('morgan')

mongoose.connect("mongodb://localhost/users", (err) => {
    console.log(err || "Connected to MongoDB")
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/users', usersRoutes)

app.listen(port, err => {
    console.log(err || `server started on ${port}`)
}) 
