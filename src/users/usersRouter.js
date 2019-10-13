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
            return knexInstance
                .select('*')
                .from('userhistory')
                .where('fkuserid', user.id)
                .then(searchHistory => {
                    return searchHistory
                })
        }
        findSearchHistory(req.body).then(history => {
            return res.status(200).json({userSearchHistory: history})
        })
    })

module.exports = usersRouter