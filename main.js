"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const iroman = {
        name: 'iroman',
        weapon: 'armadura'
    };
    const thor = {
        name: 'thor',
        weapon: 'martillo'
    };
    const capitanAmerica = {
        name: 'capitan america',
        weapon: 'escudo'
    };
    const { name } = thor, res = __rest(thor, ["name"]);
    console.log(name, res.weapon);
    const avengers = [iroman, thor, capitanAmerica];
    const [, heroe2, heroe3] = avengers;
    console.log(heroe2, heroe3);
})();
(() => {
    const iroman = {
        name: 'iroman',
        weapon: 'armadura'
    };
    const thor = {
        name: 'thor',
        weapon: 'martillo'
    };
    const capitanAmerica = {
        name: 'capitan america',
        weapon: 'escudo'
    };
    const avengers = [iroman, thor, capitanAmerica];
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map