export const dateToISOString = (date: Date)=>{
    const isoDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    return isoDate
}