let headerIcon = document.querySelector('.header__icon');
let headerIconTwo = document.querySelector('.header__icon-two');
let wrapper = document.querySelector('.wrapper');
headerIcon.addEventListener('click', function(){
    if(wrapper.style.visibility = 'hidden'){
        wrapper.style.visibility = 'visible';
    }
});
headerIconTwo.addEventListener('click', function(){
    if(wrapper.style.visibility = 'visible'){
        wrapper.style.visibility = 'hidden';
    }
});