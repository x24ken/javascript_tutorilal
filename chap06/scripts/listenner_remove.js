document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn');
  var listenner = function() {
    window.alert('こんにちは、世界!');
  };
  
  //イベントリスナーを登録
  btn.addEventListener('click', listenner, false);
  
  // //イベントリスナーを破棄
  // btn.removeEventListener('click', listenner, false);
  
}, false);