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
})



