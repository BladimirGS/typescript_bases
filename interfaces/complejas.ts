(()=> {

    interface hero {
        name: string,
        age?: number,
        address: address,
        getFullAddress (id: string): string
    }

    interface address {
        id: number,
        zip: string,
        city: string
    }

    let client1: hero = {
        name: 'Barry Allen',
        age: 24,
        address: {
            id: 1,
            zip: 'CY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city
        }
    }

    let client2: hero = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 2,
            city: 'Toronto',
            zip: 'K2S USA'
        },
        getFullAddress(id: string) {
            return this.address.city
        }
    }

})()