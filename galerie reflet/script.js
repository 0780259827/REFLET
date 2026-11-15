// Carrousel (page d'accueil)
const slides = document.querySelector('.slides');
if (slides) {
  const total = slides.children.length;
  let i = 0, timer;
  const go = n => { i = (n + total) % total; slides.style.transform = `translateX(-${i * 100}%)`; };
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 5000); };
  document.querySelector('.prev').addEventListener('click', () => { go(i - 1); auto(); });
  document.querySelector('.next').addEventListener('click', () => { go(i + 1); auto(); });
  auto();
}
// Flèche de la galerie
const gal = document.querySelector('.gallery');
const gnext = document.querySelector('.gallery-next');
if (gal && gnext) gnext.addEventListener('click', () => gal.scrollBy({left: 320, behavior: 'smooth'}));
