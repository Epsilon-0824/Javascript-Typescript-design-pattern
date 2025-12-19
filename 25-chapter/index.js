let obj = { a: 1, b: 2, c: 3 };

console.log(`${obj.a}, ${obj.b}, ${obj.c}`);

function getObj() {
  const a = obj.a;
  const b = obj.b;
  const c = obj.c;
  console.log(a, b, c);
}

getObj();


const {a, b, c} = obj
console.log(a, b, c)

const arr = [1, 2, 3]
const [first, second] = arr

console.log(first, second);

function getObj2({a, b}){
    console.log(a, b);
}
getObj2(obj)

const user = {profile: {name: 'j', age: 20}}
const {profile: {name: fullname, age}} = user
console.log(fullname, age);