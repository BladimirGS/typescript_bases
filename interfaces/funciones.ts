(()=> {

    interface addTwoNumber {
        (a: number, b: number): number
    }

    let addNumberFunction: addTwoNumber;

    addNumberFunction = (a: number, b: number)=> {
        return 10
    }

})