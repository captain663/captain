// FIXME: Communicating with the user (dialogue boxes in js)
/*
1. ما الفرق بين alert() و prompt() و confirm() في JavaScript؟ اذكر مثالًا على كلٍ منها.


2. اكتب كودًا يستخدم prompt() لطلب اسم المستخدم، ثم يعرض رسالة ترحيبية باستخدام alert() تحتوي على الاسم.


3. لديك الكود التالي، ماذا ستكون نتيجة تنفيذه إذا أدخل المستخدم "Ali"؟

const name = prompt("What is your name?");
alert("Welcome, " + name + "!");


4. اكتب برنامجًا بسيطًا يسأل المستخدم عن تأكيد حذف عنصر باستخدام confirm()، وإذا اختار "OK"، يعرض رسالة "تم الحذف"، وإذا اختار "Cancel"، يعرض "تم الإلغاء".


5. كيف يمكن استخدام نتيجة confirm() داخل شرط if؟ وضّح ذلك بمثال عملي.
*/

// FIXME: Built-In Functions
/*
1. ما الفرق بين parseInt() و parseFloat()؟ ومتى تستخدم كل واحدة؟ مع مثال بسيط لكل واحدة.


2. ما نتيجة السطر التالي؟ ولماذا؟

console.log(parseInt("123.45px"));


3. اكتب برنامجًا يطلب من المستخدم رقمًا باستخدام prompt()، ثم يستخدم isNaN() للتحقق إن كانت القيمة المدخلة رقمًا صالحًا أم لا، واطبع النتيجة باستخدام alert().


4. ما الفرق بين isNaN() و isFinite()؟ اشرح مع مثال لكلٍ منهما.


5. ما نتيجة السطرين التاليين؟ ولماذا؟

console.log(isFinite("100"));      // ?
console.log(isFinite("Hello"));    // ?

*/

// FIXME: Custom Function
/*
1. ما الفرق بين الدالة المعرفة باستخدام function التقليدية والدالة السهمية (arrow function)؟ اذكر مثالًا بسيطًا لكلٍ منهما.


2. اكتب دالة اسمها greetUser تستقبل اسم المستخدم كمعامل (parameter) وتعرض رسالة ترحيب باستخدام console.log().
> مثال ناتج متوقع:
greetUser("Youssef");
// "Hello, Youssef!"


3. اكتب دالة sum تأخذ رقمين كوسيطين وتُرجع الناتج. ثم استخدم الدالة لطباعة مجموع 5 و 8.


4. ما الفرق بين return و console.log() داخل الدوال؟ وضّح ذلك بمثال.


5. عندك هذا الكود، ما هي النتيجة المتوقعة ولماذا؟
function multiplyByTwo(x) {
  return x * 2;
}
console.log(multiplyByTwo(5) + multiplyByTwo(3));

*/

// FIXME: String Methods
/*
Sure! Here are *5 beginner-to-intermediate level questions* about *JavaScript string methods*, all in English:

---

### ✅ Question 1:

What is the output of the following code?


let str = "JavaScript";
console.log(str.toUpperCase());


*A)* javascript
*B)* JAVASCRIPT
*C)* JavaScript
*D)* Error

---

### ✅ Question 2:

Which of the following methods is used to find the position of the first occurrence of a character in a string?

*A)* includes()
*B)* substring()
*C)* indexOf()
*D)* slice()

---

### ✅ Question 3:

What is the difference between slice() and substring() when using *negative indexes*?

---

### ✅ Question 4:

Fill in the blank:

js
let name = "Youssef";
console.log(name.________("sef")); // true


Which method correctly checks if the string contains "sef"?

*A)* search
*B)* indexOf
*C)* includes
*D)* match

---

### ✅ Question 5:

What will this code print?

js
let text = "Frontend Development";
console.log(text.slice(0, 8));


*A)* Development
*B)* Frontend
*C)* Frontend␣ (with space)
*D)* rontend

---

Let me know if you’d like these as an interactive quiz or printable worksheet!

*/

