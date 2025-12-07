export const NUM=10;
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

//----------------------
const mul=(a,b) => a * b;
const div=(a,b) => a / b;
export {mul,div};//named export

//----------------------
const print=(num) => {
    console.log('Result is :',num);
}

export default print;;
