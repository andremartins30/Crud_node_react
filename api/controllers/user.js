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
        res.send(data);
})
};

exports.addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    Db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário cadastrado com sucesso!")
    })
}

exports.updateUser = (req, res) => {
    const q = 
    "UPDATE usuarios SET `nome`= ?, `email`= ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ]

    Db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!")
    });
};

exports.deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?"

    Db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Usuário deletado com sucesso!")
    })
}