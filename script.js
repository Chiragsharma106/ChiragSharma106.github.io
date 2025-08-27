const MenuFunction =  document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");
function openMenu(){
    MenuFunction.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    MenuFunction.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', ()=>{
        if(scrollY > 50){
            navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darktheme', 'dark:shadow-white/20');
            navlinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent')

        
        }else{
            navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darktheme', 'dark:shadow-white/20');
            navlinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent')

        }

})


// ----- Light mode and Dark mode --------

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
matchMedia('(prefers-color-scheme: dark)'.matches))) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggletheme(){
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}