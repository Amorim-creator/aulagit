const express = require('expresss');
const app = express();

app.use(express.static('public'));

app.listen(3000,()=>console.log("servidor rodando na porta 3000 http://localhost:3000"));