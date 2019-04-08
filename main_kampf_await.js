const fs = require("fs");
const FILE = "sample.txt";

// Writes given text to a file asynchronously. 
// Returns a Promise.
function write(text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(FILE, text, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Reads text from the file asynchronously and returns a Promise.
function read() {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// We can now run async non-blocking code
// as if it was 'normal' blocking code that 
// we're used to seeing in other languages!
(async () => {
  const originalContent = await read();
  console.log(originalContent);

  await write("updated content");
  const updatedContent = await read();
  console.log(updatedContent);
})();