const initialState = {
    isOpen: false
}

const sidebar = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SIDEBAR':
            return {
                ...state,
                isOpen: action.payload
            }
        default:
            return state
    }
}

export default sidebar