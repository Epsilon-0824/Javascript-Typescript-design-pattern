// bad
{/* <button onClick="alert('hello')">click me</button> */}

// good
<button id="mybtn">click me</button>

// js
const myBtn = document.getElementById("mybtn");

function handleClick(){
    alert('hello');
}

myBtn.addEventListener(click, handleClick, {
    once: true
});