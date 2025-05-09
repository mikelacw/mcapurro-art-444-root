  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  

  // const toggleButton = document.getElementById('menu-toggle');
  
  // toggleButton.addEventListener('click', showMenu);

  function showMenu() {
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenu.classList.toggle('show');
  }

  function closeMenu() {

    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenu.classList.remove('show');
  }


  const navDark = document.querySelectorAll('a')
    
  for (let i = 0; i < navDark.length; i++){
      navDark[i].classList.toggle('a-dark');
  }


  function darkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("div.example")
  }

  if (new Date().getHours() > 18) {
    document.body.classList.add("dark-mode");
  }




  document.addEventListener("DOMContentLoaded", function () {
    const skillFills = document.querySelectorAll(".skill-bar .fill");
  
    skillFills.forEach(fill => {
      fill.dataset.width = fill.style.width;
      fill.style.width = "0";
    });
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.transition = "width 1.5s ease-in-out";
          fill.style.width = fill.dataset.width;
          observer.unobserve(fill); 
        }
      });
    }, {
      threshold: 0.3
    });
  
    skillFills.forEach(fill => observer.observe(fill));
  });

    // Name Animation
  document.addEventListener("DOMContentLoaded", function () {
    const nameElements = document.querySelectorAll(".fullname-flex h1");
    const names = Array.from(nameElements).map(el => el.textContent);
    

    nameElements.forEach((el, i) => {
      const placeholder = names[i].replace(/./g, '\u00A0'); 
      el.textContent = placeholder;
    });

    let line = 0;
    let char = 0;

    function typeLine() {
      if (line < nameElements.length) {
        const target = nameElements[line];
        const text = names[line];
        const current = target.textContent.trimStart();
        target.textContent = text.slice(0, char) + '\u00A0'.repeat(text.length - char);
        if (char < text.length) {
          char++;
          setTimeout(typeLine, 150);
        } else {
          char = 0;
          line++;
          setTimeout(typeLine, 300);
        }
      }
    }

    typeLine();
  });