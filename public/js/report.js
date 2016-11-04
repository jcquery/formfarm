
$('document').ready(function(){
    loadId();
});




//Load an existing form with the data supplied that is stored in db
function loadId() {
    var formData = localStorage.getItem('_id');
    if (!formData) return false;
    localStorage.removeItem('_formData');
    //decodes a string data encoded using base-64
    formData = atob(formData);
    //parses to Object the JSON string
    formData = JSON.parse(formData);
    $.ajax({
        url: "/getDataofReport",
        type: 'GET',
        data: {id: formData.id},
        success: function (output) {
            var layout;
            $.each(output, function( index, value ) {
                if(value[index].type == "checkbox"){
                    layout.concat('<form action="#"> <p> <input type="checkbox" id='+ value.id + ' /> <label for='+ value.id+'>value.label</label> </p> </form>');
                }else if(value[index].type == "text"){
                    layout.concat(' <div class="row"> <form class="col s12"> <div class="row"> <div class="input-field col s12"> <textarea id=' + value.value+ ' class="materialize-textarea"></textarea> <label for=' + value.value+ '>' + value.name+ '</label> </div> </div> </form> </div>');
                }

            });
            $('#theform').append(layout);

        }

    });
    //do what you need with the Object
    return true;
}