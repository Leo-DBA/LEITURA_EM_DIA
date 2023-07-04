class Queries {
  constructor() {
    this.conn = null;
  }

  init(conn) {
    this.conn = conn;
    this.selecionaData();
    //this.insereDados(); // Chamada do novo método
  }

  selecionaData() {
    const sql = `
      SELECT nome, idade FROM teste_usuarios;
    `;

    this.conn.query(sql, (error, results) => {
      if (error) {
        console.log("Deu erro para executar o select:");
        console.log(error.message);
        return;
      }

      console.log("SELECT executado com sucesso:");
      console.log(results);
    });
  }

  insereDados() {
   

    const sql = `
      INSERT INTO teste_usuarios (nome, idade)
      VALUES (?, ?)
    `;

    this.conn.query(sql, [nome, idade], (error, results) => {
      if (error) {
        console.log("Deu erro para executar o insert:");
        console.log(error.message);
        return;
      }

      console.log("INSERT executado com sucesso!");
      console.log(results);
    });
  }
}

module.exports = Queries;
