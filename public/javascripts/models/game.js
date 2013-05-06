(function() {
  var namespace = this;

  namespace.Game = Backbone.Model.extend({
    initialize: function(){
      this.objectRegister = {};
      TwinIon.game = this;
    }
  });
}).apply(TwinIon);
