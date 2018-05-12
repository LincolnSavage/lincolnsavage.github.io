

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

console.log("Woe");