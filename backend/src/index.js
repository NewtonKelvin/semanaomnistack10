const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect ('mongodb+srv://omnistack:jelv2819jelv@cluster0-dlp9a.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP> GET, POST, PUT, DELETE

//Query Params: request.query ( Filtros, ordenação, paginação, ... )
//Route Params: request.params ( Identificar um recurso na alteração, remoção )
//Body: request.body ( Dados para criação ou alteração de um registro )

//MongoDB (Não-relacional!)



app.listen(3333);