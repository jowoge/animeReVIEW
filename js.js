//code taken from https://jsfiddle.net/77v3329y/1/
//adds an 'active' class when you are on a certain part of the page, allowing me to highlight the tab in the sticky header
$(window).on('scroll', function () {
    var a = +$('#section1').height();
    var b = $('#section2').height();
    var c = $('#section3').height();
    $('#sectionSelect1, #sectionSelect2, #sectionSelect3').removeClass('active');
    var st = $(document).scrollTop();
    //console.log('working')
    if (st < a) {
        $('#sectionSelect1').addClass('active');
    }
    else if (st > a && st < a + b) {
        $('#sectionSelect2').addClass('active');
    }
    else if (st > a + b) {
        $('#sectionSelect3').addClass('active');
    }
});