/*!
 * bespoke-fx v0.1.0
 * https://github.com/ebow/bespoke-fx
 *
 * Copyright 2013, Tim Churchward
 * This content is released under the MIT license
 */

(function(bespoke) {
  bespoke.plugins.fx = function(deck, options) {
    var axis = options.axis ? options.axis : "X";
    var transition = options.transition ? options.transition : "move";
    var fx = {
      "move": {
        "X": { "next": "move-to-left-from-right",
               "prev": "move-to-right-from-left" },
        "Y": { "next": "move-to-top-from-bottom",
               "prev": "move-to-bottom-from-top" }},
      "fade": {
        "X": { "next": "fade-from-right",
               "prev": "fade-from-left" },
        "Y": { "next": "fade-from-bottom",
               "prev": "fade-from-top" }},
      "fade-slide": {
        "X": { "next": "fade-left-fade-right",
               "prev": "fade-right-fade-left" },
        "Y": { "next": "fade-top-fade-bottom",
               "prev": "fade-bottom-fade-top" }},
      "different-easing": {
        "X": { "next": "different-easing-from-right",
               "prev": "different-easing-from-left" },
        "Y": { "next": "different-easing-from-bottom",
               "prev": "different-easing-from-top" }},
      "scale-down": {
        "X": { "next": "scale-down-from-right",
               "prev": "scale-down-from-left" },
        "Y": { "next": "scale-down-from-bottom",
               "prev": "scale-down-from-top" }},
      "zoom": {
        "X": { "next": "scale-up-scale-up",
               "prev": "scale-down-scale-down" },
        "Y": { "next": "scale-up-scale-up",
               "prev": "scale-down-scale-down" }},
        
       // SCALE


      "glue": {
        "X": { "next": "glue-left-from-right",
               "prev": "glue-right-from-left" },
        "Y": { "next": "glue-top-from-bottom",
               "prev": "glue-bottom-from-top" }},
      "flip": {
        "X": { "next": "flip-left",
               "prev": "flip-right" },
        "Y": { "next": "flip-top",
               "prev": "flip-bottom" }},
      "fall": {
        "X": { "next": "fall",
               "prev": "fall" },
        "Y": { "next": "fall",
               "prev": "fall" }},
      "newspaper": {
        "X": { "next": "newspaper",
               "prev": "newspaper" },
        "Y": { "next": "newspaper",
               "prev": "newspaper" }},
      "push": {
        "X": { "next": "push-left-from-right",
               "prev": "push-right-from-left" },
        "Y": { "next": "push-top-from-bottom",
               "prev": "push-bottom-from-top" }},
      "pull": {
        "X": { "next": "push-left-pull-right",
               "prev": "push-right-pull-left" },
        "Y": { "next": "push-bottom-pull-top",
               "prev": "push-top-pull-bottom" }},
      "fold": {
        "X": { "next": "fold-left-from-right",
               "prev": "move-to-right-unfold-left" },
        "Y": { "next": "fold-bottom-from-top",
               "prev": "move-to-top-unfold-bottom" }},
      "unfold": {
        "X": { "next": "move-to-left-unfold-right",
               "prev": "fold-right-from-left" },
        "Y": { "next": "move-to-bottom-unfold-top",
               "prev": "fold-top-from-bottom" }},
      "room": {
        "X": { "next": "room-to-left",
               "prev": "room-to-right" },
        "Y": { "next": "room-to-bottom",
               "prev": "room-to-top" }},
      "cube": {
        "X": { "next": "cube-to-left",
               "prev": "cube-to-right" },
        "Y": { "next": "cube-to-bottom",
               "prev": "cube-to-top" }},
      "carousel": {
        "X": { "next": "carousel-to-left",
               "prev": "carousel-to-right" },
        "Y": { "next": "carousel-to-bottom",
               "prev": "carousel-to-top" }},
      "sides": {
        "X": { "next": "sides",
               "prev": "sides" },
        "Y": { "next": "sides",
               "prev": "sides" }},
      "slide": {
        "X": { "next": "slide",
               "prev": "slide" },
        "Y": { "next": "slide",
               "prev": "slide" }}
      };
    
    var animations = {
      // Move
      "move-to-left-from-right": {
        id: 1,
        group: "move",
        label: "Move to left / from right",
        outClass: 'pt-page-moveToLeft',
        inClass: 'pt-page-moveFromRight',
        reverse: "move-to-right-from-left"
      },
      "move-to-right-from-left": {
        id: 2,
        group: "move",
        label: "Move to right / from left",
        outClass: 'pt-page-moveToRight',
        inClass: 'pt-page-moveFromLeft',
        reverse: "move-to-left-from-right"
      },
      "move-to-top-from-bottom": {
        id: 3,
        group: "move",
        label: "Move to top / from bottom",
        outClass: 'pt-page-moveToTop',
        inClass: 'pt-page-moveFromBottom',
        reverse: "move-to-bottom-from-top"
      },
      "move-to-bottom-from-top": {
        id: 4,
        group: "move",
        label: "Move to bottom / from top",
        outClass: 'pt-page-moveToBottom',
        inClass: 'pt-page-moveFromTop',
        reverse: "move-to-top-from-bottom"
      },
    
      // Fade
      "fade-from-right": {
        id: 5,
        group: "fade",
        label: "Fade / from right",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromRight pt-page-ontop',
        reverse: "fade-from-left"
      },
      "fade-from-left": {
        id: 6,
        group: "fade",
        label: "Fade / from left",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromLeft pt-page-ontop',
        reverse: "fade-from-right"
      },
      "fade-from-bottom": {
        id: 7,
        group: "fade",
        label: "Fade / from bottom",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromBottom pt-page-ontop',
        reverse: "fade-from-top"
      },
      "fade-from-top": {
        id: 8,
        group: "fade",
        label: "Fade / from top",
        outClass: 'pt-page-fade',
        inClass: 'pt-page-moveFromTop pt-page-ontop',
        reverse: "fade-from-bottom"
      },
      "fade-left-fade-right": {
        id: 9,
        group: "fade",
        label: "Fade left / Fade right",
        outClass: 'pt-page-moveToLeftFade',
        inClass: 'pt-page-moveFromRightFade',
        reverse: "fade-right-fade-left"
      },
      "fade-right-fade-left": {
        id: 10,
        group: "fade",
        label: "Fade right / Fade left",
        outClass: 'pt-page-moveToRightFade',
        inClass: 'pt-page-moveFromLeftFade',
        reverse: "fade-left-fade-right"
      },
      "fade-top-fade-bottom": {
        id: 11,
        group: "fade",
        label: "Fade top / Fade bottom",
        outClass: 'pt-page-moveToTopFade',
        inClass: 'pt-page-moveFromBottomFade',
        reverse: "fade-bottom-fade-top"
      },
      "fade-bottom-fade-top": {
        id: 12,
        group: "fade",
        label: "Fade bottom / Fade top",
        outClass: 'pt-page-moveToBottomFade',
        inClass: 'pt-page-moveFromTopFade',
        reverse: "fade-top-fade-bottom"
      },
    
      // Different easing
      "different-easing-from-right": {
        id: 13,
        group: "different-easing",
        label: "Different easing / from right",
        outClass: 'pt-page-moveToLeftEasing pt-page-ontop',
        inClass: 'pt-page-moveFromRight',
        reverse: "different-easing-from-left"
      },
      "different-easing-from-left": {
        id: 14,
        group: "different-easing",
        label: "Different easing / from left",
        outClass: 'pt-page-moveToRightEasing pt-page-ontop',
        inClass: 'pt-page-moveFromLeft',
        reverse: "different-easing-from-right"
      },
      "different-easing-from-bottom": {
        id: 15,
        group: "different-easing",
        label: "Different easing / from bottom",
        outClass: 'pt-page-moveToTopEasing pt-page-ontop',
        inClass: 'pt-page-moveFromBottom',
        reverse: "different-easing-from-top"
      },
      "different-easing-from-top": {
        id: 16,
        group: "different-easing",
        label: "Different easing / from top",
        outClass: 'pt-page-moveToBottomEasing pt-page-ontop',
        inClass: 'pt-page-moveFromTop',
        reverse: "different-easing-from-bottom"
      },
    
      // Scale
      "scale-down-from-right": {
        id: 17,
        group: "scale",
        label: "Scale down / from right",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromRight pt-page-ontop',
        reverse: "move-to-right-scale-up"
      },
      "scale-down-from-left": {
        id: 18,
        group: "scale",
        label: "Scale down / from left",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromLeft pt-page-ontop',
        reverse: "move-to-left-scale-up"
      },
      "scale-down-from-bottom": {
        id: 19,
        group: "scale",
        label: "Scale down / from bottom",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromBottom pt-page-ontop',
        reverse: "move-to-bottom-scale-up"
      },
      "scale-down-from-top": {
        id: 20,
        group: "scale",
        label: "Scale down / from top",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-moveFromTop pt-page-ontop',
        reverse: "move-to-top-scale-up"
      },
      "scale-down-scale-down": {
        id: 21,
        group: "scale",
        label: "Scale down / scale down",
        outClass: 'pt-page-scaleDown',
        inClass: 'pt-page-scaleUpDown pt-page-delay300',
        reverse: "scale-up-scale-up"
      },
      "scale-up-scale-up": {
        id: 22,
        group: "scale",
        label: "Scale up / scale up",
        outClass: 'pt-page-scaleDownUp',
        inClass: 'pt-page-scaleUp pt-page-delay300',
        reverse: "scale-down-scale-down"
      },
      "move-to-left-scale-up": {
        id: 23,
        group: "scale",
        label: "Move to left / scale up",
        outClass: 'pt-page-moveToLeft pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        reverse: "scale-down-from-left"
      },
      "move-to-right-scale-up": {
        id: 24,
        group: "scale",
        label: "Move to right / scale up",
        outClass: 'pt-page-moveToRight pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        reverse: "scale-down-from-right"
      },
      "move-to-top-scale-up": {
        id: 25,
        group: "scale",
        label: "Move to top / scale up",
        outClass: 'pt-page-moveToTop pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        reverse: "scale-down-from-top"
      },
      "move-to-bottom-scale-up": {
        id: 26,
        group: "scale",
        label: "Move to bottom / scale up",
        outClass: 'pt-page-moveToBottom pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        reverse: "scale-down-from-bottom"
      },
      "scale-down-scale-up": {
        id: 27,
        group: "scale",
        label: "Scale down / scale up",
        outClass: 'pt-page-scaleDownCenter',
        inClass: 'pt-page-scaleUpCenter pt-page-delay400',
        reverse: "scale-down-scale-up"
      },
    
      // Rotate: Glue
      "glue-left-from-right": {
        id: 28,
        group: "rotate:glue",
        label: "Glue left / from right",
        outClass: 'pt-page-rotateRightSideFirst',
        inClass: 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop',
        reverse: "glue-right-from-left"
      },
      "glue-right-from-left": {
        id: 29,
        group: "rotate:glue",
        label: "Glue right / from left",
        outClass: 'pt-page-rotateLeftSideFirst',
        inClass: 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop',
        reverse: "glue-left-from-right"
      },
      "glue-bottom-from-top": {
        id: 30,
        group: "rotate:glue",
        label: "Glue bottom / from top",
        outClass: 'pt-page-rotateTopSideFirst',
        inClass: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop',
        reverse: "glue-top-from-bottom"
      },
      "glue-top-from-bottom": {
        id: 31,
        group: "rotate:glue",
        label: "Glue top / from bottom",
        outClass: 'pt-page-rotateBottomSideFirst',
        inClass: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop',
        reverse: "glue-bottom-from-top"
      },
    
      // Rotate: Flip
      "flip-right": {
        id: 32,
        group: "rotate:flip",
        label: "Flip right",
        outClass: 'pt-page-flipOutRight',
        inClass: 'pt-page-flipInLeft pt-page-delay500',
        reverse: "flip-left"
      },
      "flip-left": {
        id: 33,
        group: "rotate:flip",
        label: "Flip left",
        outClass: 'pt-page-flipOutLeft',
        inClass: 'pt-page-flipInRight pt-page-delay500',
        reverse: "flip-right"
      },
      "flip-top": {
        id: 34,
        group: "rotate:flip",
        label: "Flip top",
        outClass: 'pt-page-flipOutTop',
        inClass: 'pt-page-flipInBottom pt-page-delay500',
        reverse: "flip-bottom"
      },
      "flip-bottom": {
        id: 35,
        group: "rotate:flip",
        label: "Flip bottom",
        outClass: 'pt-page-flipOutBottom',
        inClass: 'pt-page-flipInTop pt-page-delay500',
        reverse: "flip-top"
      },
      "fall": {
        id: 36,
        group: "rotate",
        label: "Fall",
        outClass: 'pt-page-rotateFall pt-page-ontop',
        inClass: 'pt-page-scaleUp',
        reverse: "fall"
      },
      "newspaper": {
        id: 37,
        group: "rotate",
        label: "Newspaper",
        outClass: 'pt-page-rotateOutNewspaper',
        inClass: 'pt-page-rotateInNewspaper pt-page-delay500',
        reverse: "newspaper"
      },
    
      // Push / Pull
      "push-left-from-right": {
        id: 38,
        group: "rotate:push-pull",
        label: "Push left / from right",
        outClass: 'pt-page-rotatePushLeft',
        inClass: 'pt-page-moveFromRight',
        reverse: "push-right-from-left"
      },
      "push-right-from-left": {
        id: 39,
        group: "rotate:push-pull",
        label: "Push right / from left",
        outClass: 'pt-page-rotatePushRight',
        inClass: 'pt-page-moveFromLeft',
        reverse: "push-left-from-right"
      },
      "push-top-from-bottom": {
        id: 40,
        group: "rotate:push-pull",
        label: "Push top / from bottom",
        outClass: 'pt-page-rotatePushTop',
        inClass: 'pt-page-moveFromBottom',
        reverse: "push-bottom-from-top"
      },
      "push-bottom-from-top": {
        id: 41,
        group: "rotate:push-pull",
        label: "Push bottom / from top",
        outClass: 'pt-page-rotatePushBottom',
        inClass: 'pt-page-moveFromTop',
        reverse: "push-top-from-bottom"
      },
      "push-left-pull-right": {
        id: 42,
        group: "rotate:push-pull",
        label: "Push left / pull right",
        outClass: 'pt-page-rotatePushLeft',
        inClass: 'pt-page-rotatePullRight pt-page-delay180',
        reverse: "push-right-pull-left"
      },
      "push-right-pull-left": {
        id: 43,
        group: "rotate:push-pull",
        label: "Push right / pull left",
        outClass: 'pt-page-rotatePushRight',
        inClass: 'pt-page-rotatePullLeft pt-page-delay180',
        reverse: "push-left-pull-right"
      },
      "push-top-pull-bottom": {
        id: 44,
        group: "rotate:push-pull",
        label: "Push top / pull bottom",
        outClass: 'pt-page-rotatePushTop',
        inClass: 'pt-page-rotatePullBottom pt-page-delay180',
        reverse: "push-bottom-pull-top"
      },
      "push-bottom-pull-top": {
        id: 45,
        group: "rotate:push-pull",
        label: "Push bottom / pull top",
        outClass: 'pt-page-rotatePushBottom',
        inClass: 'pt-page-rotatePullTop pt-page-delay180',
        reverse: "push-top-pull-bottom"
      },
      
      // Fold / Unfold
      "fold-left-from-right": {
        id: 46,
        group: "rotate:fold-unfold",
        label: "Fold left / from right",
        outClass: 'pt-page-rotateFoldLeft',
        inClass: 'pt-page-moveFromRightFade',
        reverse: "move-to-right-unfold-left"
      },
      "fold-right-from-left": {
        id: 47,
        group: "rotate:fold-unfold",
        label: "Fold right / from left",
        outClass: 'pt-page-rotateFoldRight',
        inClass: 'pt-page-moveFromLeftFade',
        reverse: "move-to-left-unfold-right"
      },
      "fold-top-from-bottom": {
        id: 48,
        group: "rotate:fold-unfold",
        label: "Fold top / from bottom",
        outClass: 'pt-page-rotateFoldTop',
        inClass: 'pt-page-moveFromBottomFade',
        reverse: "move-to-bottom-unfold-top"
      },
      "fold-bottom-from-top": {
        id: 49,
        group: "rotate:fold-unfold",
        label: "Fold bottom / from top",
        outClass: 'pt-page-rotateFoldBottom',
        inClass: 'pt-page-moveFromTopFade',
        reverse: "move-to-top-unfold-bottom"
      },
      "move-to-right-unfold-left": {
        id: 50,
        group: "rotate:fold-unfold",
        label: "Move to right / unfold left",
        outClass: 'pt-page-moveToRightFade',
        inClass: 'pt-page-rotateUnfoldLeft',
        reverse: "fold-left-from-right"
      },
      "move-to-left-unfold-right": {
        id: 51,
        group: "rotate:fold-unfold",
        label: "Move to left / unfold right",
        outClass: 'pt-page-moveToLeftFade',
        inClass: 'pt-page-rotateUnfoldRight',
        reverse: "fold-right-from-left"
      },
      "move-to-bottom-unfold-top": {
        id: 52,
        group: "rotate:fold-unfold",
        label: "Move to bottom / unfold top",
        outClass: 'pt-page-moveToBottomFade',
        inClass: 'pt-page-rotateUnfoldTop',
        reverse: "fold-top-from-bottom"
      },
      "move-to-top-unfold-bottom": {
        id: 53,
        group: "rotate:fold-unfold",
        label: "Move to top / unfold bottom",
        outClass: 'pt-page-moveToTopFade',
        inClass: 'pt-page-rotateUnfoldBottom',
        reverse: "fold-bottom-from-top"
      },
      
      // Room
      "room-to-left": {
        id: 54,
        group: "rotate:room",
        label: "Room to left",
        outClass: 'pt-page-rotateRoomLeftOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomLeftIn',
        reverse: "room-to-right"
      },
      "room-to-right": {
        id: 55,
        group: "rotate:room",
        label: "Room to right",
        outClass: 'pt-page-rotateRoomRightOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomRightIn',
        reverse: "room-to-left"
      },
      "room-to-top": {
        id: 56,
        group: "rotate:room",
        label: "Room to top",
        outClass: 'pt-page-rotateRoomTopOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomTopIn',
        reverse: "room-to-bottom"
      },
      "room-to-bottom": {
        id: 57,
        group: "rotate:room",
        label: "Room to bottom",
        outClass: 'pt-page-rotateRoomBottomOut pt-page-ontop',
        inClass: 'pt-page-rotateRoomBottomIn',
        reverse: "room-to-top"
      },
      
      // Cube
      "cube-to-left": {
        id: 58,
        label: "Cube to left",
        outClass: 'pt-page-rotateCubeLeftOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeLeftIn',
        reverse: "cube-to-right"
      },
      "cube-to-right": {
        id: 59,
        label: "Cube to right",
        outClass: 'pt-page-rotateCubeRightOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeRightIn',
        reverse: "cube-to-left"
      },
      "cube-to-top": {
        id: 60,
        label: "Cube to top",
        outClass: 'pt-page-rotateCubeTopOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeTopIn',
        reverse: "cube-to-bottom"
      },
      "cube-to-bottom": {
        id: 61,
        label: "Cube to bottom",
        outClass: 'pt-page-rotateCubeBottomOut pt-page-ontop',
        inClass: 'pt-page-rotateCubeBottomIn',
        reverse: "cube-to-top"
      },
      
      // Carousel
      "carousel-to-left": {
        id: 62,
        group: "rotate:carousel",
        label: "Carousel to left",
        outClass: 'pt-page-rotateCarouselLeftOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselLeftIn',
        reverse: "carousel-to-right"
      },
      "carousel-to-right": {
        id: 63,
        group: "rotate:carousel",
        label: "Carousel to right",
        outClass: 'pt-page-rotateCarouselRightOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselRightIn',
        reverse: "carousel-to-left"
      },
      "carousel-to-top": {
        id: 64,
        group: "rotate:carousel",
        label: "Carousel to top",
        outClass: 'pt-page-rotateCarouselTopOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselTopIn',
        reverse: "carousel-to-bottom"
      },
      "carousel-to-bottom": {
        id: 65,
        group: "rotate:carousel",
        label: "Carousel to bottom",
        outClass: 'pt-page-rotateCarouselBottomOut pt-page-ontop',
        inClass: 'pt-page-rotateCarouselBottomIn',
        reverse: "carousel-to-top"
      },
      "sides": {
        id: 66,
        group: "rotate",
        label: "Sides",
        outClass: 'pt-page-rotateSidesOut',
        inClass: 'pt-page-rotateSidesIn pt-page-delay200',
        reverse: "sides"
      },
      "slide": {
        id: 67,
        label: "Slide",
        outClass: 'pt-page-rotateSlideOut',
        inClass: 'pt-page-rotateSlideIn',
        reverse: "slide"
      }
    };
    
    var default_fx = fx[transition][axis];
    
    // Browser compatibility
		var animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		};
    
		// animation end event name
		var animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
    
    var addClassNames = function(element, classNames) {
      var names = classNames.split(" ");
      for(var i = 0; i < names.length; i++) {
        element.classList.add(names[i]);
      }
    };
    
    var removeClassNames = function(element, classNames) {
      var names = classNames.split(" ");
      for(var i = 0; i < names.length; i++) {
        element.classList.remove(names[i]);
      }
    };
    
    var runTransition = function(outSlide, inSlide, directive) {
      var transition_name = default_fx[directive]; // fx[transition][axis][directive];
      var outClass = animations[transition_name].outClass;
      var inClass = animations[transition_name].inClass;
      
      outSlide.addEventListener(animEndEventName, function(event) {
        removeClassNames(event.target, outClass + " fx-transitioning-out");
      });
      
      inSlide.addEventListener(animEndEventName, function(event) {
        removeClassNames(event.target, inClass + " fx-transitioning-in");
      });
      
      addClassNames(outSlide, outClass + " fx-transitioning-out");
      addClassNames(inSlide, inClass + " fx-transitioning-in");
    };
    
    /*
       Handle events
       https://github.com/markdalgleish/bespoke.js#events
    */
    deck.on('next', function(event) {
      if(event.index < deck.slides.length-1) {
        var outSlide = event.slide;
        var inSlide = deck.slides[event.index+1];
        
        runTransition(outSlide, inSlide, 'next');
      }
    });

    deck.on('prev', function(event) {
      if(event.index > 0 && !event.transition_complete) {
        var outSlide = event.slide;
        var inSlide = deck.slides[event.index-1];
        
        runTransition(outSlide, inSlide, 'prev');
      }
    });
  };

}(bespoke));
