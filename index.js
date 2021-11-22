// Changement couleur navBar au scroll
const navigation = document.querySelector('nav');
const li = document.querySelector("li a"); // Ne Fonctionne pas avec document.querySelectorAll pour changer tout les <a> ??

window.addEventListener('scroll', () => {
  if(window.scrollY > 160 ){ // scrollY > scroll depuis le top > ici 160px
    navigation.classList.add('anim-nav');
    li.classList.add('new-li');
  } else {
    navigation.classList.remove('anim-nav');
    li.classList.remove('new-li');
  }
});


// Changement Url img-presentation si erreur
const changeUrl = document.getElementById("img-presentation");

changeUrl.addEventListener('error', (event) => {
  changeUrl.innerHTML += changeUrl.src = `assets/img/img-présentation-2.jpg`;
});