 // $('#textarea1').val('New Text');
 //  $('#textarea1').trigger('autoresize');

 $(document).ready(function() {
     Materialize.updateTextFields();

     $(".tabs li").click(function() {
         $(this).toggleClass("active teal z-depth-1");
         $(this).siblings().removeClass("active teal z-depth-1");

     });

     $(".tab li a").click(function() {
         $(this).toggleClass("white-text text-darken-2");
         $(this).siblings().removeClass("white-text text-darken-2");

     });


        $(".collection-item").click(function() {
         $(this).toggleClass("active teal z-depth-1");
         $(this).siblings().removeClass("active teal z-depth-1");

     });


         $(".button-collapse").sideNav();
                 $('.collapsible').collapsible();


 $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: false // Choose whether you can drag to open on touch screens
    }
  );



 });


