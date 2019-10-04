const express = require('express')
const signupRouter = express.Router()
const SignupService = require('./SignupService')
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

        let getUsers = async () => {
            return knexInstance
                .insert({id: '1', username: 'somename', password: 'password'})
                .into('users')
                .then(() => {
                    return knexInstance
                        .select('*')
                        .from('users')
                        .then(users => {
                            logger.info(users)
                            return users
                        })
                })
            }
        getUsers().then(users => {
            logger.info(users)
            return users
        }).then(users => {
            res.status(201).send(users)
            next()
        })

        
        
        

        // SignupService.getUsers(knexInstance)
        //     .then(users => {
        //         logger.info(users)
        //         let usernameAlreadyExists = !!users.find(user => user.username === username)
        //         if (!!usernameAlreadyExists) {
        //             logger.error(`returned at first check`)
        //             res.status(400).send({error: `Username already exists`})
        //         }
        //         let id = uuid()
        //         let userInfo = { id, username, password }
        //         logger.info(userInfo)
        //         let userArr = SignupService.insertUser(knexInstance, userInfo)
        //             .then((user) => {
        //                 return user
        //             })
        //         res.status(201).send(userArr)
        //         next()
        //     })
        //     .catch(next())

    })



module.exports = signupRouter