$(function() {
    $('.jcarousel').jcarousel({
      scroll:1,
      wrap:"circular",
      list: '.jcarousel-list'
    });
    $('.jcarousel-prev').click(function (event) {
      event.preventDefault();
      $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function(event) {
      event.preventDefault();
      $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
          $('.jcarousel-pagination >a').eq(0).addClass('active');
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });
    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });

    $('select').selectBox();

    $( '.menu__item--dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown(300);
        },
        function(){
            $(this).children('.submenu').slideUp(300);
        }
    );
});
