$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      textColour: '#000000',
      outlineColour: 'tagbg',
      dragControl: true,
      clickToFront: 800,
      wheelZoom: false,
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05
    },'tags')) {
      $('#myCanvasContainer').hide();
    }
});

$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        }
      ]
});

$('.skills_content').hide()
$('#html_con').show();


$('#html').on('click', () => {
    $('.skills_content').hide()
    $('#html_con').show();
});
$('#css').on('click', () => {
  $('.skills_content').hide()
  $('#css_con').show();
});
$('#js').on('click', () => {
  $('.skills_content').hide()
  $('#js_con').show();
});
$('#jquery').on('click', () => {
  $('.skills_content').hide()
  $('#jquery_con').show();
});
$('#sass').on('click', () => {
  $('.skills_content').hide()
  $('#sass_con').show();
});
$('#figma').on('click', () => {
  $('.skills_content').hide()
  $('#figma_con').show();
});
$('#gulp').on('click', () => {
  $('.skills_content').hide()
  $('#gulp_con').show();
});
$('#bootstrap').on('click', () => {
  $('.skills_content').hide()
  $('#bootstrap_con').show();
});
$('#photoshop').on('click', () => {
  $('.skills_content').hide()
  $('#photoshop_con').show();
});