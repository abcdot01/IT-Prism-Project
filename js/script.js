$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 12,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })

    // Footer Animation and date Setting

    const d = new Date();

    const year = d.getFullYear();

    $('.footer-date').text(year);

    $('.footer-right a.footer-link span').mouseleave(function () {
        $('.footer-right a.footer-link span').addClass('tran-delay-1')
    })

    $('.footer-right a.footer-link span').mouseenter(function () {
        $('.footer-right a.footer-link span').removeClass('tran-delay-1')
    })

    // Footer js end

    // Dark Mode

    $('.light').click(function () {
        $('body').addClass('dark-mode')
    })
    $('.dark').click(function () {
        $('body').removeClass('dark-mode')
    })

    // 

    // Mouse Move Animation

    document.querySelector('.hero-main').addEventListener('mousemove', (e) => {
        let layerAni = document.querySelectorAll('.hero-ani svg');
        layerAni.forEach((layer) => {
            const speed = Math.floor((Math.random() * 10) + 1)
            const x = (window.innerWidth - e.pageX * speed) / 120;
            const y = (window.innerHeight - e.pageY * speed) / 120;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        })
    })
    // 

    $('.get-started').mousemove(function(e){
        const x = (window.innerWidth - e.pageX)/20 ;
            const y = (window.innerHeight*3 - e.pageY)/10;
            $('.get-started').css('background-position', `${x}px ${y}px`)
    })

    // 
})



