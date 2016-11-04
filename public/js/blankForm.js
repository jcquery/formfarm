$('document').ready(function(){
    loadBlankForm();
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



function loadBlankForm() {
    console.log("In land form");
    var formData = localStorage.getItem('_formData');
    console.log(formData);
    if (!formData) return false;
    localStorage.removeItem('_formData');
    //decodes a string data encoded using base-64

    //parses to Object the JSON string
    formData = JSON.parse(formData);

    //do what you need with the Object
     $.ajax({
       url: "/api/form/"+formData.id,
       type: 'GET',
       data: {},
       success: function (output) {
           var layout="";
           $('#theform').append('<div id="formname" class="collection-header" data-id='+output.id+'><h4>'+output.name+'</h4></div>');
           $.each(output.options, function( index, value ) {


               if(value.type == "checkbox"){
                   $('#theform').append('<form action="#"> <p> <input data-id='+ value.id + ' type="checkbox" id='+ value.id + ' /> <label for='+ value.id+'>value.label</label> </p> </form>');
               }else if(value.type == "text"){
                   layout.concat("hey");
                    $('#theform').append(' <div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s12"> <textarea id='+ value.id + '  class="materialize-textarea" data-id='+ value.id + '></textarea> <label for=' + value.id+ '>'+value.label+' </label> </div> </div> </form> </div>');

               }



           });



       }

   });
    return true;
}


$('#blankSubmit').click(function() {
    var options = [];
    var op = $('#theform').find('.input-field');
    var options=[]
    var finaldic ={id: $('#formname').attr('data-id')}
    console.log(op);
    console.log("Submit new form");
     op.each(function( index, value ) {

            var node = {
                value: value.children[0].value,
                id: parseInt(value.children[0].dataset.id,10)

            }
            options.push(node);
            node={};



           });
     finaldic["options"] = options;

     console.log(finaldic);

    $.ajax({
        url: "/api/response",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(finaldic),
        success: function (output) {
          window.location.href = '/index.html';
        }

    });
});
