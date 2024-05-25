/* Abre e fecha o menu quando clicar no icone  */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

/* quando clicar em algum item do menu, escoder o menu  */

const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show")
  })
}

/*Mudar o header da pagina quando der scroll */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /*maior que a altura do header  */
    header.classList.add("scroll")
  } else {
    /*menor que a altura do header  */
    header.classList.remove("scroll")
  }
}

/* Testimonial slider swipper carousel */

const swiper = new Swiper(".swiper-container", {
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
})

/* Scroll Reveal rolagem suave, 
mostra elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "700",
  reset: true,
})
/* depois de ter criado a variavel 
é colocada as clases como forma de lista que estao no
 html que eu gostaria que fizesse a animacão 
*/

scrollReveal.reveal(
  `
 #home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials ,
 #contact .text, #contact .links,
 footer .brand, footer .social
`,
  { interval: 100 }
)

const backToTopButton = document.querySelector(".back-to-top")
function backToTop() {
  /* BOTÃO VOLTA PARA O TOP BACK TO TOP */

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

/** Menu ativo conforme a
 * seção visible na pagina
 */

const sections = document.querySelectorAll("main section[id]")
function activateMenuAtCurrentSection() {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  }
}

/* When scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
