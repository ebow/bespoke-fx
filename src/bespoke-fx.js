(function(bespoke) {
  bespoke.plugins.fx = function(deck) {
    var fx = {
    // Move
    "move-to-left-from-right": {
      id: 1,
      group: "move",
      label: "Move to left/ from right",
      outClass: 'pt-page-moveToLeft',
      inClass: 'pt-page-moveFromRight'
    },
    "move-to-right-from-left": {
      id: 2,
      group: "move",
      label: "Move to right / from left",
      outClass: 'pt-page-moveToRight',
      inClass: 'pt-page-moveFromLeft'
    },
    "move-to-top-from-bottom": {
      id: 3,
      group: "move",
      label: "Move to top / from bottom",
      outClass: 'pt-page-moveToTop',
      inClass: 'pt-page-moveFromBottom'
    },
    "move-to-bottom-from-top": {
      id: 4,
      group: "move",
      label: "Move to bottom / from top",
      outClass: 'pt-page-moveToBottom',
      inClass: 'pt-page-moveFromTop'
    },
    
    // Fade
    "fade-from-right": {
      id: 5,
      group: "fade",
      label: "Fade / from right",
      outClass: 'pt-page-fade',
      inClass: 'pt-page-moveFromRight pt-page-ontop'
    },
    "fade-from-left": {
      id: 6,
      group: "fade",
      label: "Fade / from left",
      outClass: 'pt-page-fade',
      inClass: 'pt-page-moveFromLeft pt-page-ontop'
    },
    "fade-from-bottom": {
      id: 7,
      group: "fade",
      label: "Fade / from bottom",
      outClass: 'pt-page-fade',
      inClass: 'pt-page-moveFromBottom pt-page-ontop'
    },
    "fade-from-top": {
      id: 8,
      group: "fade",
      label: "Fade / from top"
      outClass: 'pt-page-fade',
      inClass: 'pt-page-moveFromTop pt-page-ontop'
    },
    "fade-left-fade-right": {
      id: 9,
      group: "fade",
      label: "Fade left / Fade right",
      outClass: 'pt-page-moveToLeftFade',
      inClass: 'pt-page-moveFromRightFade'
    },
    "fade-right-fade-left": {
      id: 10,
      group: "fade",
      label: "Fade right / Fade left",
      outClass: 'pt-page-moveToRightFade',
      inClass: 'pt-page-moveFromLeftFade'
    },
    "fade-top-fade-bottom": {
      id: 11,
      group: "fade",
      label: "Fade top / Fade bottom",
      outClass: 'pt-page-moveToTopFade',
      inClass: 'pt-page-moveFromBottomFade'
    },
    "fade-bottom-fade-top": {
      id: 12,
      group: "fade",
      label: "Fade bottom / Fade top",
      outClass: 'pt-page-moveToBottomFade',
      inClass: 'pt-page-moveFromTopFade'
    },
    
    // Different easing
    "different-easing-from-right": {
      id: 13,
      group: "different-easing",
      label: "Different easing / from right"
    },
    "different-easing-from-left": {
      id: 14,
      group: "different-easing",
      label: "Different easing / from left"
    },
    "different-easing-from-bottom": {
      id: 15,
      group: "different-easing",
      label: "Different easing / from bottom"
    },
    "different-easing-from-top": {
      id: 16,
      group: "different-easing",
      label: "Different easing / from top"
    },
    
    // Scale
    "scale-down-from-right": {
      id: 17,
      group: "scale",
      label: "Scale down / from right"
    },
    "scale-down-from-left": {
      id: 18,
      group: "scale",
      label: "Scale down / from left"
    },
    "scale-down-from-bottom": {
      id: 19,
      group: "scale",
      label: "Scale down / from bottom"
    },
    "scale-down-from-top": {
      id: 20,
      group: "scale",
      label: "Scale down / from top"
    },
    "scale-down-scale-down": {
      id: 21,
      group: "scale",
      label: "Scale down / scale down"
    },
    "scale-up-scale-up": {
      id: 22,
      group: "scale",
      label: "Scale up / scale up"
    },
    "move-to-left-scale-up": {
      id: 23,
      group: "scale",
      label: "Move to left / scale up"
    },
    "move-to-right-scale-up": {
      id: 24,
      group: "scale",
      label: "Move to right / scale up"
    },
    "move-to-top-scale-up": {
      id: 25,
      group: "scale",
      label: "Move to top / scale up"
    },
    "move-to-bottom-scale-up": {
      id: 26,
      group: "scale",
      label: "Move to bottom / scale up"
    },
    "scale-down-scale-up": {
      id: 27,
      group: "scale",
      label: "Scale down / scale up"
    },
    
    // Rotate: Glue
    "glue-left-from-right": {
      id: 28,
      group: "rotate:glue",
      label: "Glue left / from right"
    },
    "glue-right-from-left": {
      id: 29,
      group: "rotate:glue",
      label: "Glue right / from left"
    },
    "glue-bottom-from-top": {
      id: 30,
      group: "rotate:glue",
      label: "Glue bottom / from top"
    },
    "glue-top-from-bottom": {
      id: 31,
      group: "rotate:glue",
      label: "Glue top / from bottom"
    },
    
    // Rotate: Flip
    "flip-right": {
      id: 32,
      group: "rotate:flip",
      label: "Flip right"
    },
    "flip-left": {
      id: 33,
      group: "rotate:flip",
      label: "Flip left"
    },
    "flip-top": {
      id: 34,
      group: "rotate:flip",
      label: "Flip top"
    },
    "flip-bottom": {
      id: 35,
      group: "rotate:flip",
      label: "Flip bottom"
    },
    "fall": {
      id: 36,
      group: "rotate",
      label: "Fall"
    },
    "newspaper": {
      id: 37,
      group: "rotate",
      label: "Newspaper"
    },
    
    // Push / Pull
    "push-left-from-right": {
      id: 38,
      group: "rotate:push-pull",
      label: "Push left / from right"
    },
    "push-right-from-left": {
      id: 39,
      group: "rotate:push-pull",
      label: "Push right / from left"
    },
    "push-top-from-bottom": {
      id: 40,
      group: "rotate:push-pull",
      label: "Push top / from bottom"
    },
    "push-bottom-from-top": {
      id: 41,
      group: "rotate:push-pull",
      label: "Push bottom / from top"
    },
    "push-left-pull-right": {
      id: 42,
      group: "rotate:push-pull",
      label: "Push left / pull right"
    },
    "push-right-pull-left": {
      id: 43,
      group: "rotate:push-pull",
      label: "Push right / pull left"
    },
    "push-top-pull-bottom": {
      id: 44,
      group: "rotate:push-pull",
      label: "Push top / pull bottom"
    },
    "push-bottom-pull-top": {
      id: 45,
      group: "rotate:push-pull",
      label: "Push bottom / pull top"
    }
      
    // Fold / Unfold
    "fold-left-from-right": {
      id: 46,
      group: "rotate:fold-unfold",
      label: "Fold left / from right"
    },
    "fold-right-from-left": {
      id: 47,
      group: "rotate:fold-unfold",
      label: "Fold right / from left"
    },
    "fold-top-from-bottom": {
      id: 48,
      group: "rotate:fold-unfold",
      label: "Fold top / from bottom"
    },
    "fold-bottom-from-top": {
      id: 49,
      group: "rotate:fold-unfold",
      label: "Fold bottom / from top"
    },
    "move-to-right-unfold-left": {
      id: 50,
      group: "rotate:fold-unfold",
      label: "Move to right / unfold left"
    },
    "move-to-left-unfold-right": {
      id: 51,
      group: "rotate:fold-unfold",
      label: "Move to left / unfold right"
    },
    "move-to-bottom-unfold-top": {
      id: 52,
      group: "rotate:fold-unfold",
      label: "Move to bottom / unfold top"
    },
    "move-to-top-unfold-bottom": {
      id: 53,
      group: "rotate:fold-unfold",
      label: "Move to top / unfold bottom"
    }
      
    // Room
    "room-to-left": {
      id: 54,
      group: "rotate:room",
      label: "Room to left"
    },
    "room-to-right": {
      id: 55,
      group: "rotate:room",
      label: "Room to right"
    },
    "room-to-top": {
      id: 56,
      group: "rotate:room",
      label: "Room to top"
    },
    "room-to-bottom": {
      id: 57,
      group: "rotate:room",
      label: "Room to bottom"
    }
      
    // Cube
    "cube-to-left": {
      id: 58,
      label: "Cube to left"
    },
    "cube-to-right": {
      id: 59,
      label: "Cube to right"
    },
    "cube-to-top": {
      id: 60,
      label: "Cube to top"
    },
    "cube-to-bottom" {
      id: 61,
      label: "Cube to bottom"
    }
      
    // Carousel
    "carousel-to-left": {
      id: 62,
      group: "rotate:carousel",
      label: "Carousel to left"
    },
    "carousel-to-right": {
      id: 63,
      group: "rotate:carousel",
      label: "Carousel to right"
    },
    "carousel-to-top": {
      id: 64,
      group: "rotate:carousel",
      label: "Carousel to top"
    },
    "carousel-to-bottom": {
      id: 65,
      group: "rotate:carousel",
      label: "Carousel to bottom"
    }
    "sides": {
      id: 66,
      group: "rotate",
      label: "Sides"
    },
    "slide": {
      id: 67,
      label: "Slide"
    }
  }





    /*
      Interact with the deck
      https://github.com/markdalgleish/bespoke.js#deck-instances
    */
    deck.next();
    deck.prev();
    deck.slide(0);

    /*
       Handle events
       https://github.com/markdalgleish/bespoke.js#events
    */
    deck.on('activate', function(e) {
      console.log('Slide #' + e.index + ' was activated!', e.slide);
    });

    deck.on('deactivate', function(e) {
      console.log('Slide #' + e.index + ' was deactivated!', e.slide);
    });

    deck.on('next', function(e) {
      console.log('The next slide is #' + (e.index + 1), deck.slides[e.index + 1]);
      // return false to cancel user interaction
    });

    deck.on('prev', function(e) {
      console.log('The previous slide is #' + (e.index - 1), deck.slides[e.index - 1]);
      // return false to cancel user interaction
    });

    deck.on('slide', function(e) {
      console.log('The requested slide is #' + e.index, e.slide);
      // return false to cancel user interaction
    });
  };

}(bespoke));
