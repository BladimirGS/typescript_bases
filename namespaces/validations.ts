namespace validations {

    export const validationText = (text: string): boolean => {
        return ( text.length > 3 ) ? true : false
    }

    export const validateDate = (miDate: Date): boolean => {
        return ( isNaN(miDate.valueOf()) )
            ? false
            : true
    }
}

console.log(validations.validationText('Bladi'))