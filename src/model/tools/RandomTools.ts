export const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const getRandomString = () => Math.random().toString(16).substring(2, 8);
