const conn = require("../data_config/config");

class ModelLeitura {
  listar() {
    const sql = "select Nome_Completo,email,sexo,dt_nascimento,senha from cadastro;";
    return new Promise((resolve, reject) => {
      conn.query(sql, (error, results) => {
        if (error) {
          console.log("Apresentou erro ao fazer o SELECT:", error);
          reject(error);
        } else {
          console.log("SELECT funcionou!!");
          resolve(results);
        }
      });
    });
  }

  adicionar(addUser) {
    const {Nome_Completo, email, sexo,dt_nascimento,senha} = addUser;
    const sql = 'INSERT INTO cadastro SET Nome_Completo = ?, email = ?, sexo = ?, dt_nascimento= ?, senha= ?  ;'
    return new Promise((resolve, reject) => {
      conn.query(sql, [Nome_Completo, email, sexo,dt_nascimento,senha], (error, resp) => {
        if (error) {
          console.log("Erro ao fazer o INSERT: ", error);
          reject(error);
        } else {
          console.log("INSERT funcionou!!");
          resolve(resp);
        }
      });
    });
  }

  update(update_usuario, id) {
    const sql = "UPDATE teste_usuarios SET ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      conn.query(sql, [update_usuario, id], (error, resp) => {
        if (error) {
          console.log("Erro ao fazer o UPDATE: ", error);
          reject(error);
        } else {
          console.log("UPDATE funcionou!!");
          resolve(resp);
        }
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM teste_usuarios WHERE id = ?";
    return new Promise((resolve, reject) => {
      conn.query(sql, [id], (error, resp) => {
        if (error) {
          console.log("Erro ao fazer o DELETE: ", error);
          reject(error);
        } else {
          console.log("DELETE funcionou!!");
          resolve(resp);
        }
      });
    });
  }
}

module.exports = new ModelLeitura();
