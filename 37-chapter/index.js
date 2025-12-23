function showMessage(){
    // setInterval(console.log('test'), 3000)
    setInterval(() => {
        console.log('hello js')
    }, 3000)

    setTimeout(() => {
        console.log('hello js 2');
    }, 3000)
}

showMessage()