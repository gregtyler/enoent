const fs = require('fs');

// Trying to open a file that doesn't exist
// This will throw an ENOENT error
fs.readFile('./no-exist.txt', function(err, data) {
  if (err) {
    throw err;
  } else {
    console.log('Success!');
  }
});