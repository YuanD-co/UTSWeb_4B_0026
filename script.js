$(document).ready(function() {
    $('#btn-about').click(function() {
        $('#about-more').slideToggle(400);

        if ($(this).text() === 'Selengkapnya') {
            $(this).text('Sembunyikan');
        } else {
            $(this).text('Selengkapnya');
        }
    });