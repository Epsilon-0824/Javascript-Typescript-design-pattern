// bad
type userRole = {
    role: string
}

function assignRole(role: userRole){
    console.log(role);
}

assignRole({role: 'member'});

// good
enum userRole2{
    Member = 'member',
    Admin = 'admin',
    Manager = 'manager'
}

function assignRole2(role: userRole2){
    console.log(role);
}

let x = userRole2.Member

assignRole2(x);