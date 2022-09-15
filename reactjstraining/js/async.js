console.log('This is an async await practice');
async function Commander() {
    console.log('Inside Commander Function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('after response')
    return users;
}

console.log('Before calling Commander');
let a = Commander();
console.log('After calling Commander');
console.log(a);
a.then(data => console.log(data))
console.log('Last line of JS File')