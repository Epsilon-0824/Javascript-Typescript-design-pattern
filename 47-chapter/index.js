// bad
{/* <button onClick="alert('hello')">click me</button> */}

// good
<button id="mybtn">click me</button>

// js
const myBtn = document.getElementById("mybtn");

function handleClick(){
    alert('hello');
    myBtn.removeEventListener('click', handleClick);
}

myBtn.addEventListener(click, handleClick);