// FIXME: Array Methods
/*
أكيد! إليك *5 أسئلة بالإنجليزي* عن *JavaScript Array Methods* بمستوى *مبتدئ إلى متوسط*:

---

### ✅ Question 1:

What does the .push() method do in JavaScript?

*A)* Removes the first element of an array
*B)* Adds an element to the end of an array
*C)* Adds an element to the beginning of an array
*D)* Removes the last element of an array

---

### ✅ Question 2:

What is the output of this code?

js
let numbers = [10, 20, 30];
numbers.pop();
console.log(numbers);


*A)* [10, 20]
*B)* [10, 30]
*C)* [20, 30]
*D)* [10, 20, 30]

---

### ✅ Question 3:

Which method is used to *create a new array* by *transforming* each element of the original array?

*A)* forEach()
*B)* map()
*C)* filter()
*D)* reduce()

---

### ✅ Question 4:

What will this code return?

js
let letters = ["a", "b", "c"];
console.log(letters.join("-"));


*A)* "a-b-c"
*B)* ["a-b-c"]
*C)* ["a", "b", "c"]
*D)* "abc"

---

### ✅ Question 5:

Which array method is best suited for removing *elements that meet a specific condition*?

*A)* map()
*B)* reduce()
*C)* filter()
*D)* slice()

---

لو حابب أجهز لك نسخة PDF أو Google Form Quiz أو حتى HTML version للعرض، قول لي.

*/

// FIXME: Date Methods:
/*
تمام! إليك *5 أسئلة بالإنجليزي* عن *JavaScript Date Methods*، خاصة methods اللي بتبدأ بـ get، set، و to، بمستوى *مبتدئ إلى متوسط*:

---

### ✅ Question 1:

What does the getFullYear() method return?

*A)* The current day of the week
*B)* The current month (0–11)
*C)* The full 4-digit year
*D)* The current timestamp in milliseconds

---

### ✅ Question 2:

What is the output of this code?

js
let date = new Date("2025-07-09");
console.log(date.getMonth());


*A)* 7
*B)* 6
*C)* 8
*D)* 09

---

### ✅ Question 3:

Which method is used to *change* the day of the month in a Date object?

*A)* setDay()
*B)* changeDate()
*C)* setDate()
*D)* modifyDay()

---

### ✅ Question 4:

What does toISOString() return?

*A)* A human-readable date string
*B)* The timezone offset
*C)* A string in ISO 8601 format (e.g., 2025-07-09T10:15:30.000Z)
*D)* An object with date properties

---

### ✅ Question 5:

What is the purpose of setFullYear()?

*A)* To reset the time to 00:00:00
*B)* To change the full year of a Date object
*C)* To get the number of years between two dates
*D)* To add a year to the current date

---

هل تحب أضيف أسئلة تطبيق عملي بكود؟ أو محتاجهم في شكل اختبار PDF أو جوجل فورم؟

*/

// FIXME: For loop dealing with Array
/*
تمام! إليك *5 أسئلة بالإنجليزي* عن:

* for...in
* .forEach()
* .map()
* .filter()

كلها أسئلة *مبتدئ إلى متوسط*:

---

### ✅ Question 1:

Which loop is best for *iterating over object keys*?

*A)* for...of
*B)* for...in
*C)* map()
*D)* forEach()

---

### ✅ Question 2:

What is the main difference between map() and forEach()?

*A)* map() modifies the original array
*B)* forEach() returns a new array
*C)* map() returns a new array, forEach() returns undefined
*D)* forEach() is faster than map()

---

### ✅ Question 3:

What is the output of this code?

js
const arr = [1, 2, 3];
const newArr = arr.map(x => x * 2);
console.log(newArr);


*A)* [1, 2, 3]
*B)* [2, 4, 6]
*C)* undefined
*D)* 6

---

### ✅ Question 4:

Which method should you use to return *only* elements that meet a specific condition?

*A)* forEach()
*B)* map()
*C)* filter()
*D)* for...in

---

### ✅ Question 5:

What will this code print?

js
const obj = { name: "Ali", age: 30 };
for (let key in obj) {
  console.log(key);
}


*A)* "Ali", 30
*B)* undefined
*C)* name, age
*D)* Error

---

لو حابب نسخة تفاعلية أو تحطهم في اختبار للطلبة أو المتدربين، أقدر أجهزهم لك في Google Form أو HTML.

*/ 

