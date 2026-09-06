(()=> {

    class avenger {

        constructor ( name = 'No name', power = 0 ){
            this.name = name;
            this.power = power;
        }
    }

    class flyingAvenger extends avenger {

        constructor( name, power ) {
            super( name, power );
            this.flying = true;
        }
    }

    const hulk = new avenger('Hulk', 9001)
    const falcon = new flyingAvenger('Falcon', 50)

    console.log(hulk)
    console.log(falcon)

})()