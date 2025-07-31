let nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    items = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.timeRunning') 



let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.addEventListener('click', function(){
  showSlider('next');
})

prevBtn.addEventListener('click', function(){
  showSlider('prev');
})

let runTimeOut 

let runNextAuto = setTimeout(() => {
  showSlider('next');
}, timeAutoNext)


function resetTimeAnimation() {
  if(runningTime) {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = `runningTime ${timeAutoNext}ms linear 1 forwards`
  }   
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        showSlider('next')
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()