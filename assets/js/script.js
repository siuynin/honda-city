const sections = Array.from(document.getElementsByTagName('section'));
const navbarList = document.getElementById('navbar__list');
const responsiveMenu = document.getElementById('responsive__menu');
const menuLink = document.getElementsByClassName('menu__link');

/**
 * jQuery Scroll to element
 * @param target: jQuery selector
 */
function scrollTo(target) {
    $('html,body').animate({
        scrollTop: target ? (target.offset().top) : 0
    }, 'slow');
}

/**
 * Populates the navbar list items with the section data.
 */
function renderNavbar() {
    navbarList.innerHTML = ' ';
    sections.forEach(section => {
        if (!section.dataset || !section.dataset.nav) return;
        const item = document.createElement('li');
        item.innerHTML = '<span>' + section.dataset.nav + '</span>';
        item.className = 'menu__link';
        item.setAttribute("data-text", section.dataset.nav);
        item.onclick = () => scrollTo($(`#${section.id}`));
        navbarList.appendChild(item);
    });
}

function renderMenu() {
    sections.forEach(section => {
        if (!section.dataset || !section.dataset.nav) return;
        const item = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = section.dataset.nav;
        a.onclick = () => {
            scrollTo($(`#${section.id}`))
        };
        item.style.listStyleType = 'none';
        item.appendChild(a);
        responsiveMenu.appendChild(item);
    });
}

renderMenu();
renderNavbar();

$('#popupHeadPage').modal('show');

let player, player2;

function onYouTubeIframeAPIReady() {
    // player = new YT.Player('player1', {
    //     width: '100%',
    //     height: '100%',
    //     videoId: 'XcTGghjaDKg',
    //     // playerVars: {
    //     //     playlist: 'FG0fTKAqZ5g',
    //     //     // autoplay: 1,
    //     //     // controls: 0
    //     // },
    //     events: {
    //         // onReady: initialize
    //     }
    // });
    player2 = new YT.Player('player2', {
        width: '100%',
        height: 500,
        videoId: 'XcTGghjaDKg',
        // playerVars: {
        //     playlist: 'FG0fTKAqZ5g',
        //     // autoplay: 1,
        //     // controls: 0
        // },
        events: {
            // onReady: initialize
        }
    });
}

// function playVideo() {
//     player.playVideo();
// }

function pauseVideo() {
    // player.pauseVideo();
    player2.pauseVideo();
}

/**
 * Function called on each scroll event.
 * It checks for the elements in viewport and sets active classes accordingly.
 */
function focusOnScroll() {
    if (window.pageYOffset >= ($(sections[9]).offset().top - 150)) {
        // test drive
        $(menuLink[9]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[9])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[8]).offset().top - 150) && window.pageYOffset < ($(sections[9]).offset().top)) {
        // library
        $(menuLink[8]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[8])).removeClass('navbar-active');
    } else if (window.pageYOffset >= ($(sections[7]).offset().top - 150) && window.pageYOffset < ($(sections[8]).offset().top)) {
        // spec
        $(menuLink[7]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[7])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[6]).offset().top - 150) && window.pageYOffset < ($(sections[7]).offset().top)) {
        // accessory
        findBlockAnimation($(sections[6]), window.pageYOffset);
        $(menuLink[6]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[6])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[5]).offset().top - 150) && window.pageYOffset < ($(sections[6]).offset().top)) {
        // safety
        findBlockAnimation($(sections[5]), window.pageYOffset);
        $(menuLink[5]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[5])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[4]).offset().top - 150) && window.pageYOffset < ($(sections[5]).offset().top)) {
        // operation
        findBlockAnimation($(sections[4]), window.pageYOffset);
        $(menuLink[4]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[4])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[3]).offset().top - 150) && window.pageYOffset < ($(sections[4]).offset().top)) {
        // interior
        findBlockAnimation($(sections[3]), window.pageYOffset);
        $(menuLink[3]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[3])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[2]).offset().top - 150) && window.pageYOffset < ($(sections[3]).offset().top)) {
        // exterior
        findBlockAnimation($(sections[2]), window.pageYOffset);
        $(menuLink[2]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[2])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= ($(sections[1]).offset().top - 150) && window.pageYOffset < ($(sections[2]).offset().top)) {
        // color
        $(menuLink[1]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[1])).removeClass('navbar-active');
        pauseVideo()
    } else if (window.pageYOffset >= 0 && window.pageYOffset < ($(sections[1]).offset().top)) {
        // message
        findBlockAnimation($(sections[0]), window.pageYOffset);
        $(menuLink[0]).addClass('navbar-active');
        $('.menu__link').not($(menuLink[0])).removeClass('navbar-active');
        pauseVideo()

    }
}

