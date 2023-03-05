const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const select = 'SELECT * FROM people'
const sql = 'INSERT INTO people(name) values (\'Caliel Oliveira\')'
connection.query(sql)
connection.end()


app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    connection.query(select, (err, results) => {
        if (err) {
            throw err
        }
        connection.end()
        res.send(`
                        <h1>Full Cycle</h1>
                        <h1>${results[0].name}</h1>
                        `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
