<<<<<<< HEAD
 $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

   $(document).ready(function() {
    Materialize.updateTextFields();
  });
=======
 // $('#textarea1').val('New Text');
 //  $('#textarea1').trigger('autoresize');

 $(document).ready(function() {
     Materialize.updateTextFields();

     $(".tabs li").click(function() {
         $(this).toggleClass("active teal z-depth-1");
         $(this).siblings().removeClass("active teal z-depth-1");

     });

     $(".tab").click(function() {
         $(this).toggleClass("");
         $(this).siblings().removeClass("white-text text-darken-2");

     });



 });
>>>>>>> Added registration and home page file
