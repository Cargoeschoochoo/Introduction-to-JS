/**
 * Or: ||
 * And: &&
 * Not: !
 * Nullish coalescing operator: ??
 * provides a default value if the operand before the ?? is false
 * return the right hadn side value of the left-hand value is null or undefined
 */

let user = null;
const username = user ?? 'default user';
const dummyUsername = (user !== null && user !== undefined) ? user : 'default user';
console.log('username: ${username}' );


