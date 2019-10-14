const express = require('express')
const documentsRouter = express.Router()
const bodyParser = express.json()
const logger = require('../logger')
const uuid = require('uuid/v4')


documentsRouter
    .route('/')
    .get((req, res, next) => {
        let knexInstance = req.app.get('db')
        knexInstance
            .from('documents')
            .select('*')
            .then(documents => {
                res.status(200).json(documents)
            })
    })
    .post(bodyParser, (req, res, next) => {
        let { searchTerm, user } = req.body
        logger.info(searchTerm)
        logger.info(user)
        let tempUser = user.split(':')
        let username = tempUser[0]
        let password = tempUser[1]
        // give insert obj a new id
        let id = uuid()
        let insertObject = { searchname: searchTerm, id }
        let knexInstance = req.app.get('db')
        // use username to search for entry
        let getUser = async () => {
            return knexInstance
                .select('*')
                .from('users')
                .where('username', username)
                .then(user => {
                    return user[0]
                })
        }
        // use user.id to add to insert obj
        getUser().then(user => {
            logger.info(user)
            insertObject.fkuserid = user.id
            return user
        })
        .then(() => {
            knexInstance
                .insert(insertObject)
                .into('userhistory')
                .then(() => {
                    knexInstance
                        .from('documents')
                        .select('term', 'mdndocs.mdnimagelink', 'mdndocs.mdnpagelink', 'reactdocs.reactimagelink', 'reactdocs.reactpagelink')
                        .join('mdndocs', 'fkmdndocs' , '=', 'mdndocs.id')
                        .join('reactdocs', 'fkreactdocs' , '=', 'reactdocs.id')
                        .where('term', 'like', `%${searchTerm}%`)
                        .then(rows => {
                            res.status(200).json(rows)
                        })
                })
        })
        
        
    })

    // [{
    //     fkmdndocs: "1",
    //     fkreactdocs: "1",
    //     id: "1",
    //     term: "fetch"
    // }]

module.exports = documentsRouter
