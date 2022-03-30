const initialState = {
    breakfast: {},
    lunch: {},
    dinner: {},
    currentWeek: [],
    firstDay: null,
    lastDay: null,
}

const WEEK_LENGTH = 7
const prevDateFromString = (date, value) => date.split('-')[0] - value + '-' + date.split('-')[1]
const nextDateFromString = (date, value) => Number(date.split('-')[0]) + value + '-' + date.split('-')[1]

const plannerTable = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_WEEK':
            return {
                ...state,
                currentWeek: action.payload
            }
        case 'SET_SHOWED_WEEK':
            return {
                ...state,
                firstDay: action.payload[0],
                lastDay: action.payload[1],
            }
        case 'SET_MENU':
            return {
                ...state,
                breakfast: action.payload.breakfast,
                lunch: action.payload.lunch,
                dinner: action.payload.dinner,
            }

        case 'SET_BREAKFAST':
            const breakfastPayload = action.payload.dataAtt

            const breakfastCopy = {
                ...state.breakfast,
                [action.payload.id]: {
                    ...state.breakfast[action.payload.id],
                    [action.payload.firstDay]: breakfastPayload
                }
            }
            return {
                ...state,
                breakfast: breakfastCopy
            }
        case 'SET_LUNCH':
            const lunchPayload = action.payload.dataAtt

            const lunchCopy = {
                ...state.lunch,
                [action.payload.id]: {
                    ...state.breakfast[action.payload.id],
                    [action.payload.firstDay]: lunchPayload
                }
            }
            return {
                ...state,
                lunch: lunchCopy
            }
        case 'SET_DINNER':
            const dinnerPayload = action.payload.dataAtt

            const dinnerCopy = {
                ...state.dinner,
                [action.payload.id]: {
                    ...state.breakfast[action.payload.id],
                    [action.payload.firstDay]: dinnerPayload
                }
            }
            return {
                ...state,
                dinner: dinnerCopy
            }
        case 'PREV_WEEK':
            return {
                ...state,
                firstDay: prevDateFromString(state.firstDay, WEEK_LENGTH),
                lastDay: prevDateFromString(state.lastDay, WEEK_LENGTH),
            }
        case 'NEXT_WEEK':
            return {
                ...state,
                firstDay: nextDateFromString(state.firstDay, WEEK_LENGTH),
                lastDay: nextDateFromString(state.lastDay, WEEK_LENGTH),
            }
        default:
            return state
    }
}

export default plannerTable