// assi 1
//rahma mohamed
//1 
let x ="123"
let x = Number ("123") + 7
console.log(x)

//2
let is_true = 0
if (is_true) {
    console.log("hii")
}
else{
    console.log("invalid")
}

//3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  
  }
  console.log(i); 
}

//4

let x =[1,2,3,4,5];
let evens = x.filter(x => x % 2 === 0);
console.log(evens); 

//5
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; 
console.log(merged); 

//6
let num = 2; 

switch (num) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday"); 
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
        break;
}


//7
 let words = ['a', 'ab', 'abc'];
let lengths = words.map(function(word) {
return word.length;
});
console.log(lengths); 

//8
function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("divisible by both");
  }else{
    console.log("not divisible by both")
  }
}
checkDivisibility(15);

//9
const square = (num) => num * num;
console.log(square(5)); 

//10
function getPersonInfo(person) {
  const name = person.name;
  const age = person.age;
  return name + " is " + age + " years old";
}
const person = { name: 'John', age: 25 };
console.log(getPersonInfo(person));

//11
function sumAllNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  
  return sum;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); 


//12
function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);

  });
}
delayMessage().then((message) => {
  console.log(message);
});



//13
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [1, 3, 7, 2, 4];
console.log(findLargest(numbers));


//14

function getObjectKeys(obj) {
  return Object.keys(obj);
}
const person = { name: "John", age: 30 };
console.log(getObjectKeys(person)); 


//15
function splitWords(text) {
  return text.split(" ");
}
const sentence = "The quick brown fox";
console.log(splitWords(sentence))



//B. Part 2: Essay Questions
//1
//for Each //هنا دى خاصه بالمصفوفات بقدر اعملها callback function ومش بستخدم continue او break

//for of //هى عباره عن loop اقدر اكرر بيها اى حاجه زى المصفوفات عادى واقدر استخدم فيها ال continueو break

//2 
//hoisting // هنا بيلف على الفايل كله ويعرف كل ال varible زى ال var
console.log("rahma")
var x = "rahma"
// هناهيطبع رحمه عادى رغم انى معرفتهاش الاول عشان استخدمت ال var وبتشمل ال hoisting

//Temporal Dead Zone
// هنا عكس ال hoisting مش بلف على الملف كله ولازم تعرفلى القيمه الاول زى let &const
let y ="mohamed"
console.log("mohamed")

//هنا عرفت القيمه الاول 

//3
//Abstract Equality (==) //  مقانه بين القيم +تحويل ال  string ل ارقام 
var boolan = 5 == "5"; 
//   هنا الاتنين = بعض 
//Strict Equality (===) // هنا مقارنه بين القيم و النوع 
var boolan = 5 === "5"; 
//هنا القيم != بعض 

//4 
//try-catch /بتوقف احتماليه حدوث اى ايرور ممكن يحصل و مهمه فى ال async لانها لو العمليه رجعت بنتيجه غلط ال try-catch بتوقفها 




//5
//Type Conversion / هنا بحول ال string لرقم يدوى
let x ="123"
let x = Number ("123") + 7
console.log(x)


//Type Coercion /هنا بحول ال string ل رقم تلقائى 
let result = "10" - 2; 
console.log(result); 

  