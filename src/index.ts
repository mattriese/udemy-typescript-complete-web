import { User } from './models/User';

let matt = new User({ name: 'Matt', age: 38 });

matt.on('change', () => {});
matt.on('change', () => {});
matt.on('blah', () => {});

console.log('matt', matt)
