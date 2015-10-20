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
$(function(){
    // JS lint is mad at me
    'use strict';

    // Set first scenario height to window height
    $('#scenario-1').css({'min-height':(($(window).height()))+'px'});
    $(window).resize(function(){
        $('#scenario-1').css({'min-height':(($(window).height()))+'px'});
    });

    // Tooltip Event
    $('.scenarios nav a').hover(
        function () {
            $(this).closest('a').find( '.tooltip' ).css( 'opacity', '1.0');
        }, 
        function () {
            $(this).closest('a').find( '.tooltip' ).css( 'opacity', '0');
        }
    );

    // Smooth scroll anchor links (continue experience)
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    // Fade the introduction in all sexy like
    $( '#scenario-1 .content' ).fadeIn( 2500 );
    // Fade the secondary content in all sexy like too
    // But also wait a little bit
    $( '#scenario-1 .secondary-content' ).delay( 500 ).fadeIn( 2500 );

    // Trigger display of content when
    // scenario wrapper is 25% (of the viewport) away. This could be smarter.
    $('#scenario-2').waypoint(function() {
        $( '#arrow' ).fadeOut( 2500 );
        $( '#scenario-2 .content, .scenarios nav' ).fadeIn( 1500 );
        $(this).closest('section').find( '.img-icon' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideUp' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'expandUp' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'slideLeft' );
    },{ offset: '50%' });
    $('#scenario-3').waypoint(function() {
        $( '#scenario-3 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-icon' ).addClass( 'expandUp' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'fadeIn' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'fadeIn' );
    },{ offset: '50%' });
    $('#scenario-4').waypoint(function() {
        $( '#scenario-4 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-icon' ).addClass( 'hatch' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideUp' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'bigEntrance' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'slideLeft' );
    },{ offset: '50%' });
    $('#scenario-5').waypoint(function() {
        $( '#scenario-5 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-icon' ).addClass( 'fadeIn' );
        $(this).closest('section').find( '.img-md' ).addClass( 'fadeIn' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'hatch' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'fadeIn' );
    },{ offset: '50%' });
    $('#scenario-6').waypoint(function() {
        $( '#scenario-6 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-icon' ).addClass( 'expandOpen' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideUp' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'slideLeft' );
    },{ offset: '50%' });

    // Show/hide nav again at end of story
    $('#scenario-7').waypoint(function() {
        $( '#arrow.up' ).fadeIn( 2500 );
        $( '.tooltip' ).hide();
        $( '#scenario-2 .content, .scenarios nav' ).css( 'opacity', '0');
    },{ offset: '50%' });
    $('#scenario-6').waypoint(function() {
        $( '#arrow.up' ).fadeOut();
        // Since we're controlling visiblity of 
        $( '.tooltip' ).show();
        $( '#scenario-2 .content, .scenarios nav' ).css( 'opacity', '1.0' );
    },{ offset: '-100px' });

    // Make the show technology button...umm
    // (you guessed it) show technology.
    $( '.showTechnology' ).click(function() {
        // Hide the scenarios nav
        $( '.scenarios > nav').fadeOut();
        // Find respective .content and hide it
        $(this).closest('section').find('.content').fadeOut( 500, function() {
            $(this).closest('section').find('.technology').fadeIn( 1500, function() {
                // Blur the content and then fade it back in slowly
                $( '.close' ).click(function() {
                    $(this).closest('section').find('.technology').fadeOut( 500, function() {
                        $(this).closest('section').find('.content').fadeIn( 1500 );
                        $( '.scenarios > nav').fadeIn();
                    });
                });
            });
        }); 
    });
});
