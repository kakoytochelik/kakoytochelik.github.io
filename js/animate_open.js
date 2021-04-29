$(document).ready(function() {
    $("body").css("display", "none");
    $("body").fadeIn(1000);

	$("a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
        $("body").addClass('body_bg_white');
		$("body").fadeOut(1000, redirectPage);
        $("body").removeClass('body_bg_white');
        $("body").fadeIn(3000);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
    
});