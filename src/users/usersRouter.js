const express = require('express')
const usersRouter = express.Router()
const bodyParser = express.json()
const uuid = require('uuid/v4')

usersRouter
    .route('/')
    .post(bodyParser, (req, res, next) => {
        // search for the users id based on their username
        let findSearchHistory = async (user) => {
            let knexInstance = req.app.get('db')
            let tempUser = user.split(':')
            let username = tempUser[0]
            return knexInstance
                .select('id')
                .from('users')
                .where('username', username)
                .then(row => {
                    // find all search history where user id matches the foreign key
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
            // added catch if there's a new user so it doesn't break the map on the frontend
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
        // find the users id based on their username
        let insertSearchHistory = async (user) => {
            let tempUser = user.split(':')
            let username = tempUser[0]
            return knexInstance
                .select('id')
                .from('users')
                .where('username', username)
        }
        insertSearchHistory(req.body.user).then(row => {
            // add an id to the new object
            // foreign key equals the users id found above
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