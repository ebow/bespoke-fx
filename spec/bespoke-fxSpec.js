(function() {
  'use strict';

  describe("bespoke-fx", function() {

    var deck,

      createDeck = function() {
        var parent = document.createElement('article');
        for (var i = 0; i < 10; i++) {
          parent.appendChild(document.createElement('section'));
        }

        deck = bespoke.from(parent, {
          fx: true
        });
      };

    beforeEach(createDeck);
    
    describe("transitioning to next slide", function() {
      describe("when there is a next slide", function() {
        it("should transition to the next slide", function() {
          expect();
        });
      });
    });

    describe("deck.slide", function() {

      beforeEach(function() {
        deck.slide(0);
      });

      it("should not add a useless 'foobar' class to the slide", function() {
        expect(deck.slides[0].classList.contains('foobar')).toBe(false);
      });

    });

  });

}());
