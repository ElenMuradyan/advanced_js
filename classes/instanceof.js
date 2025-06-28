function A() {}
function B() {}

A.prototype = B.prototype = {};

//a.__proto__ = A.prototype
let a = new A();
//as a.__proto__ == A.prototype is true and A.prototype = B.prototype = {} 
console.log( a instanceof B );
//so this is true