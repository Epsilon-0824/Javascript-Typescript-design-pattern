const parentObj = {
    address: 'address from prototype'
}

const childObj = Object.create(parentObj)
childObj.province = 'province is an own property'

for(const key in childObj){
    console.log(`${key}: ${childObj[key]}`);
}

console.log('---goog---');
for (const key in childObj) {
    if (Object.prototype.hasOwnProperty.call(childObj, key)){
        const element = childObj[key]
        console.log(element);
    }
}

console.log('---best---');
Object.keys(childObj).forEach((key) => {
    console.log(`${key}: ${childObj[key]}`);
})

for (const [key, value] of Object.entries(childObj)) {
    console.log(`${key}: ${value}`);
}