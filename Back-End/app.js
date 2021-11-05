const express = require('express');

const bodyParser = require('body-parser').json();

const tasksRoute = require('./routes/TasksRoutes');

const app = express();

const PORT = 3000;

app.get('/', (req, resp)=>{
  resp.send();
});

app.use(bodyParser);

app.use('/todolist', tasksRoute);

app.listen(PORT, console.log(`Server rodando na porta ${PORT}`));


module.exports = app;