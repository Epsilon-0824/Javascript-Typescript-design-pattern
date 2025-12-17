const user = {
    id: 1,
    profile: {
        fullname: 'John Doe',
        address: {
            city: 'Ubon'
        }
    }
}

console.log(user?.profile?.fullname);