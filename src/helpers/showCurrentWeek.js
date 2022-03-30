import { addZero } from './addZero'
export const weekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const getCurrentWeek = () => {
    const currentWeek = []
    const ONE_DAY = 1
    const WEEK_LENGTH = 6
    const curr = new Date();
    const first = curr.getDate() - curr.getDay() + ONE_DAY;
    const last = first + WEEK_LENGTH;

    const firstday = new Date(curr.setDate(first)).getDate();
    const firstNameDay = new Date(curr.setDate(last)).getDay();
    currentWeek.push(firstday, firstNameDay)
    return currentWeek
}

export const showCurrentWeek = () => {
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
        nextSevenDays.push({
            date: addZero(getCurrentWeek()[0] + i) +
                '-' +
                addZero(new Date(new Date().setDate(new Date().getDate() + i)).getMonth()),
            day: weekDay[getCurrentWeek()[1] + i],
        });
    }
    return nextSevenDays;
};