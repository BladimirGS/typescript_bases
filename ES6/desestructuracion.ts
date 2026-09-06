(()=>{

    type hero = {
        name: string,
        weapon: string
    }

    const iroman: hero = {
        name: 'iroman',
        weapon: 'armadura'
    }

    const thor: hero = {
        name: 'thor',
        weapon: 'martillo'
    }

    const capitanAmerica: hero = {
        name: 'capitan america',
        weapon: 'escudo'
    }
    
    const { name, ...res } = thor;

    console.log(name, res.weapon)

    const avengers: hero[] = [iroman, thor, capitanAmerica];

    const [ , heroe2, heroe3] = avengers;

    console.log(heroe2, heroe3)

})()