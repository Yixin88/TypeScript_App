"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let numbers = [];
let user = [1, 'Yixin'];
user.push(2);
;
let mySize = 2;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Yixin',
    retire: (Date) => {
        console.log(Date);
    }
};
let employee2 = {
    id: 1,
    name: 'Yixin',
    retire: (Date) => {
        console.log(Date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let metric = 'cm';
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map