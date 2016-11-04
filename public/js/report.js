$('document').ready(function(){
    loadBlankForm();
});


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


function loadBlankForm() {
    console.log("In land form");
    var formData = localStorage.getItem('formData');
    console.log(formData);

    localStorage.removeItem('formData');
    //decodes a string data encoded using base-64

    //parses to Object the JSON string
    output = JSON.parse(formData);
    console.log(formData);
    //do what you need with the Object
           var layout="";
           $('#theform').append('<div id="formname" class="collection-header" data-id='+output.id+'><h4>'+output.name+'</h4></div>');
           $.each(output.options, function( index, value ) {

             $('#theform').append(' <div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s12"> <textarea id=1  class="materialize-textarea" data-id=1>'+value.value+'</textarea> <label class="active" for=1>'+value.label+' </label> </div> </div> </form> </div>');
               // if(value.type == "checkbox"){
               //     $('#theform').append('<form action="#"> <p> <input data-id='+ value.id + ' type="checkbox" id='+ value.id + ' /> <label for='+ value.id+'>value.label</label> </p> </form>');
               // }else if(value.type == "text"){
               //     layout.concat("hey");
               //      $('#theform').append(' <div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s12"> <textarea id='+ value.id + '  class="materialize-textarea" data-id='+ value.id + '>'+value.value+'</textarea> <label for=' + value.id+ '>'+value.label+' </label> </div> </div> </form> </div>');

               // }


   });
    return true;
}
