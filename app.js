document.getElementById("myBtn").addEventListener("click", open_close);
var menuState = 0 // close
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("mySidenav").style.width = "20%";
  }
  else {
     menuState = 0;
     document.getElementById("mySidenav").style.width = "0%";
  }
  console.log(menuState);
} 

$('ul.nav').find('a').click(function(){
   var $href = $(this).attr('href');
   var $anchor = $('#'+$href).offset();
   // window.scrollTo($anchor.left,$anchor.top);
   $('body').animate({ scrollTop: $anchor.top });
   return false;
});