// FIXME: IF-Else
/*
Sure! Here are *10 real-world coding scenarios in English* for practicing if / else in *JavaScript, at an **intermediate level*.
You can code each one, and send me your solution for feedback 💡

---

### ✅ *1. Login Check*

You have two variables: username and password.

* If username === "admin" and password === "1234" → print: "Welcome, Admin"
* Otherwise → print: "Invalid username or password"

---

### ✅ *2. Grade Evaluator*

You have a variable score.

* 90 and above → print: "A"
* 80–89 → print: "B"
* 70–79 → print: "C"
* Below 70 → print: "Fail"

---

### ✅ *3. Even or Odd*

You have a variable num.

* If it's even → print: "Even number"
* If it's odd → print: "Odd number"

---

### ✅ *4. Age Permission*

You have a variable age.

* If age is 18 or older → print: "You are allowed to vote"
* Else → print: "You are too young to vote"

---

### ✅ *5. Light Switch*

You have a variable lightStatus with values "on" or "off".

* If "on" → print: "The light is already on"
* If "off" → print: "Turning the light on..."
* Else → print: "Invalid status"

---

### ✅ *6. Temperature Check*

You have a variable temp.

* Above 30 → print: "It's hot"
* Between 15 and 30 → print: "It's moderate"
* Below 15 → print: "It's cold"

---

### ✅ *7. Discount Calculator*

You have:

* isMember (true or false)
* originalPrice
  If the user is a member → apply 20% discount
  If not → apply 5% discount
  Then print the final price.

---

### ✅ *8. Traffic Light*

You have a variable light that can be "red", "yellow", or "green".

* "red" → print: "Stop"
* "yellow" → print: "Get Ready"
* "green" → print: "Go"
* Any other value → print: "Invalid color"

---

### ✅ *9. Number Range*

You have a variable number.

* If it’s between 1 and 100 (inclusive) → print: "In range"
* Else → print: "Out of range"

---

### ✅ *10. Multiples Checker*

You have a variable num.

* If divisible by 3 and 5 → print: "Divisible by both"
* Else if divisible by 3 → print: "Divisible by 3"
* Else if divisible by 5 → print: "Divisible by 5"
* Else → print: "Not divisible by 3 or 5"

---

Pick one and send your code when you're ready — I’ll review and guide you through improvements or alternatives if needed 💻🧠
*/

// FIXME: Switch
/*
Excellent! 💪
Here are *10 real-world coding scenarios* to practice using the **switch statement** in *JavaScript, also at **intermediate level*:

---

### ✅ *1. Day of the Week*

You have a variable dayNumber from 1 to 7.
Use switch to print the corresponding day name:
1 = "Sunday", 2 = "Monday", ..., 7 = "Saturday"
If not between 1–7 → print "Invalid day"

---

### ✅ *2. Role Access*

Variable role can be: "admin", "editor", "viewer"

* "admin" → print: "Full access"
* "editor" → print: "Edit access"
* "viewer" → print: "Read-only access"
* Anything else → print: "No access"

---

### ✅ *3. HTTP Status Code*

Given a variable statusCode, use switch to print messages:

* 200 → "OK"
* 404 → "Not Found"
* 500 → "Server Error"
* Default → "Unknown status"

---

### ✅ *4. Grade Letter*

Given a variable grade as a letter ("A", "B", etc.):

* "A" → "Excellent"
* "B" → "Very Good"
* "C" → "Good"
* "D" → "Pass"
* "F" → "Fail"
* Default → "Invalid grade"

---

### ✅ *5. Language Greeting*

Given a variable lang with values like "en", "fr", "es":

* "en" → "Hello"
* "fr" → "Bonjour"
* "es" → "Hola"
* Default → "Unsupported language"

---

### ✅ *6. Calculator Operation*

You have:

* a = 10, b = 5, operation = "+" | "-" | "*" | "/"
  Use switch to perform the operation and print the result.

---

### ✅ *7. Browser Detection*

Variable browser = "chrome", "firefox", "safari", etc.
Print a custom message for each browser.
Default → "Browser not supported"

---

### ✅ *8. Fruit Price*

You have a variable fruit with values "apple", "banana", "orange"
Use switch to print the price of each fruit.
Default → "Fruit not available"

---

### ✅ *9. Traffic Signal*

Same as before, but now use switch:

* "red" → "Stop"
* "yellow" → "Wait"
* "green" → "Go"
* Default → "Invalid signal"

---

### ✅ *10. Month Name*

Given monthNumber from 1 to 12
Use switch to print the month name
If out of range → print "Invalid month"

---

When you're ready, send your implementation of any of these and I’ll give you feedback or improvements! 🔁📘

*/

