//import and require mysql2
const mysql = require('mysql2')
//connect to database
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'SH009277ji',
    database: 'employee_tracker_db'
})
