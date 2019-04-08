const fs = require('fs');
const file = 'sample.txt';
var colors = require('colors');

colors.setTheme({
    custom1: ['bgMagenta', 'underline','bold','white']
});
colors.setTheme({
    custom2: ['bgYellow', 'underline','bold','red']
});

// La ejecución comienza aquí
// Solo queremos leer algunos datos de un archivo, actualizarlo, escribirlo y leerlo nuevamente.
// Esto es lo que se verá con las devoluciones de llamada: ¡bienvenido al infierno de devolución de llamada!
//
read(file, data => {
    console.log(colors.green('original: %s'), data);

    // Ahora vamos a cambiar el texto.
    const updatedData = `${data} -!Esto ha sido actualizado!`;

    // ... y actualiza el mismo archivo.
    write(file, updatedData, () => {
        console.log(colors.custom1('edicion UNO: %s'), updatedData);

        read(file, data => {
            // Supongamos que esta vez haremos algo diferente con los datos.
            // solo imprimimos de nuevo.
            console.log(colors.custom2('edicion DOS: %s'), data);
        });
    });
});
//
// Esta función escribe el 'contenido' en el ARCHIVO
// y ejecuta una devolución de llamada una vez completada la escritura.
function write(file, content, callback) {
    fs.writeFile(file, content, err => {
      if (err) console.log('Error:', err);
      callback();
    });
  }
//https://medium.com/platformer-blog/node-js-concurrency-with-async-await-and-promises-b4c4ae8f4510
//http://www.fetaga.com/github/subir-archivos-de-proyecto-local-a-github-publico/
// Esta función lee del archivo y
// pasa los datos a una función de devolución de llamada
  function read(file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) console.log('Error:', err);
      callback(data);
    })
  }