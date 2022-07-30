let btnOpen = document.getElementById('openMenu');
let btnClose = document.getElementById('closeMenu');
let MenuMobile = document.querySelector('.mobile');

window.addEventListener('resize', () => {
    if (window.innerWidth > 535) {
        MenuMobile.style.marginTop = '-500vh'
        MenuMobile.style.animationName = 'CloseMenu'
    }
})


btnOpen.addEventListener('click', () => {
    MenuMobile.style.marginTop = '0vh'
    MenuMobile.style.animationName = 'OpenMenu'
    btnOpen.style.opacity = '0'
})

btnClose.addEventListener('click', () => {
    MenuMobile.style.marginTop = '-500vh'
    MenuMobile.style.animationName = 'CloseMenu'
    btnOpen.style.opacity = '1'
})