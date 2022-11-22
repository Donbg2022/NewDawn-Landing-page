
const services = document.querySelector('.allLinks');
const oneTime = document.querySelector('#onetime');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#biweekly');
const moveIn = document.querySelector('#monthly');
const paragraph1 = document.querySelector('#onetimetext');
const paragraph2 = document.querySelector('#weeklytext');
const paragraph3 = document.querySelector('#biweeklytext');
const paragraph4 = document.querySelector('#monthlytext');
const firstPhoto = document.querySelector('#firstphoto');
const secondPhoto = document.querySelector('#secondphoto');
const thirdPhoto = document.querySelector('#thirdphoto');
const fourthPhoto = document.querySelector('#fourthphoto');
const oneTimeHeader = document.querySelector('#onetimeheader')
const weeklyHeader = document.querySelector('#weeklyheader')
const monthlyHeader = document.querySelector('#biweeklyheader')
const moveInHeader = document.querySelector('#monthlyheader')

//one time clean animation
oneTime.addEventListener('mouseover', function(){
  oneTime.style.backgroundColor = 'rgba(230,215,255,.3)'
  paragraph1.style.backgroundColor = "rgba(230,215,255,.3)"
  oneTimeHeader.style.fontSize = 'x-large'
})
oneTime.addEventListener('mouseout', function(){
  oneTime.style.backgroundColor = 'rgb(255,255,255)'
  paragraph1.style.backgroundColor = "rgb(255,255,255)"
  firstPhoto.style.minHeight = '200px'
  oneTimeHeader.style.fontSize = 'large'

})


//weekly clean animation
weekly.addEventListener('mouseover', function(){
  weekly.style.backgroundColor = '#F5F5F5'
  paragraph2.style.backgroundColor = "#F5F5F5"
  weeklyHeader.style.fontSize = 'x-large'
})
weekly.addEventListener('mouseout', function(){
  weekly.style.backgroundColor = 'rgb(255,255,255)'
  paragraph2.style.backgroundColor = "rgb(255,255,255)"
  weeklyHeader.style.fontSize = 'large'

})

//monthly clean animation
monthly.addEventListener('mouseover', function(){
  monthly.style.backgroundColor = '#F5F5F5'
  paragraph3.style.backgroundColor = "#F5F5F5"
  monthlyHeader.style.fontSize = 'x-large'

})
monthly.addEventListener('mouseout', function(){
  monthly.style.backgroundColor = 'rgb(255,255,255)'
  paragraph3.style.backgroundColor = "rgb(255,255,255)"
  monthlyHeader.style.fontSize = 'large'

})

//move in clean animation
moveIn.addEventListener('mouseover', function(){
  moveIn.style.backgroundColor = '#F5F5F5'
  paragraph4.style.backgroundColor = "#F5F5F5"
  moveInHeader.style.fontSize = 'x-large'

})
moveIn.addEventListener('mouseout', function(){
  moveIn.style.backgroundColor = 'rgb(255,255,255)'
  paragraph4.style.backgroundColor = "rgb(255,255,255)"
  moveInHeader.style.fontSize = 'large'

})

//redirects to quote form
const servicebtn = document.querySelector('.servicebtn')
servicebtn.addEventListener('click', () => {
  location.href = "oneTime.html"
})



//responsive burger display
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

//this will add a redirect to the submit button after the forms are submitted


//after about add a service list on right side then a text on the right
//if screen size is smaller then __ make nav bar interactive
//update colors of animated links
//try and see if you can chain multiple elments one on addevent listener
//after submitting new page loads sayong thx g
