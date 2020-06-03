export const errorReducer = (error = {
    text: '',
    on: false
}, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                text: action.text,
                on: true
            }

        case 'ERROR_OFF':
            return {
                text: '',
                on: false
            }

        default:
            return error;
    }
}