
const SignupService = {
    getUsers(knex) {
        knex
            .from('users')
            .select('*')
            .then(users => {
                return users
            })
    },
    insertUser(knex, userInfo) {
        knex
            .insert(userInfo)
            .returning('*')
            .into('users')
            .then(user => {
                return user
            })
    }
}

module.exports = SignupService