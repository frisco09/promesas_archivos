const fs = require("fs");
const FILE = 'sample.txt';

// Esta función devuelve una promesa de que el 'texto' que pasamos
// esta función ha sido escrita de forma asíncrona en nuestro ARCHIVO.
const writePromise = text => {
  return new Promise((resolve, reject) => {
    fs.writeFile(FILE, text, err => {
      if (err) reject(err);
      else resolve();
    });
  });
};

// Esta función devuelve una promesa que se resuelve de forma asíncrona.
// lee el contenido en nuestro ARCHIVO por fs.readFil
const readPromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

// Ahora veamos como ejecutaríamos el mismo programa
// con nuestras promesas.
// Acabamos de escapar del infierno de devolución de llamada. Podríamos encadenar más lecturas.
// y escribe y todavía tiene código altamente legible.e.
readPromise()
  .then(content => {
    console.log(content);
    return writePromise("updated content");
  })
  .then(() => {
    return readPromise();
  })
  .then(updatedContent => {
    console.log(updatedContent);
  })
  .catch(err => console.log(err));