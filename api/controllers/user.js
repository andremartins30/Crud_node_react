const Db = require('../db')


exports.getUsers = (req, res) => {
    const q = "SELECT * FROM usuarios";

    Db.query(q, (err, data) => {
        if (err) {
            console.error('Erro ao fazer a consulta: ', err);
            res.status(500).send('Erro interno');
            return;
        }
        if (data.length === 0) {
            res.status(404).send('Usuário não encontrado');
            return;
        }
        res.send(data[0]);
})};

