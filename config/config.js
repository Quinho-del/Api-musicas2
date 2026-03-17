const sqlite3 = require('sqlite3').verbose();
const path = require('path');

//Caminho do arquivo do banco de dados

// dirname = diretório atual do arquivo
const dbPath = path.resolve(__dirname, './database.db');

//Criar a conexão com o banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar:', erro);
    } else {
        console.log('Conectado ao SQLite');
    }
});
