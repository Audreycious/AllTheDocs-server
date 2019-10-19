require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const documentsRouter = require('./documents/documentsRouter')
const signupRouter = require('./signup/signupRouter')
const loginRouter = require('./login/loginRouter')
const usersRouter = require('./users/usersRouter')


const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, AllTheDocs!')
})

app.use('/api/documents', documentsRouter)

app.use('/api/signup', signupRouter)

app.use('/api/login', loginRouter)

app.use('/api/users', usersRouter)

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app