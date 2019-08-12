var name = 'Steve'
var age = 32
var hasHobbies = true

function summariseUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    )
}

console.log(summariseUser(name, age, hasHobbies))