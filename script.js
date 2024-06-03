AOS.init({
  anchorPlacement: 'center-center',
  offset: 100,
  duration: 1200,
  mirror: true,
  once: false,
  useClassNames: true,
  debounceDelay: 200,
})




// document.addEventListener('DOMContentLoaded', function() {
//   const menuBtn = document.querySelector('.menu-btn');
//   const menuItem = document.querySelector('.menu-item');

//   menuBtn.addEventListener('click', function() {
//       menuItem.classList.toggle('expanded');
//   });
// });





/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
