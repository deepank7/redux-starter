const numbers = [1, 2, 3];

// Adding into arrays at beg or end
const added = [4, ...numbers];

// Adding into arrays in between
const index = numbers.indexOf(2);
const added2 = [...numbers.slice(0, index),
    4,
...numbers.slice(index)];

// Removing from an array
const removed = numbers.filter(n => n !== 2);

// Updating an array
const updated = numbers.map(n => n === 2 ? 20 : n);