window.onscroll = focusOnScroll;

$('#popupHeadPage').on('hidden.bs.modal', function () {
    pauseVideo()
})

$('#color-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    swipe: false,
    cssEase: 'linear'
});

function getPathImg(data_name) {
    let pathImgs = [];
    for (let i = 35; i >= 0; i--) {
        pathImgs.push("https://www.honda.com.vn/o-to/san-pham/honda-city/assets/imgs/color/" + data_name + "/F-" + i + ".png")
    }
    return pathImgs
}

SpriteSpin.extendApi({
    updateIdx: function(_this){
        let idx = this.data.frame
        $.each($(".spriteSpin").not($(_this)), function (i, item) {
            $(item).spritespin({
                frame: idx
            });
        })
    }
});
  
$.each($(".spriteSpin"), function (i, item) {
    $(item).spritespin({
        source: getPathImg($(this).data('name')),
        digits: 1,
        sizeMode: 'fit',
        responsive: true,
        animate: false,
        plugins: [
            'progress',
            '360',
            'drag'
        ],
        onFrameChanged: function () {
            $(this).spritespin("api").updateIdx($(item))
            $("body").get(0).style.setProperty("--display-color-icon-rotate", "none");
        }
    });
})

$('.menu-open li a').on('click', function () {
    $('.header__hbg-button').removeClass('open');
    $('.menu-open').hide();
});

$('.header__hbg-button').on('click', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.menu-open').hide();
    } else {
        $(this).addClass('open');
        $('.menu-open').show();
    }
    if ($('.header__extra-button').hasClass('open')) {
        $('.header__extra-button').removeClass('open');
        $('.honda-tools-sm').hide();
        $('.honda-tools-sm').removeClass('open');
    }
})

$('.header__extra-button').on('click', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.honda-tools-sm').hide();
        $('.honda-tools-sm').removeClass('open');
    } else {
        $(this).addClass('open');
        $('.honda-tools-sm').show();
        $('.honda-tools-sm').addClass('open');
    }

    if ($('.header__hbg-button').hasClass('open')) {
        $('.header__hbg-button').removeClass('open');
        $('.menu-open').hide();
    }
})
$('.honda-tools .open').on('click', function () {
    $('.item-mb').toggle();
    $(this).hide();
});
$('.honda-tools .close').on('click', function () {
    $('.item-mb').toggle();
    $('.honda-tools .open').show();
});

// $('.play-button1').on('click', function () {
//     $('#player1').removeClass('d-none');
//     // playVideo();
//     $(this).parent().css('display', 'none');
// })


// $('.move-to-test-drive').on('click', function () {
//     scrollTo($('#test-drive'))
//     $('#popupHeadPage').modal('hide')
// })

$('#l-img-tab').on('click', function () {
    $('#l-img-tab').addClass('tab-active')
    $('#l-video-tab').removeClass('tab-active')
    $('#library_video').addClass('d-none')
    $('#library_img').removeClass('d-none')
    pauseVideo()
})

$('#l-video-tab').on('click', function () {
    $('#l-video-tab').addClass('tab-active')
    $('#l-img-tab').removeClass('tab-active')
    $('#library_img').addClass('d-none')
    $('#library_video').removeClass('d-none')

    $('.slider-vid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        swipe: false,
        dot: false
    });
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    // responsive:[
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 1,
    //         infinite: true,
    //         dots: true
    //     }
    // },
    // ]
});

$('.popup-view-detail--list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "25%",
    dots: true,
    lazyLoad: 'ondemand',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                infinite: true,
            }
        },
    ]
});


$('.slider-nav-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    // responsive:[
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 1,
    //         infinite: true,
    //         dots: true
    //     }
    // },
    // ]
});
$('#library_img_preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    arrows: true,
    fade: true,
    autoplay: false,
    swipe: true,
    // asNavFor: '#library_img_list'
});

