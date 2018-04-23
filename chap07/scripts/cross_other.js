document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(e) {
    var origin = 'https://javascript-tutorilal-x24ken.c9users.io';
    if (e.origin !== origin) { return; }
    document.getElementById('result').textContent = e.data;

    var current = new Date();
    e.source.postMessage(current, origin);
  }, false);
}, false);
