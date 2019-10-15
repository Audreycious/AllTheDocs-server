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
            let username = tempUser[0]
            let password = tempUser[1]
            return knexInstance
                .select('id')
                .from('users')
                .where('username', username)
                .then(row => {
                    logger.info(row)
                    return knexInstance
                        .select('searchname')
                        .from('userhistory')
                        .where('fkuserid', row[0].id)
                        .then(searchHistory => {
                            return searchHistory
                        })
                })
        }
        findSearchHistory(req.body.user).then(history => {
            let response = history
            if (!history) {
                response = []
            }
            return res.status(200).json({userSearchHistory: response})
        })
    })

usersRouter
    .route('/history')
    .post(bodyParser, (req, res, next) => {
        let knexInstance = req.app.get('db') 
        let insertSearchHistory = async (user) => {
            let tempUser = user.split(':')
            let username = tempUser[0]
            let password = tempUser[1]
            logger.info(`Post history ran`)
            return knexInstance
                .select('id')
                .from('users')
                .where('username', username)
        }
        insertSearchHistory(req.body.user).then(row => {
            let id = uuid()
            let insertObj = {
                id: id,
                fkuserid: row[0].id,
                searchname: req.body.searchname,
            }
            knexInstance
                .insert(insertObj)
                .into('userhistory')
            return res.status(201).json()
        })
    })

module.exports = usersRouter