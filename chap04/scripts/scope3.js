var scope = 'Global Variable';

function getValue() {
  console.log(scope);
  var scope = 'Local Varibale';
  return scope;
}

console.log(getValue());
console.log(scope);