var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;

var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';

console.log(str);

var result = str.match(p);

for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}
