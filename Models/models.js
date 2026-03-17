let musicas = [
{ id: 1, autor: 'Hanz zimerman',nome: 'Hanz Zimerman - Piano Concerto No. 1 in B-flat minor, Op. 23 - I. Allegro ma non troppo'},
{ id: 2, autor: 'Fernandinho', nome: 'Fernandinho - A Vida é um Carnaval' },
{ id: 3, autor: 'Ana Castela', nome: 'Ana Castela - PISADINHA' },
 { id: 4, autor: "Turma do Pagode", nome: "Turma do Pagode - Deixa Acontecer" },
{ id: 5, autor: "Ludmilla", nome: "Ludmilla - Rainha da Favela" },
];


const getAll = () => musicas;

const getById = (id) => musicas.find(m => m.id === parseInt(id));

const getByNome = (nome) => musicas.filter(m =>
  m.nome.toLowerCase().includes(nome.toLowerCase())
);

const add = (novaMusica) => {
  const novoId = musicas.length ? Math.max(...musicas.map(m => m.id)) + 1 : 1;
  novaMusica.id = novoId;
  musicas.push(novaMusica);
  return novaMusica;
};

const update = (id, dadosAtualizados) => {
  const index = musicas.findIndex(m => m.id === parseInt(id));
  if (index === -1) return null;
  musicas[index] = { ...musicas[index], ...dadosAtualizados, id: parseInt(id) };
  return musicas[index];
};

const remove = (id) => {
  const index = musicas.findIndex(m => m.id === parseInt(id));
  if (index === -1) return null;
  return musicas.splice(index, 1)[0];
};

module.exports = {
  getAll,
  getById,
  getByNome,
  add,
  update,
  remove
};