// FIXME: For Loop
/*
    رائع! 👏
دلوقتي هديك *10 سيناريوهات تدريبية حقيقية* باستخدام **for loop** في JavaScript — كلها مناسبة لمستوى متوسط، وتركز على التفكير المنطقي واستخدام الـ loop بذكاء.

---

### ✅ *1. Sum of Numbers*

Use a for loop to calculate the *sum of numbers from 1 to 100*.
Then print the total.

---

### ✅ *2. Even Numbers Between 1 and 50*

Write a loop that prints all *even numbers* between 1 and 50.

---

### ✅ *3. Multiplication Table*

Given a number n = 5, use a for loop to print its multiplication table up to 10:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

---

### ✅ *4. Count Down*

Use a for loop to *count down from 10 to 1* and print each number.

---

### ✅ *5. Reverse a String*

Given a string like "hello"
Use a for loop to reverse it and print: "olleh"

---

### ✅ *6. Loop Through an Array*

Given this array:

js
let fruits = ["apple", "banana", "cherry"];


Use a for loop to print each fruit.

---

### ✅ *7. Sum of Odd Numbers in Array*

Given:

js
let numbers = [3, 6, 9, 12, 15];


Use a for loop to *sum only the odd numbers*, and print the total.

---

### ✅ *8. Count Vowels in a Word*

Given a string like "javascript"
Use a for loop to count how many vowels are in the word.
Print the result: Number of vowels: 3

---

### ✅ *9. Find the Maximum Number*

Given an array of numbers, use a for loop to find the *largest number* and print it:

js
let nums = [45, 23, 89, 12, 77];


---

### ✅ *10. Skip Multiples of 3*

Loop from 1 to 20, but *skip numbers divisible by 3*.
Use continue inside your for loop.

---

لما تخلص تطبيق أي سيناريو منهم، ابعتهولي أراجع عليه معك خطوة بخطوة ✨
ولو حابب كمان نسخ HTML تفاعلية أو PDF جاهز، ممكن أجهزهولك.

*/

// FIXME: While & Do-While Loop
/*
ممتاز 👏
هديك دلوقتي **5 سيناريوهات باستخدام while loop**
و **5 سيناريوهات باستخدام do...while loop** — كلهم بمستوى *مبتدئ إلى متوسط* في JavaScript.

---

## ✅ **5 Scenarios — while Loop**

### 1. Count from 1 to 10

Use a while loop to print numbers from 1 to 10.

---

### 2. Sum of Numbers Until 100

Start from 1, and keep adding numbers using a while loop until the *total becomes greater than or equal to 100*.
Print the final total and how many numbers were added.

---

### 3. User Login Attempts

You have a variable attempts = 3
Use a while loop to simulate retrying login up to 3 times.
Print: "Attempt 1: Login failed", etc.

---

### 4. Print Array Elements

Given:

js
let colors = ["red", "green", "blue", "yellow"];


Use a while loop to print each color.

---

### 5. Countdown from n to 0

Let n = 5
Use while to print:
5, 4, 3, 2, 1, 0
Then print: "Done!"

---

## ✅ **5 Scenarios — do...while Loop**

### 1. User Input Validation

Ask the user to enter a number using prompt()
Use a do...while loop to keep asking until the number is *greater than 0*.

---

### 2. Print Menu at Least Once

Simulate a menu system:

js
1. View Profile  
2. Edit Profile  
3. Logout


Use do...while to show the menu and repeat until the user chooses 3.

---

### 3. Print Numbers Until 5

Use do...while to print numbers starting from 0
Stop when the number reaches 5.

---

### 4. Keep Multiplying

Start with value = 1
Use do...while to multiply value *= 2 until it becomes greater than or equal to 100.
Print each step.

---

### 5. Simulate Coin Toss Until Heads

Simulate a coin toss with random values "Heads" or "Tails"
Use do...while to keep tossing until you get "Heads".
Print result of each toss.

---

ابدأ بأي سيناريو تحبه، ابعتلي الكود، وأنا هراجع عليه معاك خطوة بخطوة ✍
ولو تحب أجهزهم كـ quiz أو تطبيق تفاعلي، قول لي.

*/

