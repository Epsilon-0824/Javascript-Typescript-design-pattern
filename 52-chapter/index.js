class NotFoundError extends Error{
    constructor(message){
        super(message);
        this.name = "Not Found Error";
        this.stack = 'now found 404';
    }
}

function showMsg(fullname){
    if(fullname === ''){
        const error = new NotFoundError('404 not found');
        error.stack = '404 fullname not found';
        throw error;
    }

    if(fullname === 'Mary'){
        // throw 'something went wwrong' // bad
        // throw new Error('something went wwrong'); // good
        const error = new Error('Invalid Output');
        error.name = 'Validation Error';
        error.stack = 'invalid Mary output';
        throw error;
    }
    return fullname;
}

try {
    console.log(showMsg(''));
} catch (error) {
    if(error instanceof NotFoundError){
        console.log(error.message);
    }
    else{
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
} finally{
    console.log('cleanup resource');
}

