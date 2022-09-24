
let heartSvgs = document.querySelectorAll('.heart-svg');
heartSvgs.forEach((e)=>{
        e.addEventListener('click',()=>{
                e.classList.toggle('active')
        })
})