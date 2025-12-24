type MaybeString = string | null | undefined

function processString(value: NonNullable<MaybeString>){
    console.log(value.toUpperCase);
}

const myString = null;

if(myString != null){
    processString(myString);
}

const myString2 = 'Hello World';

processString(myString2);