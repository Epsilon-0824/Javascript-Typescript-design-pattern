let users = ['John', 'Mary', 'Bob']
let userCount = users.length

for (const user of users) {
    console.log(user);
}

let text = 'hello javascript'
for (const element of text) {
    console.log(element);
}

let capitals = new Map([
    ['Thailand', 'Bangkok'],
    ['Japan', 'Tokyo']
])

for (const [c, cap] of capitals) {
    console.log(`${c} ${cap}`);
}

let fruits = ['apple', 'banana']
let colors = ['red', 'yellow']

for (const fruit of fruits) {
    for (const color of colors) {
        console.log(`${fruit} might be ${color}`);
    }
}