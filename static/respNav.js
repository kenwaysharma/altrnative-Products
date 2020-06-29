const toggle=document.getElementsByClassName('toggle')[0]
const navbarLinks=document.getElementsByClassName('topnav')[0]



toggle.addEventListener('click', myfunc2)


function myfunc2(e){
    navbarLinks.classList.toggle('activeFlex')

}