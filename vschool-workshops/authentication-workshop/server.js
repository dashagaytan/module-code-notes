const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
// const {expressjwt} = require('express-jwn')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, (err) => console.log('Connected to DB', err))

app.use('/auth', require('./routes/authRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(9000, () => {
    console.log(`Server is running on port 9000`)
})