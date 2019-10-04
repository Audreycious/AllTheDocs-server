const logger = require('../logger')


const SignupService = {
    getUsers(knex) {
        let users = knex
            .from('users')
            .select('*')
            .then(usersArr => {
                logger.info(usersArr)
                return usersArr
            })
        return users
    },
    insertUser(knex, userInfo) {
        let user = knex
            .insert(userInfo)
            .returning('*')
            .into('users')
            .then(userArr => {
                return userArr
            })
        return user
    }
}

module.exports = SignupService