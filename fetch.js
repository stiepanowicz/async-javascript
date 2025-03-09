import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/posts/2');

promise
    .then(res => res.json())
    .then(user => {
        throw new Error('uh, oh');
        return user;
    })
    .then(user => console.log('dupa', user.title))
    .catch(err => console.error('oops', err));

console.log('Synchronous');