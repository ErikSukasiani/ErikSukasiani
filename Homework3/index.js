// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:

let arr1 = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]

let jami = 0;


    function calc(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i]
        };
    };
    return result;
 };

console.log(calc(arr1, jami));

console.log('');

// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:

let arr2 = [10, 50, 6, 7, 8, 11, 6, 3, 9];

let jami2 = 0;

function totalNum(arr, jami) {
    for (let i = 0; i < arr.length; i++) {
        jami += arr[i]
    }
    return jami
}

console.log(totalNum(arr2 , jami2));

console.log('');

// 3. მოცემულია ობიექტი: ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
  }

function filter(result) {
        if (result.isloggedin == true) {
        return result.firstname + " " + result.lastname
    };
};

console.log(filter(user));

console.log('');

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:


let arrNum = [30, 60, 10, 25];


function max(arr) {
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                console.log(arr[i]);
       };
    };
};

console.log(max(arrNum));

console.log('');

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული
// მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

let num = 10;

function even(number) {
  
        if (number % 2 === 0) {
            console.log('this number is even');
        } else {
            console.log('this number is odd');
    };
};

console.log(even(num));

console.log('');

// 6. მოცემულია მასივი: for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let arr6 = [1, 2, 3, 4, 5];

function reverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr.reverse(arr[i])
    };
    return arr
};

console.log(reverse(arr6));

console.log('');

// 7. ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული 
//    ასაკი მეტია 18- ზე დააბრუნეთ - სრულწლოვანი, თუ ნაკლებია  დააბრუნეთ არასწულწლოვანი. 
//    ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;


    let user7 = {
        age: 18
    };

    let age = (arr) => {
        if (arr.age >= 18) {
            console.log('srulwlovani');
        } else if (arr.age < 18) {
            console.log('arasrulwlovani');
        } else {
            console.log('error');
        }
    };

console.log(age(user7));

console.log('');

// 8. დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა ორი რიცხვი(ნებისმიერი ჩაწერეთ)
//  და რომელიც შეასრულებს შემდეგ ლოგიკას: თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - 
//  num1 is the largest; თუ მეორე რიცხვი მეტია პირველზე - დაიბეჭდოს num2 is the largest;
//   ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error; 

    let num1 = 5;
    let num2 = 10;

    function numCalc(n1, n2) {
        if (n1 > n2) {
            console.log('num1 is the largest');
        } else if ( n1 < n2 ) {
            console.log('num2 is the largest;');
        } else {
            console.log('error');
        };
    };
    
  console.log(numCalc(num1, num2));


