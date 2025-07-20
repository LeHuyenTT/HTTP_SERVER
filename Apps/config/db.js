const mongoose = require('mongoose')

const DBconnection = async() => {
    const conn = await mongoose
        .connect("mongodb+srv://lethithuhuyen1710:5nVXJ25tHmUxEsPp@demo.cryhs0d.mongodb.net/?retryWrites=true&w=majority&appName=Demo", {
        })
        .catch(err => {
            console.log(`Can't connect to the DB`.red, err)
        })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = DBconnection