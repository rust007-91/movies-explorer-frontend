export const convertDuration = (duration) => {
    let hours = Math.trunc(duration/60);
    let min = duration % 60;
    return hours + "ч" + min + "м";
};