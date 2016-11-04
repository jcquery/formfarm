$('document').ready(function(){

    console.log("hey ");
        $.ajax({
            url: "/api/responses",
            type: 'GET',
            data: {},
            success: function (output) {
                console.log(output);
                $('#forms').append('<li class="collection-header"><h4>My Forms</h4></li>');
                $.each(output, function( index, value ) {
                    
                    console.log(value.name.toString());
                    $('#forms').append('<a href="report.html" data-id=' +value.id +'class="collection-item">'+value.name + "  " + value.created_at+'</a>');
                });

            }

        });



});


$('.nav-wrapper #dropdown-button2').click(function() {
    console.log("Called dropdown button");
    $.ajax({
        url: "/getFormIDs",
        type: 'GET',
        data: {},
        success: function (output) {

            $.each(output, function( index, value ) {
                $('#dropdown1').append('<li ><a  class="formdropdown" data-id= value.id href="blankForm.html">value.name</a></li>');
            });


        }

    });
});

//When dropdown menu is clicked, redirect to blank form with custom form options of that form
$('.formdropdown').click(function() {
    $.ajax({
        url: "/getBlankFormWithoutData",
        type: 'GET',
        data: {id: $(this).attr("data-id")},
        success: function (output) {
            saveData(output, 'formData');
            window.setTimeout(function() {
                window.location = "blankForm.html";
            }, 2000);



        }

    });
});


//When Report is clicked, save id and redirect to the reports form
$('.collection-item').click(function() {
    $.ajax({
        url: "/getBlankFormWithoutData",
        type: 'GET',
        data: {id: $(this).attr("data-id")},
        success: function (output) {
            saveData(output, 'id');
            window.setTimeout(function() {
                window.location = "report.html";
            }, 2000);



        }

    });
});




function  saveData(output, name) {
    //converts to JSON string the Object
    formData = JSON.stringify(output);
    //creates a base-64 encoded ASCII string
    formData = btoa(formData);
    //save the encoded accout to web storage
    localStorage.setItem('_'+name, formData);
}