// FIXME: Custom Function:
/*
ممتاز جدًا! 🔥
إليك *10 سيناريوهات حقيقية* لتطبيق **functions** في JavaScript، كلها بمستوى *مبتدئ إلى متوسط*، وبتغطي أنواع مختلفة زي:

* regular functions
* parameters
* return values
* function expressions
* arrow functions

---

## ✅ *10 JavaScript Function Practice Scenarios*

---

### 1. *Say Hello Function*

Create a function called sayHello that prints:
"Hello, welcome!"
Call it 3 times.

---

### 2. *Add Two Numbers*

Create a function add(a, b) that takes two numbers and returns their sum.
Example: add(5, 7) → returns 12

---

### 3. *Check Even or Odd*

Write a function isEven(num)

* If the number is even → return "Even"
* If odd → return "Odd"

---

### 4. *Area of a Rectangle*

Create a function calcArea(length, width)

* Returns the area (length × width)

---

### 5. *Convert Celsius to Fahrenheit*

Write a function toFahrenheit(celsius)
Formula: (celsius * 9/5) + 32

---

### 6. *Find Max of 3 Numbers*

Create a function findMax(a, b, c)

* Returns the largest of the three numbers

---

### 7. *Count Vowels in a String*

Function: countVowels(str)

* Counts how many vowels (a, e, i, o, u) are in a string
* Returns the count

---

### 8. *Reverse a String*

Write a function reverseString(str)

* Returns the reversed version of the input string
  Example: "hello" → "olleh"

---

### 9. *Check if Number is Prime*

Function: isPrime(num)

* Returns true if the number is prime, else false

---

### 10. *Arrow Function for Squaring*

Use an arrow function to define square(n)

* Returns n * n
  Then call it with different values.

---

تقدر تبدأ بأي سيناريو، تبعته، وأنا أراجع الحل وأديك تحسينات لو حبيت.
ولو عاوزهم كتمرين تفاعلي أو في HTML page أو Google Form، أقدر أجهزهولك كمان ✍💡

*/

// alert('Warning Message')

// prompt('Enter your name', 'Nour')

// confirm('Are you sure to detele this item')

// let name = prompt('Enter Your name!')
// console.log('Hello ' + name)
// console.log(Hello ${name})

// let input = parseInt(prompt('Enter your age'))
// console.log(input)
// let input2 = parseFloat(prompt('Enter your age'))
// console.log(input2)

// let data = isFinite(prompt('enter data'))
// console.log(data)
// let data2 = isNaN(prompt('enter data2'))
// console.log(data2)

// isString = (a) => {
//     const data = isNaN(a)
//     return data
// }
// console.log(isString('text'))
// console.log(isString(2025))

// isNumeric = b => isFinite(b)
// console.log(isNumeric('text'))
// console.log(isNumeric(2025))


// sum function
function sum(a, b) {
    return a + b;
}
console.log('Sum:', sum(5, 2)); // 7

// max function
function max(a, b) {
    return a > b ? a : b;
}
console.log('Max:', max(5, 2)); // 5

// min function
function min(a, b) {
    return a < b ? a : b;
}
console.log('Min:', min(5, 2)); // 2

// odd || even function
function oddOrEven(n) {
    return n % 2 === 0 ? 'Even' : 'Odd';
}
console.log('5 is', oddOrEven(5)); // Odd
console.log('2 is', oddOrEven(2)); // Even

// مثال عملي على استخدام الدوال السابقة مع أرقام مختلفة
console.log('Sum:', sum(10, 15));
console.log('Max:', max(10, 15));
console.log('Min:', min(10, 15));
console.log('10 is', oddOrEven(10));
console.log('15 is', oddOrEven(15));

