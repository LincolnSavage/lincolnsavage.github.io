

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('visible');
  } else {
    $('nav').removeClass('visible');
  }
});

$('p:has(img)').addClass('image-container');
jQuery('.image-container').children('img').each(function() {
	$(this).attr("data-src",$(this).attr("src"));
	$(this).removeAttr("src");
});

$("#my_form").submit(function(event){
    event.preventDefault(); //prevent default action 
    var form_data = $(this).serialize(); //Encode form elements for submission
    $.ajax({
    	method: 'POST',
    	url: 'https://www.enformed.io/brq2ec8/',
    	dataType: 'json',
    	data: form_data,
    	success: success(),
    	error: (err) => console.log(err)
    });
});

function success(){
	$("#my_form")[0].reset();
	$('.confirm').addClass('confirm--visible');
};