document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');
  
  // <ul id="list">配下(リンク)をクリックした時の処理
  list.addEventListener('click', function(e) {
    // data-isbn属性からアンカータグに紐づいたisbn値を取得
    // (e.targetは6.7.2項を参照)
    var isbn = e.target.getAttribute('data-isbn');
    
    // isbn値が取得できた場合のみ処理を実行
    if (isbn) {
      // <img>要素を生成
      var img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = e.innnerHTML;
      img.height = 150;
      img.width = 108;
      // <div>要素配下に<img>要素が存在するか(画像を表示中か)を確認
      if(pic.getElementsByTagName('img').length > 0){
        // <img>要素が存在する場合、新たな<img>要素で置換
        pic.replaceChild(img, pic.lastChild);
      } else {
        del.disabled = false;
        pic.appendChild(img);
      }
    }
  }, false);
  
  // [削除]ボタンがクリックされた時の処理
  del.addEventListener('click', function() {
    // <div id="pic">配下の子要素を削除し、[削除]ボタンを無効に
    pic.removeChild(pic.lastChild);
    del.disabled = true
  }, false);
}, false);