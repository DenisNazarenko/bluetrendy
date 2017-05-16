(function ($) {
  $.fn.animateRight = function () {
    $(this).animate({ "left": "+=100px" }, "slow");
  }
}( jQuery ));