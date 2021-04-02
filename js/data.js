// let database = [
//     {name: 'Ibrohim', age: 21, score: 98},
//     {name: 'Abdusalom', age: 18, score: 85},
//     {name: 'Doniyor', age: 22, score: 68},
//     {name: 'Nozim', age: 19, score: 90},
//     {name: 'Anvar', age: 20, score: 76},
// ]

// JSON type

// window.localStorage.setItem('database', JSON.stringify(database))
let database = window.localStorage.getItem('database')
if (!database) database = []
else database = JSON.parse(database)