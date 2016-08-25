const fs = require('fs');

// Trying to write to a non-existent directory
// This will throw an ENOENT error
fs.writeFile('./accessLogs/pushout.log', 'Someone accessed the file', function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Success!');
  }
});

return;

// Instead, create directory first
fs.mkdir('./accessLogs', function(err) {
  fs.writeFile('./accessLogs/pushout.log', 'Someone accessed the file', function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Success!');
    }
  });
});