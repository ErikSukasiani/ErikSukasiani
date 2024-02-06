// 1. შექმენით htmlში დივი, მიანიჭეთ id-ის სახელი და ჯს-დან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
/* <div class=“wraper”> 
 	<img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
<h2 class=“title”> image title </h2>
</div>
h2 ჯს-დან დაუმატეთ წითელი ფონტის ფერი და ფონტის ზომა 30px, ხოლო სურათს სიგანე 700px; */



let mainDiv = document.querySelector('#container');

mainDiv.insertAdjacentHTML('beforeend', `
<div class=“wraper”> 
<img src='https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg' alt=“image”>
<h2 class=“title”> image title </h2>
</div>
`);

let h2Elem = mainDiv.querySelector('h2');

h2Elem.style.color = 'red';
h2Elem.style.fontSize = '30px';

let img = mainDiv.querySelector('img');

img.style.width = '700px';


console.log('');

// 2. შექმენით სამი დივი html-ში, სამივეს მიანიჭეთ ერთიდაიგივე კლასის სახელი და ყველა დივში დაამატეთ ჯს-დან შემდეგი კოდი:
/* <p class=“text”> hello </p> */


// let text = document.createElement('p');...... es varianti ar gamovida yvelanariad vcade da marto ertshi gamokavda hello sxva shemtxvevashi gamokavda yvelashi html obj model pharagraphs;(((

// text.classList.add('textt');
// text.textContent = 'Hello';

let secDiv = document.querySelectorAll('.pharagraph');

for (let i = 0; i < secDiv.length; i++) {
    secDiv[i].innerHTML = `<p class='textt'>hello<p>`;
};

// // 3. ჯს-დან შექმენით შემდეგი სტრუქტურა:
// <a href=”https://google.com” target=”_blank”> google link </a>
// დაუმატეთ კლასის სახელი - link;
// გადააკეთეთ კლასის სახელი - newclass-ად;

// დაამატეთ შექმნილი ელემნეტი html-ში შექმნილ დივში, რომლის კლასის სახელია box; 

let box = document.querySelector('.box');
let link  = document.createElement('a');
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank')
link.textContent = 'google link';
link.classList.add('link');
link.classList.remove('link');
link.classList.add('newClass');
box.appendChild(link);
console.log(box);








