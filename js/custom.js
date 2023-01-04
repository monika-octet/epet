// Password Input Field Right Eye

$('.pass-eye-img-link').on('click', function(){
    $('.pass-eye-img').toggleClass('d-none');
    $('.pass-eye-img-2').toggleClass('d-none');
})

$('.show-table').on('click', function(){
    $('.notes-table').toggleClass('d-none');
    $('.arrow-rotate').toggleClass('rotate');
})

$('.show-table-1').on('click', function(){
    $('.notes-table-1').toggleClass('d-none');
    $('.arrow-rotate-1').toggleClass('rotate');
})

$('.show-table-2').on('click', function(){
    $('.notes-table-2').toggleClass('d-none');
    $('.arrow-rotate-2').toggleClass('rotate');
})