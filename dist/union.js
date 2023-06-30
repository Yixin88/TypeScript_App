"use strict";
let score = 55;
score = '56';
let yixin = { name: 'Yixin', id: 1 };
yixin = { username: 'Yixin', id: 2 };
function showId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
//# sourceMappingURL=union.js.map