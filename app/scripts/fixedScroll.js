/**
 * cbpFixedScrollLayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout = (function() {
 
  // cache and initialize some values
  var config = {
    // the cbp-fbscroller´s sections
    $sections : $( '#scenarios > section' ),
    // the navigation links
    $navlinks : $( '#scenarios > nav:first > a, #scenario-link, #arrow.light, .up' ),
    // index of current link / section
    currentLink : 0,
    // the body element
    $body : $( 'html, body' ),
    // the body animation speed
    animspeed : 1500,
    // the body animation easing (jquery easing)
    animeasing : 'easeInOutExpo'
  };

  function init() {

    // click on a navigation link: the body is scrolled to the position of the respective section
    config.$navlinks.on( 'click', function() {
      scrollAnim( config.$sections.eq( $( this ).index() ).offset().top );
      return false;
    } );

    // 2 waypoints defined:
    // First one when we scroll down: the current navigation link gets updated. 
    // A `new section´ is reached when it occupies more than 70% of the viewport
    // Second one when we scroll up: the current navigation link gets updated. 
    // A `new section´ is reached when it occupies more than 70% of the viewport
    config.$sections.waypoint( function( direction ) {
      if( direction === 'down' ) { changeNav( $( this ) ); }
    }, { offset: '30%' } ).waypoint( function( direction ) {
      if( direction === 'up' ) { changeNav( $( this ) ); }
    }, { offset: '-30%' } );
       
  }

  // update the current navigation link
  function changeNav( $section ) {
    config.$navlinks.eq( config.currentLink ).removeClass( 'scenario-current' );
    config.currentLink = $section.index( 'section' );
    config.$navlinks.eq( config.currentLink ).addClass( 'scenario-current' );
  }

  // function to scroll / animate the body
  function scrollAnim( top ) {
    config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
  }

  return { init : init };
 
})();