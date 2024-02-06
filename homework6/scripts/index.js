// 2.ააწყეთ to do- ს მსგავსი მაგალითი - ინფუთის მაგილითი, როგორც ვივარჯიშეთ ლექციაზე, 
// რასაც ჩავწერ ინფუთში და ღილაკის ან ენთერის დაჭერის შემთვევაში ეს მნიშნელობა უნდა ჩავარდეს
// li-ში, ხოლო ინფუთი უნდა გასუფთავდეს; ლი-ში ჩვენ დავამატეთ წაშლის ღილაკი, ხოლო თქვენ 
// გაალამაზეთ და ღილაკის მაგივრად დაამატეთ აიქონი fontawesome-იდან, რომლის დაჭერის შემთხვევაში წაიშლება მთლიანი ლისტი;

const addBtn = document.querySelector('.add_btn');
const input = document.querySelector('.inp');
const list = document.querySelector('.list_items')
let num = 5;

addBtn.addEventListener('click', () => {
    if (input.value === '') {
        return;
    };
    if (list.childElementCount > num) {
        return;
    };
    createAdnRemoveElement(input.value)
    input.value = '';
});

function createAdnRemoveElement(value) {
    const li = document.createElement('li');
    li.className = 'list';
    li.textContent = value;
    list.appendChild(li);


    const remove = document.createElement('button');
    remove.insertAdjacentHTML('beforeend', `<i class="fa-regular fa-trash-can"></i>`);
    remove.classList = 'remove_btn';
    li.appendChild(remove);

    remove.addEventListener('click', () => {
        list.removeChild(li);
    });
    
    li.addEventListener('click', () => {
        li.classList.toggle('li-active');
    });
};
    