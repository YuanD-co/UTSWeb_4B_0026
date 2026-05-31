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

    let hargaAwal = 0;

    $('.btn-order').click(function() {
        let nama = $(this).attr('data-name');
        hargaAwal = parseInt($(this).attr('data-price'));
        $('#menu-nama').val(nama);
        $('#menu-harga').val('Rp ' + hargaAwal.toLocaleString('id-ID'));
        $('#menu-qty').prop('disabled', false).val(1);
        $('#btn-submit').prop('disabled', false);
        hitungTotal();
        $('html, body').animate({
            scrollTop: $("#order").offset().top - 70
        }, 500);
    });

     $('#menu-qty').on('input change', function() {
        hitungTotal();
    });