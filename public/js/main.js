document.addEventListener('DOMContentLoaded', ()=> {
    const sliderCard = document.querySelectorAll('.card')
    const arrLeft = document.querySelector('.left')
    const arrRight = document.querySelector('.right')
    
    let current = 0
    
    
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
    
    let x = window.matchMedia("(max-width: 768px)")
    carousel(x)
    x.addEventListener('change',carousel)
})

