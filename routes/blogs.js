const {
    connection
} = require('../server');

const path = (app) => {
    app.get('/blogs', (req, res) => {
        connection.query('SELECT * FROM blogs;',
            [],
            (err, results) => {
                if (err) throw err;
                res.json(results)
            })
    })

    app.get('/blogs/:id', (req, res) => {
        let id_blog = req.params.id
        connection.query('SELECT * FROM blogs WHERE id_blog = ?;',
            [id_blog], // requete preparé
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
                res.json(results)
            })
    })

    app.post('/blogs', (req, res) => {
        const {
            content_blog,
            date_blog,
            id_user,
            picture_path_blog, 
            title_blog
        } = req.body;
        console.log(req.body);
        connection.query('INSERT INTO blogs (content_blog, date_blog, id_user, picture_path_blog, title_blog) VALUES (?, ?, ?, ?, ?) ;',
            [content_blog, date_blog, id_user, picture_path_blog, title_blog], // requete preparé
            (err, results) => {
                if (err) throw err;
                res.json(results)
            })
    })

    app.patch('/blogs/:id', (req, res) => {
        const id_blog = req.params.id;
        const new_picture  = req.body.prix;
      
        connection.query(
          'UPDATE blogs SET picture_path_blog = ? WHERE id_blog = ?',
          [new_picture , id_blog],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows === 0) {
              res.status(404).send('blog non trouvé');
            } else {
              res.status(204).send('mis à jour de l\'image avec succès');
            }
          }
        );
      });
      
      

    app.delete('/blogs/:id', (req, res) => {
            let id_blog = req.params.id;
            connection.query('DELETE FROM blogs WHERE id_blog = ?',
                [id_blog],
                (err, result) => {
                    if (err) throw err;
                    if (result.affecetedRows === 0) {
                        res.status(404).send('blogs non trouvé');
                    } else {
                        res.status(200).send('blogs supprimé avec succés');
                    }
                }
            );
        }

    );
}

module.exports = path;