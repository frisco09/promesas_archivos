const fs = require('fs');
const FILE = 'sample.txt';

// Lee el archivo de primera e imprime contenido
fs.readFile(FILE, 'utf8', (err, data) => {
    if (err) console.log('Error:', err);
    console.log(data);
//
// ahora escribe 'Archive_Actualizade' en el arhivo
    fs.writeFile(FILE, 'Updated content', err => {
        if (err) console.log('Error:', err);
    
        // Completada la escritura, lee de nuevo
        // y nos muestra su contenido otra vez.
        fs.readFile(FILE, 'utf8', (err, data) => {
            if (err) console.log('Error:', err);
            console.log(data);
        });
    });
});