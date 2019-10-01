const db = require('./knex-instance');

const DatabaseService = {
    AddNewUser(uName,psw) {
        //adds a new user after signup
        db('User')
        .returning('userid')
        .insert({username:uName,Password:psw})

    },

    ValidateExistingUser() {

    }

}

module.exports = DatabaseService;