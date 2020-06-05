const nav = document.querySelector('nav');
$(window).on('scroll', () => {
    if($(window).scrollTop()){
        $(nav).addClass('active');
    }
    else{
        $(nav).removeClass('active');
    }
})