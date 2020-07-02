// currying using traditional functions
function add(a) {
    return function (b) {
        return a + b;
    };
}

// currying a function using arrow functions
const add2 = a = b => a + b;
add(1)(5);