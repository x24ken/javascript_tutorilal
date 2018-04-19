document.addEventListener('DOMContentLoaded', function() {
  var key = document.getElementById('key');
  
  key.addEventListener('keydown', function(e) {
    console.log('キーコード:' + e.keyCode);
  }, false);
}, false);