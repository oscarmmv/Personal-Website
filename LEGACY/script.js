const swup = new Swup(); 
var mobilePorts = false;
// document.getElementById('loading-video').addEventListener('ended',myHandler,false);
// function myHandler(e) {
//   document.getElementById('loading-wrapper').style.display = 'none';
// }

$(function() {
    AOS.init();
});

if(localStorage.getItem("theme") == "dark") {
  document.documentElement.style.setProperty('--main-color', '#e2e2e2');
  document.documentElement.style.setProperty('--main-text-color', '#000');
  document.documentElement.style.setProperty('--secondary-text-color', '#e7e7e7');
  document.documentElement.style.setProperty('--secondary-color', '#e7e7e7');
  document.documentElement.style.setProperty('--theme-color', '#121212');
  document.getElementById("about-logo").src = "https://i.ibb.co/n8cPY4w/light-logo.jpg"; 
  document.getElementById("nav-logo").src = "https://i.ibb.co/yBBB3WM/logo.png"; 
} else {
  document.documentElement.style.setProperty('--main-color', '#121212');
  document.documentElement.style.setProperty('--main-text-color', '#fff');
  document.documentElement.style.setProperty('--secondary-text-color', '#202023');
  document.documentElement.style.setProperty('--secondary-color', '#202023');
  document.documentElement.style.setProperty('--theme-color', '#fff');
  document.getElementById("about-logo").src = "https://i.ibb.co/b17jVHF/logo.jpg"; 
  document.getElementById("nav-logo").src = "https://i.ibb.co/yBBB3WM/logo.png"; 
}

function themeMode() {
  if(localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.style.setProperty('--main-color', '#e2e2e2');
    document.documentElement.style.setProperty('--main-text-color', '#000');
    document.documentElement.style.setProperty('--secondary-text-color', '#e7e7e7');
    document.documentElement.style.setProperty('--secondary-color', '#e7e7e7');
    document.documentElement.style.setProperty('--theme-color', '#121212');
    document.getElementById("about-logo").src = "https://i.ibb.co/n8cPY4w/light-logo.jpg"; 
    document.getElementById("nav-logo").src = "https://i.ibb.co/yBBB3WM/logo.png"; 
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.style.setProperty('--main-color', '#121212');
    document.documentElement.style.setProperty('--main-text-color', '#fff');
    document.documentElement.style.setProperty('--secondary-text-color', '#202023');
    document.documentElement.style.setProperty('--secondary-color', '#202023');
    document.documentElement.style.setProperty('--theme-color', '#fff');
    document.getElementById("about-logo").src = "https://i.ibb.co/b17jVHF/logo.jpg"; 
    document.getElementById("nav-logo").src = "https://i.ibb.co/yBBB3WM/logo.png"; 
  }
}

function navPorts() {
  if(!mobilePorts) { 
    mobilePorts = true;
    document.getElementById("mobile-nav-port").style.display = "block";
  } else {
    mobilePorts = false;
    document.getElementById("mobile-nav-port").style.display = "none";
  }
}
function scrollToAbout() {
  document.getElementById("bio").scrollIntoView();
}



