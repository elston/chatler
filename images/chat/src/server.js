// ..
'use strict';

// ..
var nodemon = require('nodemon')('\
    --exec babel-node ./app \
    --watch ./app \
');
// ...
nodemon.on('start', function () {
    console.log('[nodemon] App has started');
// ..
}).on('quit', function () {
    console.log('[nodemon] App has quit');
// ..
}).on('restart', function (files) {
    console.log('[nodemon] App restarted due to:', files);
});