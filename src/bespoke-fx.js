/*!
 * bespoke-fx v0.1.0
 * https://github.com/ebow/bespoke-fx
 *
 * Copyright 2013, Tim Churchward
 * This content is released under the MIT license
 */

(function(bespoke) {
  bespoke.plugins.fx = function(deck) {
    var fx = {
      // Move
      "move-to-left-from-right": {
        id: 1,
        group: "move",
        label: "Move to left / from right",
        outClass: 'pt-page-moveToLeft',
        inClass: 'pt-page-moveFromRight',
        counterpart: "move-to-right-from-left"
      },
      "move-to-right-from-left": {
        id: 2,
        group: "move",
        label: "Move to right / from left",
        outClass: 'pt-page-moveToRight',
        inClass: 'pt-page-moveFromLeft',
        counterpart: "move-to-left-from-right"
      },
      "move-to-top-from-bottom": {
        id: 3,
        group: "move",
        label: "Move to top / from bottom",
        outClass: 'pt-page-moveToTop',
        inClass: 'pt-page-moveFromBottom',
        counterpart: "move-to-bottom-from-top"
      },
      "move-to-bottom-from-top": {
        id: 4,
        group: "move",
        label: "Move to bottom / from top",
        outClass: 'pt-page-moveToBottom',
        inClass: 'pt-page-moveFromTop',
        counterpart: "move-to-top-from-bottom"
      },
    
      // Fade
      "fade-from-right": {
        id: 5,
        group: "fade",
        label: "Fade / from right",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromRight pt-page-ontop',
        counterpart: "fade-from-left"
      },
      "fade-from-left": {
        id: 6,
        group: "fade",
        label: "Fade / from left",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromLeft pt-page-ontop',
        counterpart: "fade-from-right"
      },
      "fade-from-bottom": {
        id: 7,
        group: "fade",
        label: "Fade / from bottom",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromBottom pt-page-ontop',
        counterpart: "fade-from-top"
      },
      "fade-from-top": {
        id: 8,
        group: "fade",
        label: "Fade / from top",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromTop pt-page-ontop',
        counterpart: "fade-from-bottom"
      },
      "fade-left-fade-right": {
        id: 9,
        group: "fade",
        label: "Fade left / Fade right",
        outClass: 'pt-page-moveToLeftFade',
        inClass: 'pt-page-moveFromRightFade',
        counterpart: "fade-right-fade-left"
      },
      "fade-right-fade-left": {
        id: 10,
        group: "fade",
        label: "Fade right / Fade left",
        outClass: 'pt-page-moveToRightFade',
        inClass: 'pt-page-moveFromLeftFade',
        counterpart: "fade-left-fade-right"
      },
      "fade-top-fade-bottom": {
        id: 11,
        group: "fade",
        label: "Fade top / Fade bottom",
        outClass: 'pt-page-moveToTopFade',
        inClass: 'pt-page-moveFromBottomFade',
        counterpart: "fade-bottom-fade-top"
      },
      "fade-bottom-fade-top": {
        id: 12,
        group: "fade",
        label: "Fade bottom / Fade top",
        outClass: 'pt-page-moveToBottomFade',
        inClass: 'pt-page-moveFromTopFade',
        counterpart: "fade-top-fade-bottom"
      },
    
      // Different easing
      "different-easing-from-right": {
        id: 13,
        group: "different-easing",
        label: "Different easing / from right",
        outClass: 'pt-page-moveToLeftEasing pt-page-ontop',
        inClass: 'pt-page-moveFromRight',
        counterpart: "different-easing-from-left"
      },
      "different-easing-from-left": {
        id: 14,
        group: "different-easing",
        label: "Different easing / from left",
        outClass: 'pt-page-moveToRightEasing pt-page-ontop',
        inClass: 'pt-page-moveFromLeft',
        counterpart: "different-easing-from-right"
      },
      "different-easing-from-bottom": {
        id: 15,
        group: "different-easing",
        label: "Different easing / from bottom",
        outClass: 'pt-page-moveToTopEasing pt-page-ontop',
        inClass: 'pt-page-moveFromBottom',
        counterpart: "different-easing-from-top"
      },
      "different-easing-from-top": {
        id: 16,
        group: "different-easing",
        label: "Different easing / from top",
        outClass: 'pt-page-moveToBottomEasing pt-page-ontop',
        inClass: 'pt-page-moveFromTop',
        counterpart: "different-easing-from-bottom"
      },
    
      // Scale
      "scale-down-from-right": {
        id: 17,
        group: "scale",
        label: "Scale down / from right",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromRight pt-page-ontop',
        counterpart: "move-to-right-scale-up"
      },
      "scale-down-from-left": {
        id: 18,
        group: "scale",
        label: "Scale down / from left",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromLeft pt-page-ontop',
        counterpart: "move-to-left-scale-up"
      },
      "scale-down-from-bottom": {
        id: 19,
        group: "scale",
        label: "Scale down / from bottom",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromBottom pt-page-ontop',
        counterpart: "move-to-bottom-scale-up"
      },
      "scale-down-from-top": {
        id: 20,
        group: "scale",
        label: "Scale down / from top",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromTop pt-page-ontop',
        counterpart: "move-to-top-scale-up"
      },
      "scale-down-scale-down": {
        id: 21,
        group: "scale",
        label: "Scale down / scale down",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-scaleUpDown pt-page-delay300',
        counterpart: "scale-up-scale-up"
      },
      "scale-up-scale-up": {
        id: 22,
        group: "scale",
        label: "Scale up / scale up",
        outClass: 'pt-page-scaleDownUp',
        inClass: 'pt-page-scaleUp pt-page-delay300',
        counterpart: "scale-down-scale-down"
      },
      "move-to-left-scale-up": {
        id: 23,
        group: "scale",
        label: "Move to left / scale up",
        outClass: 'pt-page-moveToLeft pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        counterpart: "scale-down-from-left"
      },
      "move-to-right-scale-up": {
        id: 24,
        group: "scale",
        label: "Move to right / scale up",
        outClass: 'pt-page-moveToRight pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        counterpart: "scale-down-from-right"
      },
      "move-to-top-scale-up": {
        id: 25,
        group: "scale",
        label: "Move to top / scale up",
        outClass: 'pt-page-moveToTop pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        counterpart: "scale-down-from-top"
      },
      "move-to-bottom-scale-up": {
        id: 26,
        group: "scale",
        label: "Move to bottom / scale up",
        outClass: 'pt-page-moveToBottom pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        counterpart: "scale-down-from-bottom"
      },
      "scale-down-scale-up": {
        id: 27,
        group: "scale",
        label: "Scale down / scale up",
        outClass: 'pt-page-scaleDownCenter',
        inClass: 'pt-page-scaleUpCenter pt-page-delay400',
        counterpart: "scale-down-scale-up"
      },
    
      // Rotate: Glue
      "glue-left-from-right": {
        id: 28,
        group: "rotate:glue",
        label: "Glue left / from right",
        outClass: 'pt-page-rotateRightSideFirst',
        inClass: 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop',
        counterpart: "glue-right-from-left"
      },
      "glue-right-from-left": {
        id: 29,
        group: "rotate:glue",
        label: "Glue right / from left",
        outClass: 'pt-page-rotateLeftSideFirst',
        inClass: 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop',
        counterpart: "glue-left-from-right"
      },
      "glue-bottom-from-top": {
        id: 30,
        group: "rotate:glue",
        label: "Glue bottom / from top",
        outClass: 'pt-page-rotateTopSideFirst',
        inClass: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop',
        counterpart: "glue-top-from-bottom"
      },
      "glue-top-from-bottom": {
        id: 31,
        group: "rotate:glue",
        label: "Glue top / from bottom",
        outClass: 'pt-page-rotateBottomSideFirst',
        inClass: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop',
        counterpart: "glue-bottom-from-top"
      },
    
      // Rotate: Flip
      "flip-right": {
        id: 32,
        group: "rotate:flip",
        label: "Flip right",
        outClass: 'pt-page-flipOutRight',
        inClass: 'pt-page-flipInLeft pt-page-delay500',
        counterpart: "flip-left"
      },
      "flip-left": {
        id: 33,
        group: "rotate:flip",
        label: "Flip left",
        outClass: 'pt-page-flipOutLeft',
        inClass: 'pt-page-flipInRight pt-page-delay500',
        counterpart: "flip-right"
      },
      "flip-top": {
        id: 34,
        group: "rotate:flip",
        label: "Flip top",
        outClass: 'pt-page-flipOutTop',
        inClass: 'pt-page-flipInBottom pt-page-delay500',
        counterpart: "flip-bottom"
      },
      "flip-bottom": {
        id: 35,
        group: "rotate:flip",
        label: "Flip bottom",
        outClass: 'pt-page-flipOutBottom',
        inClass: 'pt-page-flipInTop pt-page-delay500',
        counterpart: "flip-top"
      },
      "fall": {
        id: 36,
        group: "rotate",
        label: "Fall",
        outClass: 'pt-page-rotateFall pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        counterpart: "fall"
      },
      "newspaper": {
        id: 37,
        group: "rotate",
        label: "Newspaper",
        outClass: 'pt-page-rotateOutNewspaper',
        inClass: 'pt-page-rotateInNewspaper pt-page-delay500',
        counterpart: "newspaper"
      },
    
      // Push / Pull
      "push-left-from-right": {
        id: 38,
        group: "rotate:push-pull",
        label: "Push left / from right",
        outClass: 'pt-page-rotatePushLeft',
        inClass: 'pt-page-moveFromRight',
        counterpart: "push-right-from-left"
      },
      "push-right-from-left": {
        id: 39,
        group: "rotate:push-pull",
        label: "Push right / from left",
        outClass: 'pt-page-rotatePushRight',
        inClass: 'pt-page-moveFromLeft',
        counterpart: "push-left-from-right"
      },
      "push-top-from-bottom": {
        id: 40,
        group: "rotate:push-pull",
        label: "Push top / from bottom",
        outClass: 'pt-page-rotatePushTop',
        inClass: 'pt-page-moveFromBottom',
        counterpart: "push-bottom-from-top"
      },
      "push-bottom-from-top": {
        id: 41,
        group: "rotate:push-pull",
        label: "Push bottom / from top",
        outClass: 'pt-page-rotatePushBottom',
        inClass: 'pt-page-moveFromTop',
        counterpart: "push-top-from-bottom"
      },
      "push-left-pull-right": {
        id: 42,
        group: "rotate:push-pull",
        label: "Push left / pull right",
        outClass: 'pt-page-rotatePushLeft',
        inClass: 'pt-page-rotatePullRight pt-page-delay180',
        counterpart: "push-right-pull-left"
      },
      "push-right-pull-left": {
        id: 43,
        group: "rotate:push-pull",
        label: "Push right / pull left",
        outClass: 'pt-page-rotatePushRight',
        inClass: 'pt-page-rotatePullLeft pt-page-delay180',
        counterpart: "push-left-pull-right"
      },
      "push-top-pull-bottom": {
        id: 44,
        group: "rotate:push-pull",
        label: "Push top / pull bottom",
        outClass: 'pt-page-rotatePushTop',
        inClass: 'pt-page-rotatePullBottom pt-page-delay180',
        counterpart: "push-bottom-pull-top"
      },
      "push-bottom-pull-top": {
        id: 45,
        group: "rotate:push-pull",
        label: "Push bottom / pull top",
        outClass: 'pt-page-rotatePushBottom',
        inClass: 'pt-page-rotatePullTop pt-page-delay180',
        counterpart: "push-top-pull-bottom"
      },
      
      // Fold / Unfold
      "fold-left-from-right": {
        id: 46,
        group: "rotate:fold-unfold",
        label: "Fold left / from right",
        outClass: 'pt-page-rotateFoldLeft',
        inClass: 'pt-page-moveFromRightFade',
        counterpart: "move-to-right-unfold-left"
      },
      "fold-right-from-left": {
        id: 47,
        group: "rotate:fold-unfold",
        label: "Fold right / from left",
        outClass: 'pt-page-rotateFoldRight',
        inClass: 'pt-page-moveFromLeftFade',
        counterpart: "move-to-left-unfold-right"
      },
      "fold-top-from-bottom": {
        id: 48,
        group: "rotate:fold-unfold",
        label: "Fold top / from bottom",
        outClass: 'pt-page-rotateFoldTop',
        inClass: 'pt-page-moveFromBottomFade',
        counterpart: "move-to-bottom-unfold-top"
      },
      "fold-bottom-from-top": {
        id: 49,
        group: "rotate:fold-unfold",
        label: "Fold bottom / from top",
        outClass: 'pt-page-rotateFoldBottom',
        inClass: 'pt-page-moveFromTopFade',
        counterpart: "move-to-top-unfold-bottom"
      },
      "move-to-right-unfold-left": {
        id: 50,
        group: "rotate:fold-unfold",
        label: "Move to right / unfold left",
        outClass: 'pt-page-moveToRightFade',
        inClass: 'pt-page-rotateUnfoldLeft',
        counterpart: "fold-left-from-right"
      },
      "move-to-left-unfold-right": {
        id: 51,
        group: "rotate:fold-unfold",
        label: "Move to left / unfold right",
        outClass: 'pt-page-moveToLeftFade',
        inClass: 'pt-page-rotateUnfoldRight',
        counterpart: "fold-right-from-left"
      },
      "move-to-bottom-unfold-top": {
        id: 52,
        group: "rotate:fold-unfold",
        label: "Move to bottom / unfold top",
        outClass: 'pt-page-moveToBottomFade',
        inClass: 'pt-page-rotateUnfoldTop',
        counterpart: "fold-top-from-bottom"
      },
      "move-to-top-unfold-bottom": {
        id: 53,
        group: "rotate:fold-unfold",
        label: "Move to top / unfold bottom",
        outClass: 'pt-page-moveToTopFade',
        inClass: 'pt-page-rotateUnfoldBottom',
        counterpart: "fold-bottom-from-top"
      },
      
      // Room
      "room-to-left": {
        id: 54,
        group: "rotate:room",
        label: "Room to left",
        outClass: 'pt-page-rotateRoomLeftOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomLeftIn',
        counterpart: "room-to-right"
      },
      "room-to-right": {
        id: 55,
        group: "rotate:room",
        label: "Room to right",
        outClass: 'pt-page-rotateRoomRightOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomRightIn',
        counterpart: "room-to-left"
      },
      "room-to-top": {
        id: 56,
        group: "rotate:room",
        label: "Room to top",
        outClass: 'pt-page-rotateRoomTopOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomTopIn',
        counterpart: "room-to-bottom"
      },
      "room-to-bottom": {
        id: 57,
        group: "rotate:room",
        label: "Room to bottom",
        outClass: 'pt-page-rotateRoomBottomOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomBottomIn',
        counterpart: "room-to-top"
      },
      
      // Cube
      "cube-to-left": {
        id: 58,
        label: "Cube to left",
        outClass: 'pt-page-rotateCubeLeftOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeLeftIn',
        counterpart: "cube-to-right"
      },
      "cube-to-right": {
        id: 59,
        label: "Cube to right",
        outClass: 'pt-page-rotateCubeRightOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeRightIn',
        counterpart: "cube-to-left"
      },
      "cube-to-top": {
        id: 60,
        label: "Cube to top",
        outClass: 'pt-page-rotateCubeTopOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeTopIn',
        counterpart: "cube-to-bottom"
      },
      "cube-to-bottom": {
        id: 61,
        label: "Cube to bottom",
        outClass: 'pt-page-rotateCubeBottomOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeBottomIn',
        counterpart: "cube-to-top"
      },
      
      // Carousel
      "carousel-to-left": {
        id: 62,
        group: "rotate:carousel",
        label: "Carousel to left",
        outClass: 'pt-page-rotateCarouselLeftOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselLeftIn',
        counterpart: "carousel-to-right"
      },
      "carousel-to-right": {
        id: 63,
        group: "rotate:carousel",
        label: "Carousel to right",
        outClass: 'pt-page-rotateCarouselRightOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselRightIn',
        counterpart: "carousel-to-left"
      },
      "carousel-to-top": {
        id: 64,
        group: "rotate:carousel",
        label: "Carousel to top",
        outClass: 'pt-page-rotateCarouselTopOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselTopIn',
        counterpart: "carousel-to-bottom"
      },
      "carousel-to-bottom": {
        id: 65,
        group: "rotate:carousel",
        label: "Carousel to bottom",
        outClass: 'pt-page-rotateCarouselBottomOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselBottomIn',
        counterpart: "carousel-to-top"
      },
      "sides": {
        id: 66,
        group: "rotate",
        label: "Sides",
        outClass: 'pt-page-rotateSidesOut',
        inClass: 'pt-page-rotateSidesIn pt-page-delay200',
        counterpart: "sides"
      },
      "slide": {
        id: 67,
        label: "Slide",
        outClass: 'pt-page-rotateSlideOut',
        inClass: 'pt-page-rotateSlideIn',
        counterpart: "slide"
      }
    };
    
		var animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		};
    
		// animation end event name
		var animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
    
    var runTransition = function(outSlide, inSlide) {
      var outClass = "pt-page-rotateSlideOut";
      var inClass = "pt-page-rotateSlideIn";
      
      outSlide.addEventListener(animEndEventName, function(event) {
        event.target.classList.remove(outClass);
      });
      
      inSlide.addEventListener(animEndEventName, function(event) {
        event.target.classList.remove(inClass);
        event.target.classList.add('pt-page-current');
      });
      
      outSlide.classList.add(outClass);
      inSlide.classList.add(inClass);
    };
    
    /*
       Handle events
       https://github.com/markdalgleish/bespoke.js#events
    */
    deck.on('next', function(event) {
      if(event.index < deck.slides.length-1) {
        var outSlide = event.slide;
        var inSlide = deck.slides[event.index+1];
        
        runTransition(outSlide, inSlide);
      }
    });

    deck.on('prev', function(event) {
      if(event.index > 0) {
        var outSlide = event.slide;
        var inSlide = deck.slides[event.index-1];
        
        runTransition(outSlide, inSlide);
      }
    });
  };

}(bespoke));
