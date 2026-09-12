(()=> {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado')
        }

        protected getRealName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public ismutante: boolean
        ) {
            super(name, realName)
            console.log('Constructor Xmen llamado')
        }

        get fullName(): string {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            this.name = name;
        }

        getRealNameDesdeXmen() {
            console.log(super.getRealName())
        }

    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true)

    // wolverine.fullName = 'Hugo';
    // console.log(wolverine.fullName)

})()