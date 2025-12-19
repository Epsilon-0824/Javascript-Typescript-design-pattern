const value = 0

if(value){
    console.log('value')
}

if(value === 0){
    console.log('value === 0')
}

const score = null
if(score != null){
    console.log('score is defined')
}
else{
    console.log('score is null or undefined')
}

const text = ''
if(text === ''){
    console.log('empty')
}
else{
    console.log('not empty')
}

const obj = {}
if(Object.keys(obj).length > 0){
    console.log('not empty')
}
else{
    console.log('empty')
}

const arr = []
console.log(arr.length)
if(arr.length !== 0){
    console.log('not empty')
}
else{
    console.log('empty')
}