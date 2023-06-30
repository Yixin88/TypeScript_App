"use strict";
const numberArray = [];
const stringArray = [];
function identityOne(val) {
    return val;
}
identityOne(8);
identityOne('Hi');
function makeArray(x, y) {
    return [x, y];
}
const v = makeArray(5, 6);
const v2 = makeArray(1, 'Hi');
const v3 = makeArray('a', 2);
function makeFullName(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
}
const v4 = makeFullName({ firstName: 'Yixin', lastName: 'Zhang', age: 13 });
//# sourceMappingURL=generic.js.map