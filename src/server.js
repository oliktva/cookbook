import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

//handle any errors
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

// Render the app
app.use(express.static(path.join(__dirname, '../dist')));

//start server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
