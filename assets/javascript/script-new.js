$(document).ready(function () {
    // =====================NOT USING!!!=====================
    const navbar = $('#navbar');
    const triviaBtn = $('#trivia-btn');
    const triviaInfoDiv = $('#trivia-info-div');
    const triviaImg = $('#trivia-img');
    const cardCol = $(".card-col");
    const cardHover = $('.card-hover');
    // =======================================================

    // =====================USING!!!!!!!!=====================
    const introSection = $('#intro-section');
    const optionSection = $('#option-section');
    const aboutBtn = $('.about-btn');
    const portfolioBtn = $('.port-btn');
    const aboutOptionDiv = $('#about-option');
    const portfolioOptionDiv = $('#portfolio-option');
    const aboutSection = $('#about-section');
    const portfolioSection = $('#portfolio-section');
    const card = $('.card');
    const exitBtn = $('.exit-btn');
    const backgroundHalf = $('.background-half');
    const introDiv = $('.intro-div')
    const introNextBtn = $('#intro-next');
    const switchOption = $('.switch-btn');
    const switchH3 = $('.switch-h3');
    const switchInfo = $('.switch-info');
    const switchArrow = $('.switch-arrow');
    const halfMid = $('.half-mid');
    // =======================================================


    // portfolioSection.hide();
    // backgroundHalf.hide();
    // optionSection.hide();
    applyCardHover();
    applySwitchHover();
    landingPageStart();

    introNextBtn.on('click', function (event) {
        event.preventDefault();
        introSection.addClass('animated fadeOut');
        introSection.on('animationend', function () {
            introSection.hide();
            optionSection.addClass('animated slideInUp');
            optionSection.show();
            optionSection.on('animationend', function () {
                backgroundHalf.hide();
            })
        });
    });

    aboutBtn.on('click', function (event) {
        event.preventDefault()
        optionSection.css('background-color', '#f6f8ff')
        portfolioOptionDiv.addClass('animated slideOutRight');
        aboutOptionDiv.addClass('animated fadeOutRight')
        portfolioOptionDiv.on('animationend', function () {
            optionSection.hide();
            aboutSection.css('display', 'flex');
        });
    });

    portfolioBtn.on('click', function (event) {
        event.preventDefault();
        switchOption.show();
        $('body').css('background-image', 'none');
        $('body').css('background-color', '#212121');
        portfolioOptionDiv.addClass('animated fadeOut');
        halfMid.addClass('animated fadeOut');
        // aboutOptionDiv.addClass('animated fadeOutLeft');
        halfMid.on('animationend', function () {
            optionSection.animate({ width: 'hide' }, 750).delay(100).fadeOut(100, function () {
                portfolioSection.fadeIn('slow', function () {
                    switchH3.fadeIn();
                    $('.navbar').fadeIn();
                    $('.links-div').fadeIn();
                });
            });


            // aboutOptionDiv.on('animationend', function () {
            //     aboutOptionDiv.removeClass('animated slideOutLeft');

            // optionSection.addClass('animated slow slideOutLeft');
            // optionSection.on('animationend', function () {
            //     optionSection.fadeOut();
            // })
            // aboutOptionDiv.hide();
            // optionSection.hide();



            //     optionSection.addClass('animated slideOutRight');
            // });
            // optionSection.hide();

        })
        // portfolioSection.show();
        // portfolioSection.addClass('animated fadeIn')
        // portfolioSection.on('animationend', function () {
        // optionSection.hide();
        // switchH3.addClass('animated fadeIn');
        // switchH3.show();
        // });

        // })
    });


    // Card effects

    function applyCardHover() {
        card.hover(
            function () {
                let cardDataId = $(this).attr('data-id');
                $('.p-div').hide();
                $(this).css('cursor', 'pointer');
                $(this).addClass('animated bounce');
                $(this).children('.card-body').css('transform', 'scale(0.98)')
                $('.info-div').each(function () {
                    if ($(this).attr('data-id') === cardDataId + 'a') {
                        let infoDiv = $(this);
                        infoDiv.children('.exit-btn').hide();
                        infoDiv.css('transform', 'scale(0.8)');
                        infoDiv.css('filter', 'grayscale(1)');
                        infoDiv.show();
                        infoDiv.addClass('animated faster fadeIn');
                    }
                });
            },
            function () {
                $('.p-div').show();
                let cardDataId = $(this).attr('data-id');
                $(this).removeClass('animated bounce');
                $('.card-body').css('transform', 'scale(1)')
                $('.info-div').each(function () {
                    if ($(this).attr('data-id') === cardDataId + 'a') {
                        let infoDiv = $(this);
                        infoDiv.addClass('fadeOut');
                        infoDiv.css('filter', 'grayscale(0)');
                        infoDiv.removeClass('animated fadeIn faster fadeOut');
                        infoDiv.hide();
                    }
                });

            }
        )
    };

    function applySwitchHover() {
        switchOption.mouseenter(function () {
            switchInfo.show();
            switchArrow.show();
            switchOption.css('cursor', 'pointer');
            switchOption.animate({ width: '75px' });
            switchH3.animate({ left: '-45px' });
            switchInfo.addClass('animated fadeIn');
            switchInfo.animate({ left: '30px' });
            switchArrow.addClass('animated fadeIn');
            switchArrow.animate({ left: '52px' });
        })
        switchOption.mouseleave(function () {
            switchInfo.animate({
                left: '25px',
                opacity: 0,
            }, 250, function () {
                switchInfo.css('left', '25px');
                switchInfo.hide();
            });
            switchArrow.animate({
                left: '42px',
                opacity: 0,
            }, 250, function () {
                switchArrow.css('left', '42px');
                switchArrow.hide();
            })
            switchOption.animate({ width: '60px' });
            switchH3.animate({
                left: '-52px',
                transform: 'scale(1)'
            });
            switchArrow.removeClass('animated fadeIn faster');
            switchInfo.removeClass('animated fadeIn faster');
        });

    };

    function resetSwitch() {
        switchOption.animate({ width: '60px' });
        switchH3.animate({ left: '-52px' });
        switchArrow.animate({ left: '42px' });
    }

    card.on('click', function () {
        let thisCard = $(this);
        let cardDataId = $(this).attr('data-id');

        function checkCards(currentCard) {
            let stop = false;
            card.each(function () {
                if ($(this).hasClass('card-active')) {
                    return stop = true;
                }
                else {
                    $(this).addClass('card-inactive');
                    $(this).unbind("mouseenter mouseleave");

                }
            })
            if (stop === false) {
                cardClicked(currentCard);
            }
        }

        function cardClicked(currentCard) {
            currentCard.unbind("mouseenter mouseleave");
            currentCard.addClass('card-active');
            currentCard.removeClass('animated card-inactive bounce infinite slow');
            card.css('cursor', 'default');
            $('.card-body').css('transform', 'scale(1)')
            $('.info-div').each(function () {
                if ($(this).attr('data-id') === cardDataId + 'a') {
                    let infoDiv = $(this);
                    infoDiv.children('.exit-btn').show();
                    infoDiv.removeClass('fadeIn faster fadeOut');
                    infoDiv.css('filter', 'grayscale(0)');
                    infoDiv.addClass('div-active bounceInUp ');
                }
            })

        };

        checkCards(thisCard);
    })


    exitBtn.on('click', function () {
        $('.p-div').show();
        let exitBtnDataId = $(this).attr('data-id');
        card.removeClass('card-active card-inactive');
        // card.removeClass('card-inactive');
        applyCardHover();
        $('.info-div').each(function () {
            if ($(this).attr('data-id') === exitBtnDataId + 'a') {
                let infoDiv = $(this);
                infoDiv.addClass('fadeOut');
                infoDiv.hide();
                infoDiv.removeClass('animated fadeOut div-active flipInX');
            }
        })
    });

    function landingPageStart() {
        backgroundHalf.show();
        introDiv.css('visibility', 'visible');
        introDiv.addClass('animated slideInLeft');
        introDiv.on('animationend', function () {
            introNextBtn.css('visibility', 'visible');
            introNextBtn.addClass('animated bounceInUp');
            introNextBtn.on('animationend', function () {
                introNextBtn.removeClass('bounceInUp');
                introNextBtn.addClass('infinite bounce slow');
            })
        })
    };

});