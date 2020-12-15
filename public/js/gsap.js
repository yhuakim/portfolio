const arrLeft = document.querySelector('.left')
const arrRight = document.querySelector('.right')
const homeBtn = document.querySelector('.home-link')

let tlCarousel = gsap.timeline()
let tlHome = gsap.timeline()
let tlScroll = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ['.featured div'],
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //snap: {
       // snapTo: "labels", // snap to the closest label in the timeline
       // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
       // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
       // ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
     // }
    }
  });
let tlScroll1 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.image-container',
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=100", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //snap: {
       // snapTo: "labels", // snap to the closest label in the timeline
       // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
       // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
       // ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
     // }
    }
  });

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger)

tlCarousel.from('.card', {
    x: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'back.inOut(3)'
}, '-=5')
.from(['.left', '.right'], {
    x: 5,
    scale: .9,
    ease: 'back.inOut(.5)',
    duration: 2,
    repeat: -1,
    repeatDelay: .2,
    yoyo: true
}, '-=3')

tlHome.from('.project-btn', {
    x: -50,
    backgroundColor: '#f2f2f2',
    color: '#3E3636',
    duration: 2,
    ease: 'elastic.inOut(3, 1)',
    delay: 1
}).from('.skills-btn', {
    x: 5,
    opacity: 0,
    duration: 1,
}).from('.greeting', {
    x: 20,
    y: 10,
    opacity: 0,
    duration: 1,
    delay: .3
}, '-=3').from('.intro', {
    opacity: 0,
    duration: 1,
    delay: .2
}, '-=1')

tlScroll.from('.image-container-bg', {
    x: 100,
    y: 50,
    scale: .9,
    opacity: 0,
    duration: 2
})

tlScroll1.from('.project-image1', {
    x: 100,
    y: 50,
    scale: .9,
    opacity: 0,
    duration: 2
}).from('.project-image2', {
    x: 100,
    y: 50,
    scale: .9,
    opacity: 0,
    duration: 2
}).from('.project-image3', {
    x: 100,
    y: 50,
    scale: .9,
    opacity: 0,
    duration: 2,
    delay: 3
})

tlCarousel.pause()
tlHome.pause()

document.addEventListener('DOMContentLoaded', ()=> {
    tlCarousel.play()
    tlHome.play()

    homeBtn.addEventListener('click', ()=> {
        tlHome.restart()
    })

    arrLeft.addEventListener('click', ()=> {
        tlCarousel.restart()
    })

    arrRight.addEventListener('click', ()=> {
        tlCarousel.restart()
    })
})



