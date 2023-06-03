let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

// About Me Buttons
let opentab = (tabname) => {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

// Smooth scrolling animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});
  
let isScroll = true;
// Shows sidebar when we reach about level 
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const sidebar = document.getElementById('sidebar');
    const aboutOffset = aboutSection.offsetTop;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; 
    if ((scrollPosition >= aboutOffset - 500) && (isScroll == true)) {
      sidebar.classList.add('sidebar-show');
    } else {
      sidebar.classList.remove('sidebar-show');
    }
  });

  // Sidemenu for responsiveness
  let sideMenu = document.getElementById("sidemenu")
  let openmenu = () =>{
    sideMenu.style.right = "0"
  }
  let closemenu = () =>{
    sideMenu.style.right = "-200px"
  }
  
const sidebarButton = document.getElementById("sidebar-btns");
const sidebar = document.querySelector("#sidebar");

sidebarButton.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-show");
  isScroll = false;
  loadSidebar();
});
// replace sidebar with an icon when clicked
let loadSidebar = () => {
  if (sidebar.classList.contains("sidebar-show")) {
    sidebar.classList.remove("sidebar-show");
    document.getElementById("sidebar-replace").style.display = "block";
  } else {
    sidebar.classList.add("sidebar-show");
    document.getElementById("sidebar-replace").style.display = "none";
    isScroll = true;
  }
};





  

  
  
  
