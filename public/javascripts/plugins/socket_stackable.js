(function($) {
  $.fn.socketStackable = function(options) {
    this.droppable({
      drop: function(event, ui){
              console.log("You dropped a card on a stack");
        var stackableCid = "#" + $(this).attr('id');
        var draggableCid = "#" + ui.draggable.attr('id');
      }
    });
    return this;
  }
})(jQuery)

