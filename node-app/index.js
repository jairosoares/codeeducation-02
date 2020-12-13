const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3000

const config = {
    host: 'challenge-02-db',
    user: 'root',
    password: 'root',
    database: 'node-db',
}

let resultHtml = '<h1>Full Cycle Rocks!</h1>';
let count = -1;

const records = ["Wesley Willians", "Rafael", "Regina", "Luiz", "Leonan", "Alfredo"];
const connection = mysql.createConnection(config)
connection.connect( (err) => {
    if (err) {
        console.log("Problema ao conectar.")
        throw err;
    }

    count +=1;
    connection.query(`INSERT INTO people(name) VALUES('${records[count]}')`, (err, result) => {
        if (err) throw err;
        console.log(`Inserted ${records[count]}`);
    });

    connection.query("SELECT * FROM people", (err, result, fields) => {
        if (err) throw err;
        resultHtml += '<ul>'
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            resultHtml += '<li>' + row.name + '</li>'
        });
        resultHtml += '</ul>'
    });
});

app.get('/', (req,res) => {
    res.send(resultHtml)
} )

app.listen(port, () => {
    console.log('Running at port: ' + port)
})
