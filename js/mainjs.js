/**
 * Created by Leandro Alberto on 12/31/2015.
 */

$(function(){ // document ready

    // initialization: Hidding and setting Variable Arrays


    var buttons = [$('#aboutMeButton'), $('#myPhotoButton'), $('#hireMeButton')];
    var sections = [$('#aboutMe'), $('#myPhotos'),$('#hireMe')];
    var testHeight = $(window).height();
    $('#content').hide();
    $.each(sections, function()
    {
        this.hide();
    });



    $( window ).resize(function() { // sets when the Navlinks should fix to the top of the viewport
        testHeight = $(window).height();
    });

    //////////////////////////////////////
    /////// affix navlinks //////////////
    /////////////////////////////////////

    $(window).scroll(function(){ // scroll event

        var windowTop = $(window).scrollTop(); // returns number

        if (windowTop >= testHeight) {
            $('.sidebar').css({ position: 'fixed', top: 0 });
            $('.contentPane').addClass("col-md-offset-3");
        }

        else {
            $('.sidebar').css({position:'relative'});
            $('.contentPane').css({ position: 'relative'}).removeClass("col-md-offset-3");
        }

    });

    ////////////////////////////////////////////////////////
    /////////////////////Button Actions/////////////////////
    ////////////////////////////////////////////////////////

    $('#myPhotoButton').click(function(event){  // Photos event
        event.preventDefault();
        $('.navlinks li').find('a').css({"text-decoration": "none"});

        $.each(sections, function() {
            this.hide();
        });

        $('#myPhotos').fadeIn(250);
        $('#myPhotoButton').css({"text-decoration": "line-through"})

    });

    $('#aboutMeButton').click(function(event){  // about me event
        event.preventDefault();
        $('.navlinks li').find('a').css({"text-decoration": "none"});
        $.each(sections, function() {
            this.hide();
        });
        $('#aboutMe').fadeIn(250);
        $('#aboutMeButton').css({"text-decoration": "line-through"})
    });


});