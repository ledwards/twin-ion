(function() {
  var namespace = this;

  namespace.CardCollection = Backbone.Collection.extend({
    model: TwinIon.Card
  });
}).apply(TwinIon);
