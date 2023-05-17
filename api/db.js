const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kabana12',
    database: 'crud'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados');;
        return;
    } console.log('Conexão estabelecida com sucesso');
})


module.exports = db