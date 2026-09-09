(() => {
    class Avenger {
        // private name: string;
        // private team: string;
        // public fullName?: string;
        static avgAge: number = 35;

        constructor(
            private name: string,
            private team: string,
            public fullName?: string,
        ) {}

        bio() {
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avenger = new Avenger("Antman", "Capitan", "scott Lang");
    // console.log(antman);

    // console.log(antman.bio())
})();
