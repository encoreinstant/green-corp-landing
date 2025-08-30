const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.textContent = i + "+";
        } else {
            element.textContent = i;
        }  

        i += 100;

        setTimeout(() => {
            increaseNumberAnimationStep(i, element, endNumber);
            console.log(`Animating number: ${i}`);
            
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
}

function initIncreaseNumberAnimation() {
    const element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep(0, element, 5000);
}

// initIncreaseNumberAnimation();




document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  console.log(event);
});




document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  otherInput = document.querySelector('.form__other-input');
  if (event.target.value === 'other') {
    // Должны добавить еще одно текстовое поле
    
    let formContainer = document.createElement('div');
    formContainer.classList.add("form__group", "form__other-input");
    let input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = 'text';

    formContainer.appendChild(input);
    document.querySelector(".form form").insertBefore(formContainer, document.querySelector('.form__submit'))
  }

  if (event.target.value !== 'other' && Boolean(otherInput)) {
    // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
    document.querySelector(".form form").removeChild(otherInput)
  }
});

let animationInited = false;

window.addEventListener("scroll", updateScroll);

function updateScroll() {
  if (window.scrollY > 0) {
    let header = document.querySelector("header");
    header.classList.add("header__scrolled")
  } else {
    let header = document.querySelector("header");
    header.classList.remove("header__scrolled")
  }

  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;

  if (windowBottomPosition >= countElementPosition && !animationInited) {
    initIncreaseNumberAnimation();
    animationInited = true;
  }

}


function addSmoothScroll(link) {
  link.addEventListener("click", onLinkClick)}

function onLinkClick(event) {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach( (e) => {
    addSmoothScroll(e);
})

document.querySelectorAll(".more-button").forEach((e) => {
    addSmoothScroll(e);
})
