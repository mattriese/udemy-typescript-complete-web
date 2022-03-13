import { User } from './models/User';

let matt = new User({ name: 'Matt', age: 38 });
console.log(matt.get('age'));
matt.set({ age: 39 });
console.log(matt.get('age'));
console.log(matt.get('name'));
