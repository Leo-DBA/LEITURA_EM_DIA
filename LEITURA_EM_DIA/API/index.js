const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 8800;
const router = require("./router/index");
const connect = require("./data_config/config");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Inicialize as rotas
router(app, express);





// Inicie o servidor
app.listen(port, () => {
  console.log("Back-End Iniciado...");
});
