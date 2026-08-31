"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado';
    let myFunction;
    // myFunction = addNumbers;
    // console.log(myFunction(10, 20))
    // myFunction = greet;
    // console.log(myFunction('hugo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