// $('.right-btn-test-drive').on('click', function () {
//     scrollTo($('#test-drive'))
// })
$('#table-head-clone').find('table').css('width',$('#s-table-container').find('table').width())
var list = $('.s-spec-type-car');
var link = $('.s-spec-chose-type-car');
link.click(function(e) {
    list.slideToggle(200);
});
list.find('li').click(function() {
    var text = $(this).html();
    link.html(text);
    list.slideToggle(200);
});
window.onresize = function(event) {
    $('#table-head-clone').find('table').css('width',$('#s-table-container').find('table').width())
    if(window.innerWidth <= 600){
        $('#s-spec-head-table-1').addClass('hide')
        $('#s-spec-head-table-2').removeClass('hide')
        $('.s-spec-detail-item2').addClass('hide')
        $('.s-spec-detail-item3').addClass('hide')
        $('.s-td-wd-col-3').attr('colspan',1)
        $('.s-specifications-table-title-td').attr('colspan',2)
        $('.s-spec-detail-item0').attr('colspan',1)
        $('#s-table-container-thead-item-1').removeClass('hide')
        $('#s-table-container-thead-item-2').addClass('hide')
        $('#s-table-container-thead-item-3').addClass('hide')
    }else{
        $('#s-spec-head-table-2').addClass('hide')
        $('#s-spec-head-table-1').removeClass('hide')
        $('.s-spec-detail-item2').removeClass('hide')
        $('.s-spec-detail-item3').removeClass('hide')
        $('.s-td-wd-col-3').attr('colspan',3)
        $('.s-specifications-table-title-td').attr('colspan',4)
        $('.s-spec-detail-item0').attr('colspan',3)
        $('#s-table-container-thead-item-1').removeClass('hide')
        $('#s-table-container-thead-item-2').removeClass('hide')
        $('#s-table-container-thead-item-3').removeClass('hide')
        $('.s-spec-detail-item1').removeClass('hide')
        $('.s-spec-detail-item2').removeClass('hide')
        $('.s-spec-detail-item3').removeClass('hide')
    }
};
if(window.innerWidth <= 600){
    $('#s-spec-head-table-1').addClass('hide')
    $('#s-spec-head-table-2').removeClass('hide')
    $('.s-spec-detail-item2').addClass('hide')
    $('.s-spec-detail-item3').addClass('hide')
    $('.s-td-wd-col-3').attr('colspan',1)
    $('.s-specifications-table-title-td').attr('colspan',2)
    $('.s-spec-detail-item0').attr('colspan',1)
    $('#s-table-container-thead-item-1').removeClass('hide')
    $('#s-table-container-thead-item-2').addClass('hide')
    $('#s-table-container-thead-item-3').addClass('hide')
}else{
    $('#s-spec-head-table-2').addClass('hide')
    $('#s-spec-head-table-1').removeClass('hide')
    $('.s-spec-detail-item2').removeClass('hide')
    $('.s-spec-detail-item3').removeClass('hide')
    $('.s-td-wd-col-3').attr('colspan',3)
    $('.s-specifications-table-title-td').attr('colspan',4)
    $('.s-spec-detail-item0').attr('colspan',3)
    $('#s-table-container-thead-item-1').removeClass('hide')
    $('#s-table-container-thead-item-2').removeClass('hide')
    $('#s-table-container-thead-item-3').removeClass('hide')
    $('.s-spec-detail-item1').removeClass('hide')
    $('.s-spec-detail-item2').removeClass('hide')
    $('.s-spec-detail-item3').removeClass('hide')
}
function reloadSpecTable(n){
    if(n == 1){
        $('.s-spec-detail-item1').removeClass('hide')
        $('.s-spec-detail-item2').addClass('hide')
        $('.s-spec-detail-item3').addClass('hide')
    } else if(n == 2){
        $('.s-spec-detail-item1').addClass('hide')
        $('.s-spec-detail-item2').removeClass('hide')
        $('.s-spec-detail-item3').addClass('hide')
    } else if(n == 3){
        $('.s-spec-detail-item1').addClass('hide')
        $('.s-spec-detail-item2').addClass('hide')
        $('.s-spec-detail-item3').removeClass('hide')
    }

}

$('.back-to-top').on('click', function () {
    scrollTo($('#message'))
})

/**
 * Checks if the parent element contain element that has class ".block-animation".
 * And Then remove class "move-animation"
 * @param parent: HTML parent element to check
 * @param pageYOffset: the pixels a document has scrolled from the upper left corner of the window.
 * @returns {boolean}
 */
function findBlockAnimation(parent, pageYOffset) {
    let block_animations = parent.find('.block-animation')
    if (block_animations[0] != undefined) {
        if (pageYOffset >= block_animations[0].offsetTop - 500) {
            let block_transitions = parent.find('.block-transition');
            if (block_transitions[0] != undefined) {
                parent.find('.move-animation').removeClass('move-animation')
                return true;
            }
        }
    }
    return false;
}
