const express = require('express')
const signupRouter = express.Router()
const bodyParser = express.json()
const logger = require('../logger')
const uuid = require('uuid/v4')

signupRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let { id, username, password } = req.body
        logger.info(req.body)
        let knexInstance = req.app.get('db')
        if (!id) {
            id = uuid()
        }
        let getUsers = async () => {
            return knexInstance
                .select('*')
                .from('users')
                .then(users => {
                    return users
                })
        }
            
        getUsers().then(users => {   
            let usernameAlreadyExists = users.find(user => user.username === username)
            if (!!usernameAlreadyExists !== false) {
                logger.error(usernameAlreadyExists)
                return res.status(400).send({error: `Username already exists`})
            }
            if (!id) {
                id = uuid()
            }
            let userInfo = { id, username, password }
            return knexInstance
                .insert(userInfo)
                .into('users')
                .returning('*')
                .then(user => {
                    return res.status(201).send(user)
                })       
        })
    })

module.exports = signupRouter
