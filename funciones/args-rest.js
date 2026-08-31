"use strict";
(() => {
    const fullName = (firstname, ...restArgs) => {
        return `${firstname} ${restArgs.join(' ')}`;
    };
    const superman = fullName('clark', 'ken', 'jj');
    console.log(superman);
})();
