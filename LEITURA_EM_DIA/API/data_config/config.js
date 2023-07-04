const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "dba_leo",
  password: "DBA_master@123",
  database: "leituraemdia"
});

conn.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão bem-sucedida com o banco de dados!");
});


/*
// Fecha a conexão quando terminar de usar
conn.end((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão com o banco de dados:', err);
      return;
    }
    console.log('Conexão encerrada.');
  });

*/

module.exports = conn;
