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
                    $('#forms').append(`<a data-id=${value.id} class="collection-item">${value.name}  ${value.created_at}</a></br>`);
                });

            }

        });



});



$('.dropdown-button').click(function() {
    console.log("Called dropdown button");
    $.ajax({
        url: "/api/forms",
        type: 'GET',
        data: {},
        success: function (output) {
            $('#dropdown1').empty();
            $.each(output, function( index, value ) {
                $('#dropdown1').append('<li ><a  id="formdropdownitem" class="formdropdown" data-id='+ value.id+ ' href="#">'+value.name+'</a></li>');
            });


        }

    });
});

//When dropdown menu is clicked, redirect to blank form with custom form options of that form
$('#dropdown1').click(function(event) {
    var atag = $(event.target).attr('data-id');
    console.log(atag);
    $.ajax({
        url: "/api/form/"+ atag,
        type: 'GET',
        data: {},
        success: function (output) {

            //converts to JSON string the Object
    var formData = JSON.stringify(output);
    //creates a base-64 encoded ASCII string
    console.log("formdata in main menu is " +formData);
    //save the encoded accout to web storage
    localStorage.setItem('_formData', formData);

                window.location = "blankForm.html";




        }

    });
});


//When Report is clicked, save id and redirect to the reports form
$('.collection').on('click', 'a', function(event) {
    console.log(event.target);
    $.ajax({
        url: "/api/response/"+$(event.target).attr("data-id"),
        type: 'GET',
        success: function (output) {
            saveData(output, 'id');
            window.location = "report.html";
        }

    });
});






function  saveData(output, name) {
    console.log("in save data");
    //converts to JSON string the Object
    formData = JSON.stringify(output);
    //save the encoded accout to web storage
    localStorage.setItem('formData', formData);
}
