(function() {
  var namespace = this;

  namespace.Pile = Backbone.Collection.extend({
    model: TwinIon.Card
  });
}).apply(TwinIon);
