const express = require('express')
const app = express()
const port = 4600

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sjmoon:sjmoon1234@bolierplate.l7qii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))