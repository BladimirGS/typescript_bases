(()=> {

    type hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: string | number | hero = 'Hugo'
})()