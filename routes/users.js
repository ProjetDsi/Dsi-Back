const {
    connection
} = require('../server');

const path = (app) => {
    app.get('/users', (req, res) => {
        connection.query('SELECT * FROM users;',
            [],
            (err, results) => {
                if (err) throw err;
                res.json(results)
            })
    })
    
    app.get('/users/:id', (req, res) => {
        let id_user = req.params.id
        connection.query('SELECT * FROM users WHERE id_user = ?;',
            [id_user], // requete preparé
            (err, results) => {
                if (err) throw err;
                console.log('test');
                res.json(results)
            })
    })

    app.post('/users', (req, res) => {
        const {
            id_user_contact,
            password_user,
            role_user    
        } = req.body;
        console.log(req.body);
        connection.query('INSERT INTO users (id_user_contact, password_user, role_user) VALUES (?, ?, ?) ;',
            [id_user_contact, password_user, role_user], // requete preparé
            (err, results) => {
                if (err) throw err;
                res.json(results)
            })
    })

    app.patch('/users/:id', (req, res) => {
        const id_user = req.params.id;
        const new_user = req.body.prix;
      
        connection.query(
          'UPDATE users SET prix = ? WHERE id_user = ?',
          [new_user, id_user],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows === 0) {
              res.status(404).send('users non trouvé');
            } else {
              res.status(204).send(' l\'utilisateurs à été mis à jour avec succès');
            }
          }
        );
      });
      
      

    app.delete('/users/:id', (req, res) => {
            let id_user = req.params.id;
            connection.query('DELETE FROM users WHERE id_user = ?',
                [id_user],
                (err, result) => {
                    if (err) throw err;
                    if (result.affecetedRows === 0) {
                        res.status(404).send('utilisateur non trouvé');
                    } else {
                        res.status(200).send('l\'utilisateur à été supprimé avec succés');
                    }
                }
            );
        }

    );
}

module.exports = path;