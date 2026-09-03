(()=> {

    const batman: string = `Batman`

    // console.log(typeof(batman))

    // console.log(batman.toUpperCase())

    console.log(batman[7]?.toUpperCase() || 'Nada');
})()