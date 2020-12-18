document.addEventListener('DOMContentLoaded', ()=> {
    const sliderCard = document.querySelectorAll('.card')
    const arrLeft = document.querySelector('.left')
    const arrRight = document.querySelector('.right')

    const modal = document.querySelector('.modal')
    const form = document.querySelector('.form')
    const closeBtn = document.querySelector('.close')
    const submitBtn = document.querySelector('.submit-btn')
    const openBtn = document.querySelector('.message-btn')
    
    let current = 0
    let isOpen = false

    const closeModal = () => {
        if(isOpen === false) {
            modal.style.display ="none"
            
            return isOpen = !isOpen 
        }
    }
    
    const openModal = () => {
        if(isOpen === true) {
            modal.style.display ="block"
            
            return isOpen = !isOpen 
        }
    }
    
    openBtn.addEventListener('click', openModal)
    closeBtn.addEventListener('click', closeModal)
    closeModal()

    const submitForm = (e) => {
        e.preventDefault()
    }
    submitBtn.addEventListener('click', submitForm)


    const carousel = (x) => {
    
        if(x.matches) {
            const reset = () => {
                for(let i = 0; i < sliderCard.length; i++) {
                    sliderCard[i].style.display = 'none'
                }
            }
            
            const startSlide = () => {
                reset()
                sliderCard[0].style.display = "block"
                
            }
            
            const slideLeft = () => {
                reset()
                sliderCard[current - 1].style.display = 'block'
                current--
            }
            
            const slideRight = () => {
                reset()
                sliderCard[current + 1].style.display = 'block'
                current++
            }
            
            arrLeft.addEventListener('click', ()=> {
                if(current === 0) {
                    current = sliderCard.length
                }
                slideLeft()
    
            })
            
            arrRight.addEventListener('click', ()=> {
                if(current === sliderCard.length - 1) {
                    current = -1
                }
                slideRight()
            })
            
            startSlide()
            
        }
    }
    
    let x = window.matchMedia("(max-width: 959px)")
    carousel(x)
    x.addEventListener('change',carousel)
})

