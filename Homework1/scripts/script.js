let Value = 100


if(Value < 50){
    console.log('ნაკლებია 50-ზე')
} else if(Value > 20) {
    console.log('მეტია 20-ზე')
} else {
    console.log('შეცდომა')
}

//////////////////////////////////


let Name = "Mariam";

if(Name == "Mariam" ){
    console.log(true);
} else {
    console.log(false);
};

// meore varianti 

let Namee = "Mariam";
let Name1 =  Namee;

if(Namee == Name1 ){
    console.log(true);
} else {
    console.log(false);
};

//////////////////////////////////

let Name3 = "Mariam";

switch(Name3){
    case "Mariam":
        console.log(true);
        break;
            default:
                console.log(false);
};

//////////////////////////////////

let String1 = "Arvici";
console.log(typeof String1);

let Num = 452;
console.log(typeof Num);

let xo;
console.log(typeof xo);

//////////////////////////////////

let Number = 10;

let type = String(Number);

console.log(type);

// meore varianti 

let Number1 = 10;

console.log(String(Number1));


