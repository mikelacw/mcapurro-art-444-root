
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