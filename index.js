const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos (imagens, CSS, JS)
app.use(express.static(__dirname));

// Lista de páginas HTML sem .html na URL
const paginas = [
  'index',
  'galeria',
  'criador',
  'eventos',
  'membros',
  'game',
  'jogo',
  'configuracoes',
  'parcerias', // <-- agora sim!
  'regras'
];

// Criar rota para cada página
paginas.forEach(pagina => {
  app.get(`/${pagina === 'index' ? '' : pagina}`, (req, res) => {
    res.sendFile(path.join(__dirname, `${pagina}.html`));
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});