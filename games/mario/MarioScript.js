/* Prototype of simple mario-like game with jQuery */

var x = 0;
var y = 0;
var mario = $(".mario");
var box = $(".box");

//on keydown event, check if it's left arrow or right arrow
$(document).keydown(function(e) {
  //console.log(e);

  //if right, translate X +20px to mario
  if (e.keyCode == "39") {
    x = x + 20;
    $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
  }

  //if left, translate X -20px to mario - check to keep mario in the window (> 0px)
  if (e.keyCode == "37") {
    x = x - 20;
    if (x >= 0) {
      $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
    } else {
      x = 0;
    }
  }
  //if up, translate Y -90px to mario
  if (e.keyCode == "38") {
    y = y - 90;
    $(".mario").css("transform", "translate(" + x + "px," + y + "px)");

    var mario_top = mario.offset().top;

    var box_top = box.offset().top;

    //check for collision with coin box
    if (
      mario.offset().left + mario.width() / 2 > box.offset().left &&
      mario.offset().top > box.offset().top
    ) {
      if (
        mario.offset().left + mario.width() / 2 <
        box.offset().left + box.width()
      ) {
        console.log("touch !");

        //start box animation after 0.1s (time for mario's jump)
        setTimeout(function() {
          $(".coin").addClass("coin_animation");
          $(".box").addClass("box_animation");
        }, 100);

        //show the winner title screen
        setTimeout(function() {
          $(".title").removeClass("hide");
        }, 500);
      }
    }

    //reset mario jump
    setTimeout(function() {
      y = y + 90;
      $(".mario").css("transform", "translate(" + x + "px," + y + "px)");
    }, 200);
  }
});

//reset game
$(".title a").click(function() {
  x = 0;
  y = 0;
  $(".mario").css("transform", "translate(0px,0px)");
  $(".coin").removeClass("coin_animation");
  $(".box").removeClass("box_animation");
  setTimeout(function() {
    $(".title").addClass("hide");
  }, 100);
});
