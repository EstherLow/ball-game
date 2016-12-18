var ball = $('#ball');
var moves

$(window).keydown(function( event ) {
  console.log( event.type + ": " +  event.which );
  if (event.which == 40) {$('#ball').css("top", '+=10')}
  if (event.which == 38) {$('#ball').css("top", '-=10')}
  if (event.which == 39) {$('#ball').css("left", '+=10')}
  if (event.which == 37) {$('#ball').css("left", '-=10')}
});

$('#up').mousedown (function() {
  moves = setInterval(function() {
  ball.css("top", '-=1'), 50000});
  console.log("up clicked")

})
$('#up').mouseup(function(){
  clearInterval(moves);
  })

$('#down').mousedown(function() {
      moves = setInterval(function() {
      ball.css("top", '+=1'), 50000});
      console.log("down clicked");
    })

$('#down').mouseup(function(){
  clearInterval(moves);
  })

$('#left').mousedown(function() {
  moves = setInterval(function() {
  ball.css("left", '-=1'), 50000});
})
$('#left').mouseup(function(){
  clearInterval(moves);
  })

$('#right').mousedown(function(){
  moves = setInterval(function() {
  ball.css("left", '+=1'), 50000});
})

$('#right').mouseup(function(){
  clearInterval(moves);
  })
