const fruits = ['apple', 'banana']

if(fruits.indexOf('apple') !== -1){
    console.log('hello apple');
}
else{
    console.log('apple is not found');
}

console.log(fruits.includes('apple'));
if(fruits.includes('apple')){
    console.log('hello apple');
}
else{
    console.log('apple is not found');
}

const fruitsToCheck = [...fruits,'cherry', 'mango']
let filterFruit = fruitsToCheck.filter((f) => fruits.includes(f))
console.log(filterFruit);