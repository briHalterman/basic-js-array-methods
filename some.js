const users = ['Brandon', 'Keeli', 'Tiffany', 'Steve'];

const sevenLong = (element) => element.length === 7;

console.log(users.some(sevenLong));
// returns true