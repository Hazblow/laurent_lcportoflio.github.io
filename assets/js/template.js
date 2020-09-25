jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

});

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 0);
 
});