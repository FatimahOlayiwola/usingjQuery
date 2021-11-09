jQuery(document).ready( function(){
  // jQuery("h1").click( function(){
  //   alert("You clicked on h1!")
  // });

  // jQuery("p").click(function(){
  //   alert("You clicked on paragraph!")
  // });

  // jQuery("img").click(function(){
  //   alert("You clicked on image!")
  // });

  // jQuery("li").click(function() {
  //  alert("You clicked an unordered list!") 
  // });

jQuery(".exception").click(function() {
  alert("You clicked on exception page")
});

jQuery("#heading").click(function() {
  alert("You clicked on heading")
});

jQuery("#firstlist").click(function(){
  alert("You clicked on firstlist")
});

jQuery("#secondlist").click(function(){
  alert("You clicked on secondlist")
});

jQuery("#thirdlist").click(function(){
  alert("You clicked on thirdlist")
});

jQuery("#fourthlist").click(function(){
  alert("You clicked on fourthlist")
});

jQuery("#lastlist").click(function(){
  alert("You clicked on lastlist")
});

jQuery("#hide img").click(function () {
  jQuery("img").hide()
});

jQuery("#button-blue").click(function(){
  jQuery("body").removeClass()
  jQuery("body").addClass("bg-primary")
});

jQuery("#button-yellow").click(function(){
  jQuery("#remove-button-blue").removeClass("bg-primary")
  jQuery("body").addClass("bg-warning")
});

jQuery("#button-grey").click(function(){
  jQuery("#remove-button-yellow").removeClass("bg-warning")
  jQuery("body").addClass("bg-secondary")
});

jQuery("#button-black").click(function(){
  jQuery("#remove-button-grey").removeClass("bg-secondary")
  jQuery("body").addClass("bg-dark")
});

jQuery("#button-green").click(function(){
  jQuery("#remove-button-grey").removeClass("bg-secondary")
  jQuery("body").addClass("bg-success")
});

jQuery("#button-light-blue").click(function(){
  jQuery("#remove-button-green").removeClass("bg-success")
  jQuery("body").addClass("bg-info")
});

jQuery("#button-red").click(function(){
  jQuery("#remove-button-light-blue").removeClass("bg-info")
  jQuery("body").addClass("bg-danger")
});





});