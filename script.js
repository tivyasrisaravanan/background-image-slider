const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 1;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
    if (counter === 3){
        counter = 0;

    }
    counter++;
     let urlNext= `url(bgw-${counter}.webp)`
    container.style.backgroundImage =  urlNext;
    console.log(urlNext);

}

function prevSlide(){
    if (counter === 1){
        counter = 3;

    }
    counter--;
    let urlPre =`url(bgw-${counter}.webp)`
    container.style.backgroundImage =  `url(bgw-${counter}.webp)`;
    console.log(urlPre);

}