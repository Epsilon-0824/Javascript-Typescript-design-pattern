const obj = {
    a: 1,
    b: 2,
    c: 3
}

Object.keys(obj).forEach(key => {
    console.log(obj[key]);
})

Object.entries(obj).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
})