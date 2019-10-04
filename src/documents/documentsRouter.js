const express = require('express')
const documentsRouter = express.Router()
const bodyParser = express.json()
const logger = require('../logger')


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
        let { searchTerm } = req.body
        logger.info(searchTerm)
        let knexInstance = req.app.get('db')
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

    // [{
    //     fkmdndocs: "1",
    //     fkreactdocs: "1",
    //     id: "1",
    //     term: "fetch"
    // }]

module.exports = documentsRouter
