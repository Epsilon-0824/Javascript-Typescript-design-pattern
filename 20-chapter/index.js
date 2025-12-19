class User{

    constructor(fullname){
        this.fullname = fullname
    }
    getFullname(){
        return this.fullname
    }

    setFullname(fullname){
        this.fullname = fullname
    }
}

const u = new User('John Doe')
console.log(u.fullname)