// الحل: 1. Say Hello Function
function sayHello() {
    console.log("Hello, welcome!");
}
sayHello(); // الحل
sayHello(); // الحل
sayHello(); // الحل

// الحل: 2. Add Two Numbers
function add(a, b) {
    return a + b;
}
console.log('Add:', add(5, 7)); // الحل

// الحل: 3. Check Even or Odd
function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log('isEven(5):', isEven(5)); // الحل
console.log('isEven(8):', isEven(8)); // الحل

// الحل: 4. Area of a Rectangle
function calcArea(length, width) {
    return length * width;
}
console.log('Area:', calcArea(5, 3)); // الحل

// الحل: 5. Convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log('Fahrenheit:', toFahrenheit(30)); // الحل

// الحل: 6. Find Max of 3 Numbers
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log('Max:', findMax(5, 8, 3)); // الحل

// الحل: 7. Count Vowels in a String
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log('Vowels:', countVowels("hello world")); // الحل

// الحل: 8. Reverse a String
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log('Reverse:', reverseString("hello")); // الحل

// الحل: 9. Check if Number is Prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log('isPrime(7):', isPrime(7)); // الحل
console.log('isPrime(10):', isPrime(10)); // الحل

// الحل: 10. Arrow Function for Squaring
const square = n => n * n; // الحل
console.log('Square:', square(5)); // الحل
console.log('Square:', square(9)); // الحل






// ===================== حلول الأسئلة =====================
// الحل: الفرق بين alert و prompt و confirm
// alert() لعرض رسالة فقط للمستخدم (بدون إدخال)
// مثال: alert('مرحبا بك!');
// prompt() لطلب إدخال من المستخدم ويعيد القيمة المدخلة
// مثال: let name = prompt('ادخل اسمك');
// confirm() لعرض رسالة تأكيد (OK/Cancel) ويعيد true أو false
// مثال: let res = confirm('هل أنت متأكد؟');

// الحل: كود يطلب اسم المستخدم ويعرض رسالة ترحيب
// let userName = prompt('ادخل اسمك');
// alert('مرحبا يا ' + userName);

// الحل: إذا أدخل المستخدم "Ali" في الكود التالي:
// const name = prompt("What is your name?");
// alert("Welcome, " + name + "!");
// النتيجة: تظهر رسالة "Welcome, Ali!"

// الحل: برنامج تأكيد حذف عنصر
// let confirmDelete = confirm('هل تريد حذف العنصر؟');
// if (confirmDelete) {
//   alert('تم الحذف');
// } else {
//   alert('تم الإلغاء');
// }

// الحل: استخدام نتيجة confirm داخل شرط if
// let res = confirm('هل تريد المتابعة؟');
// if (res) {
//   alert('تمت المتابعة');
// } else {
//   alert('تم الإلغاء');
// }

// الحل: الفرق بين parseInt و parseFloat
// parseInt() يحول النص إلى عدد صحيح (بدون كسور)
// مثال: parseInt('123.45') يرجع 123
// parseFloat() يحول النص إلى عدد عشري (مع الكسور)
// مثال: parseFloat('123.45') يرجع 123.45

// الحل: نتيجة السطر التالي:
// console.log(parseInt("123.45px")); // يرجع 123 لأن parseInt يأخذ الأرقام حتى أول رمز غير رقمي

// الحل: برنامج يتحقق من الرقم المدخل
// let num = prompt('ادخل رقم');
// if (isNaN(num)) {
//   alert('القيمة ليست رقم صحيح');
// } else {
//   alert('القيمة رقم صحيح');
// }

// الحل: الفرق بين isNaN و isFinite
// isNaN يتحقق هل القيمة ليست رقم (مثال: isNaN('abc') يرجع true)
// isFinite يتحقق هل القيمة رقم محدود (ليس Infinity أو NaN)
// مثال: isFinite(100) يرجع true، isFinite(Infinity) يرجع false

// الحل: نتيجة السطرين التاليين:
// console.log(isFinite("100")); // true لأن "100" يمكن تحويله لرقم محدود
// console.log(isFinite("Hello")); // false لأن "Hello" لا يمكن تحويله لرقم