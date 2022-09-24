
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
