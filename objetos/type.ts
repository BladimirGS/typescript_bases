(()=> {

    type hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let flash: hero = {
        name: 'Barry Allen',
        age: 24,
        powers : ['velocidad, tiempo']
    }

    let superman: hero = {
        name: 'Clark Ken',
        age: 60,
        powers: ['volar, fuerza'],
        getName() {
            return this.name
        }
    }

    console.log(flash.getName?.())
})()