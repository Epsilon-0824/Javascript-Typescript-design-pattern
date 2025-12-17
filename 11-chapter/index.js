const obj = {}
obj['fullanme'] = 'mary'
obj['age'] = '20'
console.log(obj);
console.log(Object.keys(obj).length);

const map = new Map()
map.set('fullname', 'bob')
map.set('age', 20)
console.log(map);
console.log(map.get('age'));
console.log(map.size);
