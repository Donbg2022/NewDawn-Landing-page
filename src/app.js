
const burger = document.querySelector('#burger')
const linkId = document.querySelector('.mobilelinkid')
const responsiveNav = document.querySelector('.responsivenav')
burger.addEventListener('click', function(e){
  if(getComputedStyle(responsiveNav).display === 'none'){
  responsiveNav.style.display = 'block'
}else{
  responsiveNav.style.display = 'none'
}
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth < 799){
    responsiveNav.style.display = 'none'
  }
})  

