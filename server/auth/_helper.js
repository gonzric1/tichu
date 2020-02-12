const knex = require("../db/connection");
const bcrypt = require('bcrypt');
const saltRounds = 10;

function createUser(name, email, password, res) {
  knex("users")
    .where({ email })
    .first()
    .then(user => {
      if (user) {
        res.send({ error: "user already exists" });
        console.log("Cannot create user, it already exists")
        throw new Error('User already exists')
      }
      bcrypt.hash(password, saltRounds, function(err, hash){
        knex('users').returning('*').insert({email: email, password: hash}).then(user=>console.log("new user created"))
        
      }).catch(err=>console.log)
    })
    .catch(err=>console.log);
}
//check for email. If it returns a user, exit out of function.

module.exports = createUser;
