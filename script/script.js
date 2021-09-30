$(document).ready(function() {
    $(".flPointContent").hide();
    $(".darken").hide();
    $(".posDivForm").hide();
    $(".flPointArt").mouseenter(function() {
	$(this).children(".flPointContent").show();
    });
    $(".flPointArt").mouseleave(function() {
	$(this).children(".flPointContent").hide();
    });
    $(".loginBut").click(function() {
	$(".darken").show();
	$(".posDivForm").show();
    });
    $(".posDivForm").click(function() {
	//
    });
});
