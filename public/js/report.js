$('document').ready(function(){
    loadBlankForm();
});





function loadBlankForm() {
    console.log("In land form");
    var formData = localStorage.getItem('_formData');
    console.log(formData);

    localStorage.removeItem('_formData');
    //decodes a string data encoded using base-64

    //parses to Object the JSON string
    formData = JSON.parse(formData);

    //do what you need with the Object
     $.ajax({
       url: "/api/response/"+1,
       type: 'GET',
       data: {},
       success: function (output) {
        console.log(output);
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



       }

   });
    return true;
}
