// <select id="food">を取得
var s = document.getElementById('food');
// <slect>要素配下の子ノードを取得
var child = s.firstChild;

while (child) {
  if (child.nodeType === 1) {
    console.log(child.value);
  }
  
  child = child.nextSibling;
}