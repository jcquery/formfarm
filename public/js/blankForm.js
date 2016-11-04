$('document').ready(function(){
    loadBlankForm();
});





function loadBlankForm() {
    var formData = localStorage.getItem('_formData');
    if (!formData) return false;
    localStorage.removeItem('_formData');
    //decodes a string data encoded using base-64
    formData = atob(formData);
    //parses to Object the JSON string
    formData = JSON.parse(formData);
    //do what you need with the Object
    return true;
}