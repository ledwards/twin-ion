(function() {
  var namespace = this;

  namespace.Card = Backbone.Model.extend({
    backend: 'mybackend',

    defaults: {
      position: { top: 0, left: 0 }
    },

    initialize: function(){
      this.uuid = uuid.v4();
      TwinIon.game.objectRegister[this.uuid] = this;
      this.bindBackend();
    },

    asJSON: function() {
      return $.extend({}, this.toJSON(), {
        cid: this.cid
      });
    }
  });
}).apply(TwinIon);
