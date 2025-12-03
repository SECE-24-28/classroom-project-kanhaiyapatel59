console.log("Hello World");
// loosely-types language or duck-typed language
x=10
console.log(x);

var name="Kanhaiya"
name=true
console.log(name);

/*
function - declaration
function function_name(parameters)
{code to be executed}

 */
function add(a,b){
    return a+b;
}
console.log("The sum of a&b :" + add(10,20));

function sub(c,d) {
    return c - d;
}
console.log("The difference of c&d :" + sub(10,5))

//ES6 features-EcmaScript6(2015)
var sum=(a,b) => {
 return a+b;   
}
console.log(sum(30,40));

// for loops 
for (let i=1;i<=5;i++){
    console.log("Number is :",i);
}

//to create the even numbers usign for loop
console.log("Using for loop to print even numbers:");
for (let i=2;i<=20;i+=2){
    console.log("Number is :",i);
}

//to create the even numbers usign while loop
console.log("Using while loop to print even numbers:");
let j=2;
while(j<=20){
    console.log(j);
    j+=2;
}

//array
console.log("Array example:");
var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr[5]);//output:6

//to print even numbers from array
console.log("Even numbers from array:");
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}
console.log(arr);

var arr=["Apple","Banana","Grapes","Mango",23,45,56,true];
arr.push("orange");//add at the end
console.log(arr);
arr.unshift(23);//add at the begin 
console.log(arr);  
arr.pop();// remove from the end
console.log(arr);
arr.shift();//remove from the begin
console.log(arr);

//higher order fun
function a(arg){
    arg(a);
    console.log("Inside function a");

}
function b(){
    console.log("Inside function b");
}
a(b);

