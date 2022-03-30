import { addZero } from './addZero'

export const createWeekRange = (start, end) => {
    const range = end.split('-')[0] - start.split('-')[0]
    const arr = []
    const date = (number) => Number(start.split('-')[0]) + number + '-' + end.split('-')[1]

    for (let i = 0; i <= range; i++) {
        arr.push(addZero(new Date(new Date().getFullYear(), date(i).split('-')[1] - 1, date(i).split('-')[0]).getDate()) + '-' + addZero(new Date(new Date().getFullYear(), date(i).split('-')[1] - 1, date(i).split('-')[0]).getMonth() + 1))
    }
    return arr

}