/**
 * Created by Leandro Alberto on 12/31/2015.
 */

$(function(){ // document ready

    $.scrollify({
        section: ".item",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: false
    });


    // initialization: Hiding Content and setting Variable Arrays


    var buttons = [$('#aboutMeButton'), $('#myPhotoButton'), $('#test1Button'), $('#hireMeButton'),$('#test3Button')];
    var sections = [$('#aboutMe'), $('#myPhotos'),$('#test1'),$('#hireMe'),$('#test3')];
    var testHeight = $(window).height();
    $('#content').hide();
    $('.arrowHolder').hide();
    $.each(sections, function()
    {
        this.hide();
    });

    $( window ).resize(function() { // sets when the navLinks should fix to the top of the viewport
        testHeight = $(window).height();
    });



    //////////////////////////////////////
    /////// affix navLinks //////////////
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

    ///////////////////////////////////////////
    /////////inlineNavLink Action /////////////
    ///////////////////////////////////////////


 $('.inlineNavLinks a').each(function(index){
     $(this).click(function(event){
         event.preventDefault();
         $('#content').show();
         $('.inlineNavLinks').fadeOut(1000, function(){
             $('.arrowHolder').fadeIn(1000, function(){
                 $('html, body').animate({
                     scrollTop: testHeight }, 500);
             });
         });

         sections[index].fadeIn(850);

         buttons[index].css({"text-decoration": "line-through"});
     });
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
        $('#aboutMeButton').css({"text-decoration": "line-through",
                                "color":"#ffffff"})
    });

    $('#hireMeButton').click(function(event){  // about me event
        event.preventDefault();
        $('.navlinks li').find('a').css({"text-decoration": "none"});
        $.each(sections, function() {
            this.hide();
        });
        $('#hireMe').fadeIn(250);
        $('#hireMeButton').css({"text-decoration": "line-through",
            "color":"#ffffff"})
    });




});