const express = require('express')
const signupRouter = express.Router()
const bodyParser = express.json()
const uuid = require('uuid/v4')

signupRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let { id, username, password } = req.body
        let knexInstance = req.app.get('db')
        // get all users to search through for duplicate username
        let getUsers = async () => {
            return knexInstance
                .select('*')
                .from('users')
                .then(users => {
                    return users
                })
        }
            
        getUsers().then(users => {   
            // find if the username already exists in users and error if it does
            let usernameAlreadyExists = users.find(user => user.username === username)
            if (!!usernameAlreadyExists !== false) {
                return res.status(400).send({error: `Username already exists`})
            }
            // add id to the users obj
            if (!id) {
                id = uuid()
            }
            // if not, insert userInfo into the database
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
