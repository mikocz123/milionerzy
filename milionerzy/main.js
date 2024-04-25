//przyciski i inne
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const triangle = document.querySelector('.triangle');
const startButton = document.querySelector('.startButton');
const wrong = document.querySelectorAll('.wrong');
const good1 = document.querySelector('.good1');
const good2 = document.querySelector('.good2');
const good3 = document.querySelector('.good3');
const good4 = document.querySelector('.good4');
const good5 = document.querySelector('.good5');
const good6 = document.querySelector('.good6');
const good7 = document.querySelector('.good7');
const good8 = document.querySelector('.good8');
const good9 = document.querySelector('.good9');
const good10 = document.querySelector('.good10');
const good11 = document.querySelector('.good11');
const good12 = document.querySelector('.good12');
const again = document.querySelectorAll('.again');

//li
const li500 = document.querySelector('#li500');
const li1000 = document.querySelector('#li1000');
const li2000 = document.querySelector('#li2000');
const li5000 = document.querySelector('#li5000');
const li10000 = document.querySelector('#li10000');
const li20000 = document.querySelector('#li20000');
const li40000 = document.querySelector('#li40000');
const li75000 = document.querySelector('#li75000');
const li125000 = document.querySelector('#li125000');
const li250000 = document.querySelector('#li250000');
const li500000 = document.querySelector('#li500000');
const li1000000 = document.querySelector('#li1000000');

//sekcje
const aside = document.querySelector('.aside');
const startSection = document.querySelector('.start');
const pytanie1 = document.querySelector('.pytanie1');
const pytanie2 = document.querySelector('.pytanie2');
const pytanie3 = document.querySelector('.pytanie3');
const pytanie4 = document.querySelector('.pytanie4');
const pytanie5 = document.querySelector('.pytanie5');
const pytanie6 = document.querySelector('.pytanie6');
const pytanie7 = document.querySelector('.pytanie7');
const pytanie8 = document.querySelector('.pytanie8');
const pytanie9 = document.querySelector('.pytanie9');
const pytanie10 = document.querySelector('.pytanie10');
const pytanie11 = document.querySelector('.pytanie11');
const pytanie12 = document.querySelector('.pytanie12');
const win = document.querySelector('.win');
const lose  = document.querySelector('.lose');

function hideAll() {
    img1.classList.add('hide');
    img2.classList.add('hide');
    triangle.classList.add('hide');
    aside.classList.add('hide');
    startSection.classList.add('hide');
    pytanie1.classList.add('hide');
    pytanie2.classList.add('hide');
    pytanie3.classList.add('hide');
    pytanie4.classList.add('hide');
    pytanie5.classList.add('hide');
    pytanie6.classList.add('hide');
    pytanie7.classList.add('hide');
    pytanie8.classList.add('hide');
    pytanie9.classList.add('hide');
    pytanie10.classList.add('hide');
    pytanie11.classList.add('hide');
    pytanie12.classList.add('hide');
    win.classList.add('hide');
    lose.classList.add('hide');
}

function show(name) {
    name.classList.remove('hide');
}

function liColor(name) {
    name.style.background = "orange";
    name.style.color = "white";
}

hideAll();
show(img1);
show(startSection);

//addEventListener'y
startButton.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(aside);
    show(pytanie1);
});

good1.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie2);
    liColor(li500);
});

good2.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie3);
    liColor(li1000);
});

good3.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie4);
    liColor(li2000);
});

good4.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie5);
    liColor(li5000);
});

good5.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie6);
    liColor(li10000);
});

good6.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie7);
    liColor(li20000);
});

good7.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie8);
    liColor(li40000);
});

good8.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(triangle);
    show(aside);
    show(pytanie9);
    liColor(li75000);
});

good9.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(aside);
    show(pytanie10);
    liColor(li125000);
});

good10.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(aside);
    show(pytanie11);
    liColor(li250000);
});

good11.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(aside);
    show(pytanie12);
    liColor(li500000);
});

good12.addEventListener("click", () => {
    hideAll();
    show(img2);
    show(win);
    liColor(li1000000);
});

wrong.forEach(btn => {
    btn.addEventListener("click", () => {
        hideAll();
        show(img2);
        show(lose);
    });
});

again.forEach(btn => {
    btn.addEventListener("click", () => {
        location.reload();
    });
});