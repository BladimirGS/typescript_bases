(()=> {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers : ['velocidad, tiempo']
    }

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark Ken',
        age: 60,
        powers: ['volar, fuerza'],
        getName() {
            return this.name
        }
    }

    console.log(flash.getName?.())
})()