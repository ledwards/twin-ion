(function($) {
  $.fn.socketDraggable = function(options) {
    this.draggable({
      start: function(event, ui){
        $(this).css('cursor', 'move');
        $(".ui-draggable").css('z-index', 0);
        $(this).css('z-index', 1);
      },

      stop: function(event, ui){
        $(this).css('cursor', 'default');
        var selector = "#" + $(this).attr('id');
        options.socket.emit('elementMoved', {
          selector: selector,
          position: ui.position
        });
      }
    });

    this.css("position", "absolute");
    return this;
  }
})(jQuery)
