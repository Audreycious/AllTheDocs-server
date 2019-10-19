const express = require('express')
const documentsRouter = express.Router()
const bodyParser = express.json()
const uuid = require('uuid/v4')


documentsRouter
    .route('/')
    .get((req, res, next) => {
        let knexInstance = req.app.get('db')
        // return all the documents
        knexInstance
            .from('documents')
            .select('*')
            .then(documents => {
                return res.status(200).json(documents)
            })
    })
    .post(bodyParser, (req, res, next) => {
        let { searchTerm, user } = req.body
        let tempUser = user.split(':')
        let username = tempUser[0]
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
            insertObject.fkuserid = user.id
            return user
        })
        .then(() => {
            // take the searchTerm and split it into an array
            let searchArr = searchTerm.split(" ")
            // sort the array by largest word first
            searchArr.sort((a, b) => {
                return b.length - a.length
            })
            // pull all the documentation by term and IDs and the matching documents by FKid 
            return knexInstance
                .from('documents')
                .select('term', 'mdndocs.mdnimagelink', 'mdndocs.mdnpagelink', 'reactdocs.reactimagelink', 'reactdocs.reactpagelink')
                .join('mdndocs', 'fkmdndocs' , '=', 'mdndocs.id')
                .join('reactdocs', 'fkreactdocs' , '=', 'reactdocs.id')
                // .where('term', 'like', `%${searchTerm}%`)
                .then(rows => {
                    let finalArr = []
                    // using each word in the searchArr, match them to terms and store matches in an array
                        // stop the search if you have more than 3 responses so we can prioritize the bigger words rather than a wider search for small words
                    searchArr.forEach(word => {
                        rows.forEach(row => {
                            if (finalArr.length < 3) {
                                if (row.term.includes(word)) {
                                    finalArr.push(row)
                                }
                            }
                        })
                    })
                    return res.status(200).json(finalArr)
                })
        })
    })

module.exports = documentsRouter
