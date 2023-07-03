const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./src/models/users');
const userNew = UserModel(Sequelize, DataTypes);
// :instanciation models

sequelize.sync({force: true})
.then(_ => {
    console.log('synchro ok');
    userNew.create({
        role :"admin",
        password: "fhkuzehfk"
    })
})
