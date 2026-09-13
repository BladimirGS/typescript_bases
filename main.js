"use strict";
(() => {
    class Mutante {
        mutanPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
});
(() => {
    let client1 = {
        name: 'Barry Allen',
        age: 24,
        address: {
            id: 1,
            zip: 'CY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    let client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 2,
            city: 'Toronto',
            zip: 'K2S USA'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map