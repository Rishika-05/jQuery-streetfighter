$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    })
    .mouseleave(function()
    {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    })
    .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
    {'left':'1020px'},500,function()
    {
    	$('.hadouken').hide();
    	$('.hadouken').css('left','526px');
    });
    })
    .mouseup(function()
    {
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();
    });
});
function playHadouken(){
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
window.addEventListener("keydown",chkkeypress,false);
function chkkeypress(key)
{
	if(key.keyCode=="88")
	{
		$('.ryu-ready').hide();
    	$('.ryu-cool').show();
	}
}
window.addEventListener("keyup",chkkeyrelease,false);
function chkkeyrelease(key)
{
	if(key.keyCode=="88")
	{
		$('.ryu-ready').show();
    	$('.ryu-cool').hide();
	}
}