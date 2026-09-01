"use strict";
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var _a;
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad, tiempo']
    };
    var superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['volar, fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
(function () {
    var _a;
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad, tiempo']
    };
    var superman = {
        name: 'Clark Ken',
        age: 60,
        powers: ['volar, fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
(function () {
    var myCustomVariable = 'Hugo';
})();
(function () {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    number.push(11);
})();
(function () {
    var isSuperman = true;
    console.log({ isSuperman: isSuperman });
})();
