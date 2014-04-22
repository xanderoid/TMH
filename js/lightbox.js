//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image (lightbox effect)

//store overlay, image and caption in variable
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// add an image to overlay
$overlay.append($image);
// add a caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);
	

	//optional: add navigation to overlay


// Capture click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", imageLocation);

	//Show the overlay.
	$overlay.show();
	

	//Get child's alt attribute and set caption	
});


//3 When overlay is clicked
$overlay.click(function(){
	//3.1 Hide the overlay
	$overlay.hide();

});
