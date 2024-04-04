const users = ['Brandon', 'Keeli', 'Tiffany', 'Steve'];

console.log(users.slice(2));
// returns ['Tiffany', 'Steve']

console.log(users.slice(1, 3));
// returns ['Keeli', 'Tiffany']

console.log(users.slice(-3));
// returns ['Keeli', 'Tiffany', 'Steve']

console.log(users.slice(2,-1));
// returns ['Tiffany']

console.log(users.slice());
// returns ['Brandon', 'Keeli', 'Tiffany', 'Steve']