import { compose, pipe } from 'lodash/fp';

let input = "   javaScript  ";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

//  complicated and reads from right to left
const result = wrapInDiv(toLowerCase(trim(input)));

// easier to read but still reads from right to left
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);

// reads from left to right and more readable
const transformRight = pipe(wrapInDiv, toLowerCase, trim);
transformRight(input);

console.log(result);
