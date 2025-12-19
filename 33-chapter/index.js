function greetMorning(fullname){
    return 'good morning ' + fullname
}

function greet(timeOfDay, fullname){
    return `good ${timeOfDay} ${fullname}`
}

console.log(greet('morning', 'John'))