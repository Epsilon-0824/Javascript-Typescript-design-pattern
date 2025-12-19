function getDayName(day){
    switch(day){
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        default: return 'day is invalid'
    }
}
console.log(getDayName(50))