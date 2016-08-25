const fs = require('fs');

// Trying to create a file that can't exist
// This will throw an ENOENT error
fs.writeFile('./errorLogs/log:45:error.log', 'Someone accessed the file', function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Success!');
  }
});

return;

// Instead, change the filename to something possible
fs.writeFile('./errorLogs/log.45.error.log', 'Someone accessed the file', function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Success!');
  }
});