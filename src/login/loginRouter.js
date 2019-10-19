const express = require('express')
const loginRouter = express.Router()
const bodyParser = express.json()


loginRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let { username, password } = req.body
        let knexInstance = req.app.get('db')
        // get all users from the database
        let getUsers = async () => {
            return knexInstance
                .select('*')
                .from('users')
                .then(users => {
                    return users
                })
        }
            
        getUsers().then(users => {  
            // find the user data from the users
                // error if the user doesn't exist
            let user = users.find(user => user.username.toLowerCase() === username.toLowerCase())
            if (user === undefined) {
                return res.status(400).send({error: `Username not found, please signup`})
            }
            // check if the password matches, if so, return 200 and the user
            if (!(user.password.toLowerCase() === password.toLowerCase())) {
                return res.status(401).send({error: `Password incorrect`}) 
            }
            return res.status(200).send(user)  
        })
    })


module.exports = loginRouter