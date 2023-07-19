(function(jQuery) {
  jQuery(document).ready(function() {
    jQuery('.trigger').hover(handleMouseOver, handleMouseOut);

    const originalContent = jQuery('.target').html();
    let isFadingOut = false;

    function handleMouseOver() {
      if (isFadingOut) return;
      const content = jQuery(this).data('content');
      const target = jQuery('.target');
      target.css('opacity', 0);
      isFadingOut = true;

      setTimeout(() => {
        target.html(content);
        target.css('opacity', 1);
        isFadingOut = false;
      }, 500);
    }

    function handleMouseOut() {
      if (isFadingOut) return;
      const target = jQuery('.target');
      target.css('opacity', 0);

      setTimeout(() => {
        target.html(originalContent);
        target.css('opacity', 1);
      }, 500);
    }
  });
})(jQuery);

