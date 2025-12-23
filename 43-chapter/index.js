function badPractice(){
    myGlobal = 'this is global';
}

badPractice();
console.log(myGlobal);
myGlobal = 'test';
console.log(myGlobal);