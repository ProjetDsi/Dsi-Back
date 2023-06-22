const path = require('./routes');
const {app, port} = require('./server');
const cors = require('cors');

app.use(cors());
path.blogsPath(app);
path.usersPath(app);

app.listen(port, ()=> {
    console.log(`🎉server is running on port  ${port}`);
})