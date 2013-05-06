$(document).ready(function(){
  TwinIon.socket = io.connect('http://localhost');

  var card1 = new TwinIon.Card({
    position: { top: "100px", left: "100px"},
    thumbnail_url: "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/744/thumbnail.gif"
  });
  var card2 = new TwinIon.Card({
    thumbnail_url: "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/7/thumbnail.gif"
  });
  var card3 = new TwinIon.Card({
    thumbnail_url: "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/8/thumbnail.gif"
  });

  var stack = new TwinIon.Stack({ cards: [card2, card3] });

  TwinIon.socket.on('systemMessage', function(data) {
    console.log(data.message);
  });

  TwinIon.socket.on('updateElementPosition', function(selector, position) {
    $(selector).css('left', position.left);
    $(selector).css('top', position.top);
    $(".card").css('z-index', 0);
    $(selector).css('z-index', 1);
  });

  TwinIon.socket.on('addElementToStack', function(data){
    addCardtoStack(data.draggableCid, data.droppableCid);
  });

  var addCardtoStack = function(cardCid, stackCid){
    // move element to stack
    card.hide();
    // flash stack
    // update model
  };

  new TwinIon.CardView({ model: card1 }).render();
  new TwinIon.StackView({ model: stack }).render();
});
