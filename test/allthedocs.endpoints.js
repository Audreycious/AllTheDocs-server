const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')
const knex = require('knex')
const { makeMDNDocsArray, makeReactDocsArray, makeDocsArray } = require('./allthedocs.fixtures')


describe('AllTheDocs endpoints', () => {
    let db

    before('make knex instance', () => {
        db = knex({
        client: 'pg',
        connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })
    before('set the timezone', () => {
        return db.raw("SET timezone to 'America/Chicago'")
    })
    before('clean the table', () => {
        return db.raw('TRUNCATE documents, mdndocs, reactdocs, users RESTART IDENTITY CASCADE') 
    })

    afterEach('cleanup', () => {
        return db.raw('TRUNCATE documents, mdndocs, reactdocs, users RESTART IDENTITY CASCADE')
    })

    after('disconnect from db', () => db.destroy())


    describe('/api/documents endpoint', () => {
        context('GET given the table contains no documents', () => {
            it('GET responds with 200 and an empty array', () => {
                return supertest(app)
                    .get(`/api/documents`)
                    .expect(200, [])
            })  
        })
        describe('given the table contains documents', () => {
            let testMDNDocs = makeMDNDocsArray()
            let testReactDocs = makeReactDocsArray()
            let testDocs = makeDocsArray()
            beforeEach('insert the documents', () => {
                return db
                    .into('mdndocs')
                    .insert(testMDNDocs)
                    .then(() => {
                        return db
                        .into('reactdocs')
                        .insert(testReactDocs)
                        .then(() => {
                            return db
                            .into('documents')
                            .insert(testDocs)
                        })
                    })
            })

            context('GET', () => {
                it('responds with 200 and the testDocuments', () => {
                    return supertest(app)
                        .get('/api/documents')
                        .expect(200, testDocs)
                })
            })

            context('POST if valid search', () => {
                const searchTerm = 'f'
                const searchArr = []
                testDocs.forEach(entry => {
                    // on each, compare search against the term
                        // compare with .includes()
                    if (entry.term.includes(searchTerm)) {
                        // once we find a match, store the match in a variable
                        // keep going until the end
                        searchArr.push(entry)
                    }
                })  
                it('responds with 200 and an array of filtered test documents', () => {
                    return supertest(app)
                        .post('/api/documents')
                        .send({ searchTerm: searchTerm})
                        .expect(200, searchArr)
                })
            })

        })
    })

    describe.only('/api/signup endpoints', () => {
        context('POST', () => {
            let seedUser = {
                id: 'SeedId',
                username: 'SeedUser',
                password: 'SeedPassword'
            }
            let testUser = {
                username: 'Audrey',
                password: 'Audrey'
            }
            beforeEach('insert a seedUser', () => {
                return db
                    .into('users')
                    .insert(seedUser)
            })
            it('responds with 201', () => {
                return supertest(app)
                    .post(`/api/signup`)
                    .send(testUser)
                    .expect(201)
            })  
        })
    });
    
})