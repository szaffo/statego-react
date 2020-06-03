export function showError(text) {
    return {
        type: 'ERROR',
        text
    }
}

export function errorOff() {
    return {
        type: 'ERROR_OFF'
    }
}