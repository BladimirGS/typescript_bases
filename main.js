"use strict";
var validations;
(function (validations) {
    const validationText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDate = (miDate) => {
        return (isNaN(miDate.valueOf()))
            ? false
            : true;
    };
})(validations || (validations = {}));
//# sourceMappingURL=main.js.map