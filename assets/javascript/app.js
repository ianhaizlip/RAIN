


//========================== signup/signin form ========================//

$(window).on('load', function(){
 // initApp();



$("#signInModal").modal("show");

$(".team-clean").hide();
// $("#home").hide();



$(".log-in").click(function(){
    $(".signIn").addClass("active-dx");
    $(".signUp").addClass("inactive-sx");
    $(".signUp").removeClass("active-sx");
    $(".signIn").removeClass("inactive-dx");
});

$(".back").click(function(){
    $(".signUp").addClass("active-sx");
    $(".signIn").addClass("inactive-dx");
    $(".signIn").removeClass("active-dx");
    $(".signUp").removeClass("inactive-sx");
});





// Validating Empty Field
function check_empty() {
if (document.getElementById('Email').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('my-form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}



});
//======================= end form ==================================//

//======================= card popup ===============================//

$("#searchButton").on("click", function(){
	console.log('clicked');
	// $('.card-block').fadeIn('slow');

	$('.cardcontainer, fa fa-window-close').toggleClass('active');
  	$('.search-form').hide();


});

$('.fa').on('click', function(){
	console.log('click');
		$('.cardcontainer').toggleClass('active');
		$('.search-form').show();
	})

//======================= end card ===============================//














//======================== about page ===============================//


$("#about").on("click", function(){
    console.log("clicked about")
    $(".team-clean").show();
    $("#mainPage").hide();
})


$("#home").on("click", function(){
    console.log("clicked")
    $(".team-clean").hide();
    $("#mainPage").show();
})





//========================about======================//


//==========================img for search bar=====================//


 // var grapeImage = $('<img>');
 //            grapeImage.attr('src', response.results[j].image);
 //            grapeImage.addClass('grapeImage');
 //            grapeImage.addClass('img-responsive');
 //            grapeImage.attr('data-Id', response.results[j].id);
 //            grapeImage.attr('data-sourceUrl', response.results[j].sourceUrl);







