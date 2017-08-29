// ..
'use strict';

// ...
import express from 'express';

// ..
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

// ...
const app = express();

// ...
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// ...
app.use((req, res)=>{
    res.sendStatus(404); 
});


// ...
const server = app.listen(PORT, HOST, (err)=>{
    // ...
    if (err) {
        console.log(err);
        return;
    };
    // ...
    console.log('server listening on port: %s', PORT);
});