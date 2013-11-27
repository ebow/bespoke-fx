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
      13 Different easing / from right
    },
    "different-easing-from-left": {
      14 Different easing / from left
    },
    "different-easing-from-bottom": {
      15 Different easing / from bottom
    },
    "different-easing-from-top": {
      16 Different easing / from top
    },
    
    // Scale
    "scale-down-from-right": {
      17 Scale down / from right
    },
    "scale-down-from-left": {
      18 Scale down / from left
    },
    "scale-down-from-bottom": {
      19 Scale down / from bottom
    },
    "scale-down-from-top": {
      20 Scale down / from top
    },
    "scale-down-scale-down": {
      21 Scale down / scale down
    },
    "scale-up-scale-up": {
      22 Scale up / scale up
    },
    "move-to-left-scale-up": {
      23 Move to left / scale up
    },
    "move-to-right-scale-up": {
      24 Move to right / scale up
    },
    "move-to-top-scale-up": {
      25 Move to top / scale up
    },
    "move-to-bottom-scale-up": {
      26 Move to bottom / scale up
    },
    "scale-down-scale-up": {
		27 Scale down / scale up
    },
    
    // Rotate
      Glue
			28 Glue left / from right
			29 Glue right / from left
			30 Glue bottom / from top
			31 Glue top / from bottom
      
      Flip
			32 Flip right
			33 Flip left
			34 Flip top
			35 Flip bottom
      
		36 Fall
		37 Newspaper
    
      Push / Pull
			38 Push left / from right
			39 Push right / from left
			40 Push top / from bottom
			41 Push bottom / from top
			42 Push left / pull right
			43 Push right / pull left
			44 Push top / pull bottom
			45 Push bottom / pull top
      
      Fold / Unfold
			46 Fold left / from right
			47 Fold right / from left
			48 Fold top / from bottom
			49 Fold bottom / from top
			50 Move to right / unfold left
			51 Move to left / unfold right
			52 Move to bottom / unfold top
			53 Move to top / unfold bottom
      
      Room
			54 Room to left
			55 Room to right
			56 Room to top
			57 Room to bottom
      
			Cube
			58 Cube to left
			59 Cube to right
			60 Cube to top
			61 Cube to bottom
      
			Carousel
			62 Carousel to left
			63 Carousel to right
			64 Carousel to top
			65 Carousel to bottom
    66 Sides
		67 Slide
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
