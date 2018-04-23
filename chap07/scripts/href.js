document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('isbn').addEventListener('change', function() {
  location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value);
  }, false);
}, false);