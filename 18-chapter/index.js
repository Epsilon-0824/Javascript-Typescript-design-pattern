/**
 * @typedef {object} User
 * @property {string} fullname
 * @property {number} age
*/
/**
 * 
 * @param {User} user
 * @param {boolean} isActive
 */

function printUser(user, isActive){
    console.log(user.fullname)
    console.log(user.age)
    console.log(isActive ? 'true' : 'false')
}

printUser({fullname: 'Mary', age: 10}, true)