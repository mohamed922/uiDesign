///* global $ , alert , console */
//$(function() {
//  $(" .work img a ").hover(function(){
//     $(".work-style").addClass('.over-lay') ; 
//  });
//});


$(function() {
  $("body").niceScroll({
    cursorcolor:"gray",
    cursorwidth:"16px"
  });
  $(".show-more").click(function(){
     $(".hidden").fadeIn() ; 
  });
  $('h1').addClass('animated ');
 

// or just with selector string
const ps = new PerfectScrollbar('.container');
});