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
