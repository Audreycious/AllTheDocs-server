const express = require('express')
const loginRouter = express.Router()
const bodyParser = express.json()
const logger = require('../logger')


loginRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let { username, password } = req.body
        let knexInstance = req.app.get('db')

        let getUsers = async () => {
            return knexInstance
                .select('*')
                .from('users')
                .then(users => {
                    return users
                })
        }
            
        getUsers().then(users => {  
            let user = users.find(user => user.username === username)
            logger.info(user)
            if (user === undefined) {
                return res.status(400).send({error: `Username not found, please signup`})
            }
            if (!(user.password.toLowerCase() === password.toLowerCase())) {
                return res.status(401).send({error: `Password incorrect`}) 
            }
            return res.status(200).send(user)  
        })
    })


module.exports = loginRouter