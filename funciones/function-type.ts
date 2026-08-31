(()=> {

    const addNumbers = ( a: number, b: number ) => a + b;

    const greet = ( name: string ) => `Hola ${name}`;

    const saveTheWorld = () => 'El mundo esta salvado';

    let myFunction: () => string;

    // myFunction = addNumbers;
    // console.log(myFunction(10, 20))

    // myFunction = greet;
    // console.log(myFunction('hugo'));

    myFunction = saveTheWorld;
    console.log(myFunction())
})()