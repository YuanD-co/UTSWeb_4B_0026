$(document).ready(function() {
    $('#btn-about').click(function() {
        $('#about-more').slideToggle(400);

        if ($(this).text() === 'Selengkapnya') {
            $(this).text('Sembunyikan');
        } else {
            $(this).text('Selengkapnya');
        }
    });

    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('btn-brown').addClass('btn-outline-brown');
        $(this).removeClass('btn-outline-brown').addClass('btn-brown');

        let kategori = $(this).attr('data-filter');
        
        if (kategori === 'all') {
            $('.menu-item').fadeIn(300);
        } else {
            $('.menu-item').hide();
            $('.menu-item[data-cat="' + kategori + '"]').fadeIn(300);
        }
    });