(function(bespoke) {

  bespoke.plugins.fx = function(deck) {

		Move
		1 Move to left/ from right
		2 Move to right/ from left
		3 Move to top/ from bottom
		4 Move to bottom/ from top
		
    Fade
		5 Fade / from right
		6 Fade / from left
		7 Fade / from bottom
		8 Fade / from top
		9 Fade left / Fade right
		10 Fade right / Fade left
		11 Fade top / Fade bottom
		12 Fade bottom / Fade top
    
    Different easing
		13 Different easing / from right
		14 Different easing / from left
		15 Different easing / from bottom
		16 Different easing / from top
    
		Scale
		17 Scale down / from right
		18 Scale down / from left
		19 Scale down / from bottom
		20 Scale down / from top
		21 Scale down / scale down
		22 Scale up / scale up
		23 Move to left / scale up
		24 Move to right / scale up
		25 Move to top / scale up
		26 Move to bottom / scale up
		27 Scale down / scale up
    
		Rotate
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
