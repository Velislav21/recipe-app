export function calculateTime(timeInMinutes: number) {
    let calculatedTime: number | string = '';
    const timeInSeconds = timeInMinutes * 60

    let hours = Math.floor(timeInSeconds / 3600);
    let minutes: number | string = Math.floor((timeInSeconds % 3600) / 60);

    if (minutes <= 9) {
        minutes = `0${minutes}`
    }
    if (hours >= 1) {
        return calculatedTime = `${hours} hr ${minutes} min`
    }
    return `${calculatedTime = minutes} minutes`;
}