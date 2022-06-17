$('#checkbox_html').on('click', () => {
    if ($('#checkbox_html').attr('class') == 'fa-regular fa-square-check') {
        $('#checkbox_html').attr('class', 'fa-regular fa-square')
        $('.screen_holder').hide()
    } else {
        $('#checkbox_html').attr('class', 'fa-regular fa-square-check')
        $('.screen_holder').show()
    }
});

$('#checkbox_css').on('click', () => {
    if ($('#checkbox_css').attr('class') == 'fa-regular fa-square-check') {
        $('#checkbox_css').attr('class', 'fa-regular fa-square')
        $('.screen_holder').attr('class', 'screen_holder screen_holder_hide')
    } else {
        $('#checkbox_css').attr('class', 'fa-regular fa-square-check')
        $('.screen_holder').attr('class', 'screen_holder screen_holder_show')
    }
});

var ipMenu = true;
$('.ip8_menu').hide()

$('#ip8_menu_icon').on('click', () => {
    if(ipMenu == true) {
        $('.ip8_menu').slideToggle()
    }
});

$('#checkbox_js').on('click', () => {
    if ($('#checkbox_js').attr('class') == 'fa-regular fa-square-check') {
        $('#checkbox_js').attr('class', 'fa-regular fa-square')
        ipMenu = false;
    } else {
        $('#checkbox_js').attr('class', 'fa-regular fa-square-check')
        ipMenu = true;
    }
});

function color(i) {
    $(i + ' > img').css('filter', 'brightness(1) invert(0)');
};

function white(n) {
    $('.aux_tools > div > img').not(n + '>img').attr('style', 'none');
    $('.ps_bg').attr('style', 'none')
}

$(window).on('load', () => {
    $('.aux_content > div').hide();
    $('#content1').show();
    white('#icon1');
    color("#icon1");
})

$('#icon1').on('click', () => {
    white('#icon1');
    color("#icon1");
    $('.aux_content > div').hide();
    $('#content1').show();
})
$('#icon2').on('click', () => {
    white('#icon2');
    color("#icon2");
    $('.aux_content > div').hide();
    $('#content2').show();
})
$('#icon3').on('click', () => {
    white('#icon3');
    color("#icon3");
    $('.aux_content > div').hide();
    $('#content3').show();
})
$('#icon4').on('click', () => {
    white('#icon4');
    color("#icon4");
    $('.aux_content > div').hide();
    $('#content4').show();
})
$('#icon5').on('click', () => {
    white('#icon5');
    color("#icon5");
    $('.aux_content > div').hide();
    $('#content5').show();
})
$('#icon6').on('click', () => {
    white('#icon6');
    color("#icon6");
    $('.aux_content > div').hide();
    $('#content6').show();
})
$('#icon7').on('click', () => {
    white('#icon7');
    color("#icon7");
    $('.ps_bg').css('display', 'block')
    $('.aux_content > div').hide();
    $('#content7').show();
})
$('#icon8').on('click', () => {
    white('#icon8');
    color("#icon8");
    $('.aux_content > div').hide();
    $('#content8').show();
})

$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});