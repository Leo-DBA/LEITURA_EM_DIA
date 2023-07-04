const ModelLeitura = require("../models/model")

class data_controller {
seleciona(){
    return ModelLeitura.listar();

}
adicionar(addUser){
            return ModelLeitura.adicionar(addUser)

}
alterar(update_usuario,id){
            return ModelLeitura.update(update_usuario,id)

}
deletar(id){
    return ModelLeitura.delete(id)
}


};

module.exports = new data_controller();