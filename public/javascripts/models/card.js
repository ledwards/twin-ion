(function() {
  var namespace = this;

  namespace.Card = Backbone.Model.extend({
    defaults: {
      position: { top: 0, left: 0 }
    }
  });
}).apply(TwinIon);
