export function getDateStringUtil(data) {
    const date = new Date(data * 1000);
    const dateString = date.toLocaleDateString(); // Дата в формате "MM/DD/YYYY"
    const timeString = date.toLocaleTimeString(); // Время в формате "HH:MM:SS"
    return [dateString, timeString]
     //return `заходил ${dateString} в ${timeString}`
}