

const Qustion = document.querySelectorAll('.Qustion');


Qustion.forEach((Qustion) => {
    const head = Qustion.querySelector('.heading');
    const pragraph = Qustion.querySelector('.pragraph');
    const plusBtn = Qustion.querySelector('.icon-plus');
    // const pragarph = Qustion.nextElementSibling;
    const minusBtn = Qustion.querySelector('.icon-minus');

    const toggleVisibility  = function() {
        pragraph.classList.toggle('hidden');
        plusBtn.classList.toggle('hidden');
        minusBtn.classList.toggle('hidden');
    }

    head.addEventListener('click', toggleVisibility)
    plusBtn.addEventListener('click', toggleVisibility)
    minusBtn.addEventListener('click', toggleVisibility)

});

