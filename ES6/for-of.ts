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

    const avengers: hero[] = [iroman, thor, capitanAmerica];

    for (const a of avengers) {
        console.log(a)
    }
})()