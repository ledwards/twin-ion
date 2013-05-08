(function() {
  var namespace = this;
  namespace.StackView = Backbone.View.extend({
    initialize: function() {
      this.container = $("#board");
    },

    render: function() {
      this.el = $(_.template( $("#stack_template").html(), this.model.asJSON() ));
      this.container.append(this.el);
      return this;
    }
  });
}).apply(TwinIon);

