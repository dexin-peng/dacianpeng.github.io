$(window).scroll(function(){
    if($(document).scrollTop()!=0){
      sessionStorage.setItem("offsetTop", $(window).scrollTop());
    }
  });
window.onload = function(){
  var offset = sessionStorage.getItem("offsetTop");
  $(document).scrollTop(offset);
};