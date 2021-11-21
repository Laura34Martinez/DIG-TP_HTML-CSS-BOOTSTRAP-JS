const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

  if(window.scrollY > 160 ){ //scrollY > scroll depuis le top > ici 30px
    navigation.classList.add('anim-nav');
  } else {
    navigation.classList.remove('anim-nav');
  }

})