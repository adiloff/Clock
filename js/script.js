// document - это весь сайт
// console.log(typeof document);
// document.querySelector() - подключение к определенному селектору 

// console.log(document.querySelector('.s'));
 

const   sec = document.querySelector('.s'), /* Секундная стрелка */
        min = document.querySelector('.m'), /* Минутная стрелка */
        hour = document.querySelector('.h'), /* Часовая стрелка */
        minNumber = document.querySelector('.minutes'), /* Поключение к чиловым минутам */
        hourNumber = document.querySelector('.hours');

function clock() {

/* 

    new Date() - Берет время которое сейчас на устройтве
    getSeconds() - Это метод который берет секунды
    getMinutes() - это метод который берет минуты
    getHours() - это метод который берет часы

*/

    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        // console.log(sec);
        sec.style = `transform: rotate(${second}deg)`;
        min.style = `transform: rotate(${minutes}deg)`;
        hour.style = `transform: rotate(${hours}deg)`;

    // Рекурсия - это когда функция вызывает саму себя
    // setTimeout() - функция которая делает задерку вызова 


    minNumber.innerHTML = time.getMinutes();
    hourNumber.innerHTML = time.getHours();


    setTimeout(() => clock(), 1000); 
}

clock();


const   link = document.querySelectorAll('.tabsItem'), /* Подключение ко всем пунктам Меню табов */
        tabs = document.querySelectorAll('.tabsContentItem'); /* Подклюяение ко всем табам */

for(let i= 0; i < link.length; i++) {
    link[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(let x = 0; x < link.length; x++) {
            link[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        tabsNew(this, tabs[i]);
    })


    // addEventListener() - метод HTML элемента который делае проверку на какието события
}
function tabsNew(links, tabs) {
    links.classList.add('active');
    tabs.classList.add('active');
}



// console.log(link);




// let i = 0
// function rek() {
//     console.log(i);
//     if(i < 100) {
//         i++
//         rek();
//     }
// }
// rek();

const watchBtn = document.querySelector('.stopwatch__btn'),
        secondWatch = document.querySelector('.stopwatch__seconds'),
        minutesWatch = document.querySelector('.stopwatch__minutes'),
        hoursWatch = document.querySelector('.stopwatch__hours'),
        spanInfoWatch = document.querySelector('.tabsLink__span');

watchBtn.addEventListener('click', function() {
    if(this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        spanInfoWatch.classList.add('active');
        let i = 0;
        setTimeout(() => stopWatch(this, i), 1000);
    }else if(this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
        spanInfoWatch.classList.remove('active');
        spanInfoWatch.classList.add('active_clear');
    }else {
        spanInfoWatch.classList.remove('active_clear');
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
        this.innerHTML = 'start';
    }
})

function stopWatch(el, i) {
    if(el.innerHTML == 'stop') {

        if(i == 60) {
            i = 0;
            secondWatch.innerHTML = i;
            if(minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            }else {
                minutesWatch.innerHTML++;
            }
        }else {
            i++;
            secondWatch.innerHTML = i;
        }
        setTimeout(() => stopWatch(el, i), 1000);
    }
}