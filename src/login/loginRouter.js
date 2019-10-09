const express = require('express')
const loginRouter = express.Router()
const bodyParser = express.json()
const logger = require('../logger')
const uuid = require('uuid/v4')

loginRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let { username, password } = req.body
        logger.info(req.body)
        let knexInstance = req.app.get('db')

        let getUsers = async () => {
            return knexInstance
                .select('*')
                .from('users')
                .then(users => {
                    return users
                })
        }

        let findSearchHistory = async (user) => {
            return knexInstance
                .select('*')
                .from('userhistory')
                .where('fkuserid', user.id)
                .then(searchHistory => {
                    return searchHistory
                })
        }
            
        getUsers().then(users => {  
            let user = users.find(user => user.username === username)
            logger.info(user)
            if (user === null) {
                return res.status(400).send({error: `Username not found, please signup`})
            }
            if (!(user.password.toLowerCase() === password.toLowerCase())) {
                return res.status(401).send({error: `Password incorrect`}) 
            }
            return findSearchHistory(user).then(userSearchHistory => {
                let userPackage = { user, userSearchHistory }
                logger.info(userPackage)
                return res.status(200).send(userPackage)
            })   
        })
    })


module.exports = loginRouter