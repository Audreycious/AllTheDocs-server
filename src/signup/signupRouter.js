const express = require('express')
const signupRouter = express.Router()
const SignupService = require('./signupService')
const bodyParser = express.json()
const logger = require('../logger')
const uuid = require('uuid/v4')

signupRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let { username, password } = req.body
        logger.info(username)
        logger.info(password)
        let knexInstance = req.app.get('db')
        SignupService.getUsers(knexInstance)
            .then(users => {
                logger.info(users)
                let usernameAlreadyExists = !!users.find(user => user.username === username)
                if (usernameAlreadyExists) {
                    logger.error(`returned at first check`)
                    return res.status(400).send({error: `Username already exists`})
                }
                let id = uuid()
                let userInfo = { id, username, password }
                logger.info(userInfo)
                SignupService.insertUser(knexInstance, userInfo)
                    .then(user => {
                        res.status(201).send(user)
                    })
            })
            .catch(next())
    })



module.exports = signupRouter