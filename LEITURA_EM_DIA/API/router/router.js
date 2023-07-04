const { Router } = require("express");
const controle_data = require("../controllers/control");
const { add } = require("../models/model");
const router = Router();


// rota de cadastro do form
router.get("/cadastro", (req, res) => {
  const showLeitura = controle_data.seleciona();
  showLeitura
    .then((queries) => res.status(200).json(queries))
    .catch((error) => res.status(400).json(error.message));
});



router.post("/cadastro", (req, res) => { 
  const {Nome_Completo, email, sexo,dt_nascimento,senha} = req.body;
  const addUser = {Nome_Completo, email, sexo,dt_nascimento,senha};
  console.log("Valores recebidos no req.body:", Nome_Completo, email, sexo,dt_nascimento,senha);
  const insere = controle_data.adicionar(addUser);
  insere
    .then((useraddOK) => res.status(200).json(useraddOK))
    .catch((error) => res.status(400).json(error.message));
  
  
    
});


    router.put("/cadastro/:id", (req, res) => {
      const { id } = req.params;
      const update_usuario = req.body;
      const atualizaData = controle_data.alterar(update_usuario, id);
      atualizaData
        .then((changeData) => res.status(201).json(changeData))
        .catch((error) => res.status(400).json(error.message));
});

router.delete("/cadastro/:id", (req, res) => {
  const { id } = req.params;
  const deleteData = controle_data.deletar(id);
  deleteData
    .then((deleteData) => res.status(201).json(deleteData))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = router;
