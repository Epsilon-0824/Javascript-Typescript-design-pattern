// bad
{/* <button onClick="alert('hello')">click me</button> */}

// good
<button id="mybtn">click me</button>

// js
document.getElementById("mybtn").addEventListener(click, () => {
    alert('hello')
});