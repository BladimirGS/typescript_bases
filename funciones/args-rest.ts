(()=>{

    const fullName = (firstname: string, ...restArgs: string[]): string => {
        return `${firstname} ${restArgs.join(' ')}`
    }

    const superman = fullName('clark', 'ken', 'jj');

    console.log(superman);

})()