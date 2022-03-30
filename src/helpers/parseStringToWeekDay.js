export const parceStringToWeekDay = (string) => new Date(
    new Date().getFullYear(),
    string.split("-")[1] - 1,
    string.split("-")[0]
).getDay()