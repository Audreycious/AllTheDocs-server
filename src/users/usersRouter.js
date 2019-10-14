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
                        .select('searchname')
                        .from('userhistory')
                        .where('fkuserid', row[0].id)
                        .then(searchHistory => {
                            return searchHistory
                        })
                })
        }
        findSearchHistory(req.body.user).then(history => {
            return res.status(200).json({userSearchHistory: history})
        })
    })

usersRouter
    .route('/history')
    .post(bodyParser, (req, res, next) => {
        let insertSearchHistory = async (user, searchname) => {
            let knexInstance = req.app.get('db') 
            let id = uuid()
            let tempUser = user.split(':')
            let username = tempUser[0]
            let password = tempUser[1]
            logger.info(`Post history ran`)
            return knexInstance
                .select('id')
                .from('users')
                .where('username', username)
                .then(row => {
                    logger.info(`Row 0`)
                    logger.info(row[0])
                    let insertObj = {
                        id: id,
                        fkuserid: row[0].id,
                        searchname: searchname,
                    }
                    logger.info(`InsertObj`)
                    logger.info(insertObj)
                    return knexInstance
                        .insert(insertObj)
                        .into('userhistory')
                })
        }
        insertSearchHistory(req.body.user, req.body.searchname).then(() => {
            return res.status(201).json()
        })
    })

module.exports = usersRouter