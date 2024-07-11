const db = require('../models/index');
const Role = db.role;
module.exports = () => {
    Role.create({
        id: 1,
        name: "user"
    }).catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
            console.log('Role "user" already exists.');
        }
    });

    Role.create({
        id: 2,
        name: "moderator"
    }).catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
            console.log('Role "moderator" already exists.');
        }
    });

    Role.create({
        id: 3,
        name: "admin"
    }).catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
            console.log('Role "admin" already exists.');
        }
    });
    return initial;
}