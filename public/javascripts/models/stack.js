(function() {
  var namespace = this;

  namespace.Stack = Backbone.Model.extend({
    defaults: {
      position: { top: 0, left: 0 }
    },

    initialize: function(){
      this.cards = new TwinIon.CardCollection;
      this.cards.bind("add", function(card){
        console.log(card);
      });
    },

    asJSON: function() {
      return $.extend({}, this.toJSON(), {
        cid: this.cid
      });
    }
  });
}).apply(TwinIon);

