var onoff = document.getElementById('onoff');
//　チェックボックスonoffの状態に応じて、ログを出力
if(onoff.checked) {
  console.log(onoff.value);
} else {
  console.log('チェックされていません。');
}