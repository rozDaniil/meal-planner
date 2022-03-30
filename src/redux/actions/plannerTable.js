import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";

export const setCurrentWeek = (obj) => ({
    type: 'SET_CURRENT_WEEK',
    payload: obj,
})

export const setShowedWeek = (obj) => ({
    type: 'SET_SHOWED_WEEK',
    payload: obj,
})

export const setNextWeek = () => ({
    type: 'NEXT_WEEK',
})

export const setPrevWeek = () => ({
    type: 'PREV_WEEK',
})

export const setMenu = (obj) => ({
    type: 'SET_MENU',
    payload: obj,
})

export const setBreakfast = (obj) => ({
    type: 'SET_BREAKFAST',
    payload: obj,
})

export const setLunch = (obj) => ({
    type: 'SET_LUNCH',
    payload: obj,
})

export const setDinner = (obj) => ({
    type: 'SET_DINNER',
    payload: obj,
})