
// ///////////////////////////////////// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for(let i = 5; i < 100; i++) {
    console.log(i);
};

console.log('');

// ///////////////////////////////////// 2. ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10 && array1[i] > 0) {
        console.log(array1[i]);
    } 
};

console.log('');

// ///////////////////////////////////// 3. ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array3.length; i++) {
    if (i === 5) {
        console.log('aris');
        break;
    };
    console.log(array3[i]);
};

console.log('');

// ///////////////////////////////////// 4. ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array4= [1, 2, 3, 4, 5];

let Jami = 0;

for (let i = 0; i < array4.length; i++) {
    Jami += array4[i];
};

console.log(Jami);

console.log('');

// ///////////////////////////////////// 5. გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)


let array5= [1, 2, 3, 4, 5];

let Jami1 = 0;

for (let i = 0; i < array5.length; i++) {
    
    Jami1 += array4[i]
}

let MtavariJami = Jami1 / array5.length

console.log(MtavariJami);

console.log('');

// ///////////////////////////////////// 6. გამოიტანეთ ყველა რიცხვი 7 ის გარდა

let array6 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array6.length; i++) {
   
    if(i === 3) {
        continue;
    };

    console.log(array6[i]);
};

console.log('');

// ///////////////////////////////////// 7. ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
  console.log(user.studentstatus);

console.log('');

// ///////////////////////////////////// 8. თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;

let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if ( user1.age < 18 && user1.studentstatus == 'active') {
    console.log('hello');
} else {
    console.log('error');
};

if (user1.name == 'levani') {
    console.log('hello levani');
} else {
    console.log('error');
};

if (user1.studentstatus == 'active' || user1.age < 25){
    console.log('hello world');
} else {
    console.log('error');
}

console.log('');

// ///////////////////////////////////// 9. მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array9 = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

    for (let i = 0; i < array9.length; i++) {
        for (let o = 0; o < array9[i].length; o++) {
                if(array9[i][o] > 0) {
                    console.log(array9[i][o]);
               };
            };
        };




// ///////////////////////////////////// 10. 1.ამოიღეთ კენტი რიცხვები 

let array11 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

let array22 = [];

for(let i = 0; i <= array11.length; i++) {
    if(array11[i] % 2 === 1) {
        array22.push(array11[i]);
    }
};
console.log(array22);

console.log('');

// ///////////////////////////////////// 10. 2. ამოიღეთ მარტო ლუწი რიცხვები

let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

let array33 = [];

for(let i = 0; i <= array2.length; i++) {
    if(array2[i] % 2 === 0) {
        array33.push(array2[i]);
    }
};
console.log(array33);

console.log('');

// ///////////////////////////////////// 11. კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
];

if (users[0].status == true) {
    console.log(users[0]);
} else if (users[1].status == true) {
    console.log(users[1]);
} else if (users[2].status == true) {
    console.log(users[2]);
}   else {
    console.log('error');
};

