(()=> {

    class Apocalipsis {
        static intance: Apocalipsis;

        private constructor(public name: string) {}

        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis el único');
            }

            return Apocalipsis.intance;
        }

        changeName(newName: string) {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis2.changeName('Xavi')

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3)


})()