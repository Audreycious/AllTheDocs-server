const express = require('express')
const usersRouter = express.Router()
const bodyParser = express.json()
const logger = require('../logger')
const uuid = require('uuid/v4')

usersRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        let findSearchHistory = async (user) => {
            let knexInstance = req.app.get('db')
            let tempUser = user.split(':')
            logger.info(tempUser)
            let username = tempUser[0]
            let password = tempUser[1]
            return knexInstance
                .select('id')
                .from('users')
                .where('username', username)
                .then(row => {
                    logger.info(row)
                    return knexInstance
                        .from('userhistory')
                        .where('fkuserid', row[0].id)
                        .then(searchHistory => {
                            logger.info(searchHistory)
                            return searchHistory
                        })
                })
        }
        findSearchHistory(req.body.user).then(history => {
            return res.status(200).json({userSearchHistory: history})
        })
    })

module.exports = usersRouter