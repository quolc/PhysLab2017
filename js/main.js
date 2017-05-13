$(function() {
  if ($('.index-container').length == 1) {
    $('.bxslider').bxSlider();
  }
  if ($('.exhibition-container').length == 1) {
    $('.group').each(function() {
      var h = $(this).find('.group-body').height();
      if ($(this).height() < h) {
        $(this).css('height', h);
      }
    });
  }
});
