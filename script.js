// console.log("Hello World");
// // loosely-types language or duck-typed language
// x=10
// console.log(x);

// var name="Kanhaiya"
// name=true
// console.log(name);

// /*
// function - declaration
// function function_name(parameters)
// {code to be executed}

//  */
// function add(a,b){
//     return a+b;
// }
// console.log("The sum of a&b :" + add(10,20));

// function sub(c,d) {
//     return c - d;
// }
// console.log("The difference of c&d :" + sub(10,5))

// //ES6 features-EcmaScript6(2015)
// var sum=(a,b) => {
//  return a+b;   
// }
// console.log(sum(30,40));

// // for loops 
// for (let i=1;i<=5;i++){
//     console.log("Number is :",i);
// }

// //to create the even numbers usign for loop
// console.log("Using for loop to print even numbers:");
// for (let i=2;i<=20;i+=2){
//     console.log("Number is :",i);
// }

// //to create the even numbers usign while loop
// console.log("Using while loop to print even numbers:");
// let j=2;
// while(j<=20){
//     console.log(j);
//     j+=2;
// }

// //array
// console.log("Array example:");
// var arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr[5]);//output:6

// //to print even numbers from array
// console.log("Even numbers from array:");
// for (let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }
// console.log(arr);

// var arr=[1, 2, 3, 4, 5];
// arr.push("orange");//add at the end
// console.log(arr);
// arr.unshift(23);//add at the begin 
// console.log(arr);  
// arr.pop();// remove from the end
// console.log(arr);
// arr.shift();//remove from the begin
// console.log(arr);

// //higher order fun
// // function accepting another function as argument
// //function returning another function
// function a(arg){
//     arg(a);
//     console.log("Inside function a");

// }
// function b(){
//     console.log("Inside function b");
// }
// a(b);


// //Higher order function with parameters

// function a(arg1 ,arg2, arg3 ){
//         console.log('inside function a',arg2);
//         arg1(arg3);
//     } function b(arg) {
//         console.log('inside function b',arg);
//     }
//     a(b,10,20)

//     function multiply(factor){
//         return function(x){
//             return x*factor;
//         };
//     }
//     const mulby3=multiply(3);
//     const mulby4=multiply(4);

//     console.log(mulby3(20));
//     console.log(mulby4(30));

//forEach method
// const num = [1, 2, 3, 4, 5];

// num.forEach((el) => {
//     console.log("el =>", el);
// });

// console.log("Multiply by 2 using forEach:");
// num.forEach((el) => {
//     console.log(el * 2);
// });

//map method
// const arr=[1 ,2,3,4,5];
// const res=arr.map((el)=>{
//     return el*2;
// });
// console.log(res);
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//filter method
// const arr=[1,2,3,4,5,6,7,8,9,10];
// const res=arr.filter((el)=>{
//     return el%2==0;
// });
// console.log(res);

// const arr1=[12 , 23 , 'v' , 't' , 34 ,'e']
// const res1 = arr1.filter((el)=>{
//     return typeof el === 'string';
// })
// console.log(res1);

// const arr=[10,false,1.2,-0.7,null,undefined,"hello",true];
// //[10,1.2,-0.7,"hello",true]
// const res=arr.filter((el)=>{
//     return Boolean(el) || typeof el === 'string';
// });
// console.log(res);

//String methods
// const firstName="Kanhaiya";
// const lastName="Patel";
// const fullName = `${firstName} ${lastName}`;
// console.log ("Full name is : ", fullName);
// console.log(fullName.split(" "));
// console.log(fullName.toUpperCase());

// const countWords = (str) => {
//     return str.split(" ").length;
// }


// let marks={
//     math:90,
//     physics:85,
//     chemistry:88
// }
// for (let subject in marks){
//     console.log(subject, ":", marks[subject]);
// }   

// let students=[
//     {name:"Arun",age:19,grade:8.5},
//     {name:"Barun",age:14,grade:8.7},
//     {name:"Mike",age:13,grade:7}
// ];
// // students.forEach((el) => {
// //     console.log(`${el.name}`,`${el.age}`, `${el.grade}`);
// // });
// //students with grade > 8
// const res=students.filter((students)=> students.grade>8);
// const names=res.map((students)=> students.name);
// console.log("Students with grade > 8 :", `${names.join(", ")}`);


// ----------------------------------------------------------
//-----------------------------------------------------------
//==================================================
//DOM Manipulation
// Accessing DOM element
// const headingElement = document.getElementById('heading');
// console.log(headingElement);

// Initial changes
// headingElement.innerHTML = "No heading";
// headingElement.style.color = 'red';
// headingElement.style.border = '1px solid black';
// headingElement.className = "new-class";

// const btnElement = document.getElementById('btn');

// // Event Listener
// btnElement.addEventListener('click', () => {
//     headingElement.innerHTML = "Heading changed";
//     headingElement.style.color = 'blue';
//     headingElement.style.border = '2px solid green';
// });
//------------------------------------------------------------------
//==================================================================

