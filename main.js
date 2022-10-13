// author: vaau 

const topmenu = document.getElementById('header-top-menu')
const toggleTopMenuIcon = document.getElementById('header-toggle-menu-icon')


document.addEventListener('click',(e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topmenu.classList.toggle('header-topmenu-expanded')
        topmenu.classList.toggle('hidden')
    } else {
        if (topmenu.classList.contains('header-topmenu-expanded')) {
            topmenu.classList.remove('header-topmenu-expanded')
            topmenu.classList.add('hidden')
            
        }
        
    }
})