$('document').ready(function(){

console.log('hey');

// var arrayOfOptions = [{
// 0: 'Location',
// 1: 'Team Leader',
// 2: 'What workers are present in am?',
// 3: 'Are there new tools or procedures that need to be talked about?',
// 4: 'What are the hazards to be aware of?',
// 5: 'Personal protective equipment needed?',
// 6: 'When lifting heavy objects, the large mu:scles of the leg instead of the smaller muscles of the back shall be used.',
// 7: 'Inappropriate footwear or shoes with thin or badly worn soles shall not be worn.',
// 8: 'Safe practices for operating any agricultural equipment, including procedures for cleaning, repairing, servicing and adjusting.',
// 9: 'Electrical hazards',
// 10: 'Heat stress.',
// 11: 'Ergonomic hazards, including proper lifting techniques and working on ladders or in a stooped posture for prolonged periods at one time.',
// 12: 'Hazardous chemical exposures.',
// 13: 'Guarding of belts and pulleys, gears and sprockets, and conveyor nip points. ',
// 14: 'Machine, machine pa:rts, and prime movers guarding. ',
// 15: 'Lock-out/tag-out procedures. ',
// 16: 'Materials handling. ',
// 17: 'Ergonomic hazards, including proper lifting techniques. ',
// 18: 'Noise'
// }];

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

$.get("/api/options", function (output) {
		output.forEach(function(element, index) {
			var target;
			index < 6 ? target = $('.default') : target = $('.store');
			target.append('<li><a id="optionItem" class="collection-item" data-id=' + element.id + ' href="#!">' + element.label + '</a></li>')
		});
	}
)

$('.store').on('click', 'li', function(){
	$(this).appendTo('.default');
});

$('.default').on('click', 'li', function(event){
	if ($(event.target).attr('data-id') > 6) {
		$(event.target).appendTo('.store');
	}
});

$('#send').click(function() {
	var newForm = {};
	var options = []

	newForm.name = $('#formname').val();
	$('.default li a').each(function(index, element) {
		options.push(Number.parseInt($(element).attr('data-id')));
	});

	newForm.options = options;
	console.log(newForm);

	const $xhr = $.ajax({
		url: '/api/form',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(newForm)
	});

	$xhr.done((res) => {
		window.location.href = '/index.html';
	});
});

}); // 4nd of document ready. do not delet8