//simple quiz app
//  const quiz = [
//     {
//       q: "What is the capital of Nepal?",
//       options: ["Kathmandu", "Delhi", "Dhaka", "Colombo"]
//     },
//     {
//       q: "Which planet is known as the Red Planet?",
//       options: ["Earth", "Mars", "Jupiter", "Venus"]
//     },
//     {
//       q: "Who wrote the Ramayana?",
//       options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"]
//     }
//   ];

//   let index = 0;

//   const progress = document.getElementById("progress");
//   const question = document.getElementById("question");
//   const options = document.getElementById("options");
//   const nextBtn = document.getElementById("nextBtn");
//   const backBtn = document.getElementById("backBtn");

//   load();


  

//   function load() {
//     progress.textContent = `Question ${index + 1} of ${quiz.length}`;
//     question.textContent = quiz[index].q;

//     options.innerHTML = quiz[index].options
//       .map(opt => `
//         <label class="flex items-center gap-2">
//           <input type="radio" name="ans" value="${opt}">
//           ${opt}
//         </label>
//       `).join("");

//     backBtn.disabled = index === 0;
//     backBtn.classList.toggle("opacity-50", index === 0);
//   }

//   nextBtn.addEventListener("click", () => {
//     if (index < quiz.length - 1) {
//       index++;
//       load();
//     }
//   });

//   backBtn.addEventListener("click", () => {
//     if (index > 0) {
//       index--;
//       load();
//     }
//   });
//------------------------------------------------------------------
//==================================================================


// const arr=[10,20,30,40,50];
// const[a,b,c]=arr;
// console.log(a);


// const obj = {
//     name: "Kanhaiya",
//     age: 20,
//     weight: 55
// };

// const {
//     name,
//     age,
//     height = 5.5, // default value
//     weight: w     // alias name
// } = obj;

// console.log(w);


// import print, {add, NUM} from './math.js';
// console.log(add(10, 20));
// console.log("NUM is :", NUM);

// console.log('START')
// setTimeout(() => {
//     console.log('INSIDE')
// },3000)
// console.log("END");

// let a=10;
// const p1=new Promise((resolve, reject) =>  {
//   setTimeout(() => {
//     if(a%2==0){
//     resolve("Even")
//     }
//     else{
//       resolve("Odd")
//     }
//   },1000)
// })


// p1.then((res) => {
//   console.log("Result : ", res)
// }).catch((err) => {
//   console.log("Error: ",err)
// })

// console.log(p1)

//=============================================
// let a = 11;
// const checkEven = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve("even");
//         } else {
//             reject("odd");
//         }
//     });
// };
// const checkLessThan10 = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num < 10) {
//             resolve("less than 10");
//         } else {
//             reject("greater than 10");
//         }
//     });
// };
// checkEven(a)
//     .then((res) => {
//         console.log("result:", res);
//         return checkLessThan10(a);
//     })
//     .then((res) => {
//         console.log("result:", res);
//     })
//     .catch((err) => {
//         console.log("error:", err);
//     });


// //async / await
// const checkCondition = async() => {
//   let a=10;
//   console.log("Starting........")
//   try{
//   const res = await checkEven(a)
//   console.log("Result : ", res);
//   const res2 = await checkLessThan10(a)
//   console.log("Result2 : ", res2);
//   } catch(err){
//     console.log("Error : ", err);
//   }
// }

// checkCondition();

//==========================================================
//==========================================================

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => {
//     console.log(res);
//     return res.json();
//   }).then(json => {
//     console.log(json);
//   }).catch(err => {
//     console.log("Error:", err);
//   })

//   const fetchData = async() => {
//     try{
//       const res = await fetch('https://jsonplaceholder.typecode.com/posts/1')
//       const data = await res.join()
//       console.log(json)
//     }
//     catch(err){
//       console.log("Error:", err);
//     }
//   }
//   fetchData();


//==========================================================
//==========================================================

// Fetch user data dynamically based on counter
const fetchData = async (id) => {
  const detailDiv = document.getElementById("detail");
  detailDiv.innerHTML = `<div class="text-center animate-pulse text-gray-300">Loading...</div>`;

  try {
    // Correct API endpoint for user info
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("Invalid ID");

    const user = await res.json();

    detailDiv.innerHTML = `
      <div><strong class="text-yellow-400">Name:</strong> ${user.name}</div>
      <div><strong class="text-yellow-400">Email:</strong> ${user.email}</div>
      <div><strong class="text-yellow-400">Phone:</strong> ${user.phone}</div>
      <div><strong class="text-yellow-400">Website:</strong> ${user.website}</div>
      <div><strong class="text-yellow-400">Company:</strong> ${user.company.name}</div>
      <div><strong class="text-yellow-400">Address:</strong> ${user.address.street}, ${user.address.city}</div>
    `;
  } catch (err) {
    detailDiv.innerHTML = `<div class="text-center text-red-400">⚠ Unable to fetch data</div>`;
  }
};

// Initialize counter
let count = 1;
document.getElementById("count").innerText = count;

// Initial fetch
fetchData(count);

// Button Events
document.getElementById("plus").onclick = () => {
  if (count < 10) count++; // jsonplaceholder has only 10 users
  document.getElementById("count").innerText = count;
  fetchData(count);
};

document.getElementById("minus").onclick = () => {
  if (count > 1) count--;
  document.getElementById("count").innerText = count;
  fetchData(count);
};



