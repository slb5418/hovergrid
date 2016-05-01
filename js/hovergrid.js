
var heightGrid=$('#grid').css('height');
var widthGrid=$('#grid').css('width');

$(document).ready(function(){

	initializeGrid(16,16);

	$(document).on('mouseenter', '.block', function(){
		$(this).css('background-color', '#C0C0C0');
	});
	
});

$("#newGrid1").click(function(){

	// remove the "block" class to clear the current grid
	$('.block').remove();

	$(document).unbind('mouseenter');
	$(document).unbind('mouseleave');

	var numBlocks = prompt("How many blocks on each side?");
	initializeGrid(numBlocks, numBlocks);

	$(document).on('mouseenter', '.block', function(){
		$(this).css('background-color', 'rgb(0,0,0)');
	});

});

$("#newGrid2").click(function(){

	// remove the "block" class to clear the current grid
	$('.block').remove();

	$(document).unbind('mouseenter');
	$(document).unbind('mouseleave');

	var numBlocks = prompt("How many blocks on each side?");
	initializeGrid(numBlocks, numBlocks);

	$(document).on('mouseenter', '.block', function(){
		$(this).css('background-color', 'rgb(0,0,0)');
	});

	$(document).on('mouseleave', '.block', function(){
		$(this).css('background-color', '#FFFFFF');
	});

});

$("#newGrid3").click(function(){

	// remove the "block" class to clear the current grid
	$('.block').remove();

	$(document).unbind('mouseenter');
	$(document).unbind('mouseleave');

	var numBlocks = prompt("How many blocks on each side?");
	initializeGrid(numBlocks, numBlocks);

	$(document).on('mouseenter', '.block', function(){

		if ($(this).css('background-color') == 'rgb(255, 255, 255)') {
			var shade = Math.floor(Math.random()*255);
			$(this).css('background-color', 'rgb('+shade+','+shade+','+shade+')');

		}  else if ( $(this).css('background-color') != ('rbg(255, 255, 255)' || 'rbg(0, 0, 0)')) {
			shade = $(this).css('background-color').split(',')[1];
			shade = Math.floor(shade * .9);
			$(this).css('background-color', 'rgb('+shade+','+shade+','+shade+')');	

		}  else {}
	});

});


$("#newGrid4").click(function(){

	// remove the "block" class to clear the current grid
	$('.block').remove();

	$(document).unbind('mouseenter');
	$(document).unbind('mouseleave');

	var numBlocks = prompt("How many blocks on each side?");
	initializeGrid(numBlocks, numBlocks);

	$(document).on('mouseenter', '.block', function(){

		if ($(this).css('background-color') == 'rgb(255, 255, 255)') {
			$(this).css('background-color', 'rgb('+rand255()+','+rand255()+','+rand255()+')');

		}  else if ( $(this).css('background-color') != ('rbg(255, 255, 255)' || 'rbg(0, 0, 0)')) {
			var rgb = $(this).css('background-color').split(',')
			var r = rgb[0].split('(')[1]-25;
			var g = rgb[1]-25;
			var b = rgb[2].split(')')[0]-25;
			$(this).css('background-color', 'rgb('+r+','+g+','+b+')');	

		}  else {}
	});

});

function rand255() {return Math.floor(Math.random()*255);}

function initializeGrid(numrows,numcols) {

	var blockHeight= parseInt(heightGrid)/numrows-2;
	var blockWidth= parseInt(widthGrid)/numcols-2;

	for (var i=0; i<numrows; i++){
		for (var j=0; j<numcols; j++){
			$('#grid').append('<div class="block"></div>');
		}
	}

	$(".block").css("background-color", "#FFFFFF");
	$(".block").css("height", blockHeight + "px");
	$(".block").css("width", blockWidth + "px");
	$(".block").css("border", "solid 0.5px");
}
