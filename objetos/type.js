"use strict";
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad, tiempo']
    };
    let superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['volar, fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
