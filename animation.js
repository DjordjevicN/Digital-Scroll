document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timelineStart = new TimelineMax()
    timelineStart
        .from('.hero-title', 1, {
            x: -100,
            opacity: 0
        }, 1)
        .from('.logo', 1, {
            x: -100,
            opacity: 0
        }, '-=1')
        .from('.nav-bar li', 1, {
            x: 100,
            opacity: 0
        }, '-=1')




    let timeline = new TimelineMax()
    timeline
        .from('.second-section-pre-title', .25, {
            x: 300,
            opacity: 0
        })
        .from('.second-section-main-title h2', .25, {
            x: -300,
            opacity: 0
        }, '-=.25')
        .from('.second-section-main-title p', .25, {
            y: -50,
            opacity: 0
        }, '-=.25')
        .from('.button', .25, {
            x: -50,
            opacity: 0
        }, '-=.25')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    scene.setTween(timeline)
        .setPin('.second-section')
        .addTo(controller)


    let timeline2 = new TimelineMax()
    timeline2
        .from('.third-section-title', 1, {
            y: -100,
            opacity: 0
        }, '-=3')
        .from('.anim-1', 1, {
            y: -100,
            opacity: 0
        })
        .from('.anim-2', 3, {
            y: -100,
            opacity: 0
        }, '-=3')
        .from('.anim-3', 2, {
            y: -100,
            opacity: 0
        }, '-=3')
        .from('.anim-4', 6, {
            y: -100,
            opacity: 0
        }, '-=3')


    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.third-section-wrapper',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline2)
        .setPin('.third-section-wrapper')
        .addTo(controller)

    let timeline3 = new TimelineMax()
    timeline3
        .from('.fourth-section-title', .25, {
            y: 100,
            opacity: 0
        })
        .from('.card1 img', .25, {
            x: -100,
            opacity: 0
        })
        .from('.card2 img', .25, {
            x: 100,
            opacity: 0
        }, '-=.25')
        .from('.card2 h3, .card2 p', .25, {
            y: 100,
            opacity: 0
        }, '-=.25')
        .from('.card1 h3, .card1 p', .25, {
            y: 100,
            opacity: 0
        }, '-=.25')










    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.fourth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline3)
        .setPin('.fourth-section')
        .addTo(controller)





})
