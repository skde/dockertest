'use strict';
const express = require('express');
const mysql = require('mysql');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host     : 'db',
        user     : 'root',
        password : '',
        database : 'testdb'
    });
    connection.connect();
    connection.query('SELECT * FROM testTable', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results[0].name + 'qqq');
    });
    connection.end();
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);