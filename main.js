"use strict";
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
    for (const a of avengers) {
        console.log(a);
    }
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('viejo getName');
    };
})();
