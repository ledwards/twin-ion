(function() {
  var namespace = this;
  namespace.CardView = Backbone.View.extend({
    initialize: function() {
      this.container = $("#board");
    },

    render: function() {
      this.el = $(_.template( $("#card_template").html(), this.model.asJSON() ));
      this.el.socketDraggable({ socket: TwinIon.socket });
      this.container.append(this.el);
      return this;
    }
  });
}).apply(TwinIon);
