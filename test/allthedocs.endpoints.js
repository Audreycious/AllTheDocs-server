const { expect } = require('chai')
const supertest = require('supertest')
const logger = require('../src/logger')
const app = require('../src/app')
const knex = require('knex')
const { makeMDNDocsArray, makeReactDocsArray, makeDocsArray, makeUsersArray, makeUserHistory } = require('./allthedocs.fixtures')


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
            let testUsers = makeUsersArray()
            beforeEach('insert the documents and users', () => {
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
                            .then(() => {
                                return db
                                    .into('users')
                                    .insert(testUsers)
                            })
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
                it('responds with 200 and an array of filtered test documents', () => {
                    return supertest(app)
                        .post('/api/documents')
                        .send({searchTerm: searchTerm, user: `${testUsers[0].username}:${testUsers[0].password}`})
                        .expect(200, [{
                                mdnimagelink: "fourthImageLink",
                                mdnpagelink: "fourthPageLink",
                                reactimagelink: "fourthImageLink",
                                reactpagelink: "fourthPageLink",
                                term: "fetch",
                               }])
                })
            })

        })
    })

    describe('/api/signup endpoints', () => {
        context('POST', () => {
            let seedUser = {
                id: 'SeedId',
                username: 'SeedUser',
                password: 'SeedPassword'
            }
            let testUser = {
                id: '1',
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
                    .expect(201, [testUser])
            })  
        })
    })

    describe('/api/login endpoint', () => {
        context('POST', () => {
            let seedUsers = makeUsersArray()
            let testUser = seedUsers[0]
            beforeEach('insert seedUsers', () => {
                return db
                    .into('users')
                    .insert(seedUsers)
            })
            it('returns 200 and an object with the testUser', () => {
                return supertest(app)
                    .post('/api/login')
                    .send(testUser)
                    .expect(200, testUser)
            })
            
        })
    })

    describe('/api/users endpoint', () => {
        context('POST', () => {
            let seedUsers = makeUsersArray()
            let seedUserHistory = makeUserHistory()
            let testUser = seedUsers[0]
            let testUserString = `${testUser.username}:${testUser.password}`
        let whatToExpect = {userSearchHistory: [{"searchname": seedUserHistory[0].searchname}, {"searchname": seedUserHistory[1].searchname}]}
            beforeEach('insert seedUsers', () => {
                return db
                    .into('users')
                    .insert(seedUsers)
                    .then(() => {
                        return db
                            .into('userhistory')
                            .insert(seedUserHistory)
                    })
            })
            it('returns 200 and an object of search history', () => {
                return supertest(app)
                    .post('/api/users')
                    .send({user: testUserString})
                    .expect(200, whatToExpect)
            })
            
        })
    })    
})