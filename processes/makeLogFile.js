const fs = require('fs');

module.exports = function() {
  // Trying to save to an incorrect relative path
  // This will throw an ENOENT error
  fs.writeFile('../errorLogs/ENOENT' + (1 * new Date()) + '.log', 'An error occurred', function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Success!');
    }
  });

  return;

  // Instead, make relative to this file
  fs.writeFile(__dirname + '/../errorLogs/ENOENT' + (1 * new Date()) + '.log', 'An error occurred', function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Success!');
    }
  });

  // Or use a path relative to the calling script
  // THis is risky, because the calling script could change
  fs.writeFile('./errorLogs/ENOENT' + (1 * new Date()) + '.log', 'An error occurred', function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Success!');
    }
  });
};