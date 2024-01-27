// 1.  შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// დაბეჭდეთ მასივისი ახალი ელემენტები.


let arr = [5, 25, 89, 120, 3];

arr.push('javascript', 'pyton');

arr.unshift('html', 'css');

arr.shift();

arr.pop()

console.log(arr);

console.log(arr.length);

console.log('');

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;


let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

console.log(fruits.length);

fruits.push('ვაშლი', 'ანანასი');

fruits.unshift('საზამთრო');

console.log(fruits.length);

fruits.splice( 2, 0,'მანგო');

fruits.shift()

fruits.pop();

console.log(fruits);

console.log(fruits.length);

console.log('');

// 3.  მოცემულია მასივი let array =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr3 =[1, 2, 3, 4, 5];

let splice = ['a', 'b', 'c'];

arr3.splice(3, 0, 'a', 'b', 'c');

console.log(arr3);

console.log('');

// 4. მოცემულია მასივი:let arr = [1, 2, 3, 4, 5]; foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

let arr4 = [1, 2, 3, 4, 5];

let sum = 0;

arr4.forEach((element) => {
    sum += element
});

console.log(sum);

console.log('');

// 5.  მოცემულია მასივი:let array=[2,15,10,24] წაშალეთ ამ მასივიდან რიცხვი 10;

let arr5 =[2, 15, 10, 24];

let middleIndex = arr5.length / 2;

arr5.splice(middleIndex, 1)

console.log(arr5);

console.log('');

// 6.  მოცემულია მასივი:let array = [12, 25, 3, 6, 8, 14, 7, 23]; map-ის გამოყენებით
//  შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let arr6 = [12, 25, 3, 6, 8, 14, 7, 23];

let numbers = arr6.map((num) => {
    return num / 3;
});

console.log(numbers);

console.log('');

// 7. მოცემულია მასივი: let languages = ['html', 'css', 'javascript', ‘python’, 'php']; 
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let retult = languages.filter((Symbol) => {
    return Symbol.length > 3;
});

console.log(retult);

console.log('');

// 8. მოცემულია მასივი:let words = ['madrid', 'rome', 'milan', 'berlin'];filter მეთოდის საშუალებით
//  დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან n-ს;

let words = ['madrid', 'rome', 'milan', 'berlin'];

let result1 = words.filter((elem) => {
    return elem.includes('n');
});

console.log(result1);

console.log('');

// 9. მოცემულია სამი მასივი:
//  let arr1 = [1, 2];
//  let arr2 = [3, 4]; 
//  let arr3 = [5, 6];
//   concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

 let arr9 = [1, 2];
 let arr99 = [3, 4]; 
 let arr999 = [5, 6];

let concat = arr9.concat(arr99, arr999);

console.log(concat);

console.log('');

// 10.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით

let arr10 = [-1, -2, -3, 4];

let possitive = arr10.some((num) => {
    return sum > 0;
});

console.log(possitive);

console.log('');

// 11. მოცემულია მასივი let array =[23,45,32,5,87,7,3,98] sort მეთოდის საშუელებით
//  დაალაგეთ ელემენტები კლებადობის მიხედვით და ამოიღეთ მინიმალური რიცხვი;


let arr11 =[23, 45, 32, 5, 87, 7, 3, 98];

let sort = arr11.sort((a, b) => {
    return b - a
})

console.log(sort);

