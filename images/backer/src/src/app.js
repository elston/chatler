// ..
'use strict';

// ...
import express from 'express';

// ..
const app = express();

// ...
app.get('/', function(req, res){
    res.send('Hello World');
});

// ...
app.use(function(req, res){
    res.sendStatus(404); 
});


// ...
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;
const server = app.listen(PORT, HOST, function(err) {
    if (err) {
        console.log(err);
        return;
    };
    // ...
    console.log('server listening on port: %s', PORT);
});