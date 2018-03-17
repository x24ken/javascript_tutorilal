var strl = 'にわにはにわにわとりがいる';
console.log(strl.indexOf('にわ'));
console.log(strl.lastIndexOf('にわ'));
console.log(strl.indexOf('にわ', 3));
console.log(strl.lastIndexOf('わ', 5));
console.log(strl.indexOf('ガーデン'));
console.log(strl.startsWith('にわ'));
console.log(strl.endsWith('にわ'));
console.log(strl.includes('にわ'));

var str2 = 'Wingsプロジェクト'
var str3 = '叱られて'
var str4 = '    wings     '

console.log(str2.charAt(4));
console.log(str2.slice(5, 8));
console.log(str2.substring(5, 8));
console.log(str2.substr(5, 3));
console.log(str2.split('s'));
console.log(strl.split('わ', 3));
console.log(str2.charCodeAt(0));
console.log(String.fromCharCode(87, 105, 110, 103));
console.log(str3.codePointAt(134047));
console.log(str2.concat('有限会社'));
console.log(str2.repeat(2));
console.log(str4.trim());
console.log(str2.length);
