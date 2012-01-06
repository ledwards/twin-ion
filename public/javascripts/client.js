var drawTable = function(cards) {
  $.each(cards, function(index, card){
    new TwinIon.CardView({ model: card }).render();
  });
};

$(document).ready(function(){
  TwinIon.socket = io.connect('http://localhost');

  var card1 = new TwinIon.Card({
    domID: "card_1",
    src: "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/7/thumbnail.gif"
  });
  var card2 = new TwinIon.Card({
    domID: "card_2",
    src: "http://s3.amazonaws.com/ledwards-swccgvkit-production/card_images/744/thumbnail.gif"
  });
  var cards = [card1, card2]

  TwinIon.socket.on('systemMessage', function(data) {
    console.log(data.message);
  });

  TwinIon.socket.on('updateElementPosition', function(selector, position) {
    $(selector).css('left', position.left);
    $(selector).css('top', position.top);
    $(".card").css('z-index', 0);
    $(selector).css('z-index', 1);
  });

  drawTable(cards);
});
