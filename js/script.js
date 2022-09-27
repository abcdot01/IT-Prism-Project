$(document).ready(function () {

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


    let heartSvgs = document.querySelectorAll('.heart-svg');
    heartSvgs.forEach((e) => {
        e.addEventListener('click', () => {
            e.classList.add('active')
        })
    })



    $(document).on('click', 'ul.tab-links li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })


    // 

    $('.search-icon,.nav-close-btn,.noti-icon').click(function () {
        $('.navbar-form').toggleClass("show");
        $('.submenu').toggleClass("show");
    })

    // 

    // 
    // Mouse Move Animation


    $('.get-started').mousemove(function (e) {
        const x = (window.innerWidth - e.pageX) / 20;
        const y = (window.innerHeight * 3 - e.pageY) / 10;
        $('.get-started').css('background-position', `${x}px ${y}px`)
    })


    // 
})

// Mouse Move Animation

const hero = document.querySelector('.hero-main');
const twoDotMenu = document.querySelectorAll('.two-dot .svg');

if (hero) {
    hero.addEventListener('mousemove', (e) => {
        let layerAni = document.querySelectorAll('.hero-ani svg');
        layerAni.forEach((layer) => {
            const speed = Math.floor((Math.random() * 10) + 1)
            const x = (window.innerWidth - e.pageX * speed) / 120;
            const y = (window.innerHeight - e.pageY * speed) / 120;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        })
    })
}

if (twoDotMenu) {
    twoDotMenu.forEach((e) => {
        // 
        e.addEventListener('click', () => {
            // 
            if (e.parentElement.classList.contains('show')) {
                e.parentElement.classList.remove('show')
            } else {
                twoDotMenu.forEach(close => {
                    close.parentElement.classList.remove('show')
                    e.parentElement.classList.add('show')
                })
            }
            // 
        })
        // 
    })
}
