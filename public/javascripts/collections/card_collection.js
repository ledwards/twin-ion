(function() {
  var namespace = this;

  namespace.CardCollection = Backbone.Collection.extend({
    model: TwinIon.Card,
    backend: 'mybackend',

    initialize: function() {
        this.bindBackend();
    }
  });
}).apply(TwinIon);
