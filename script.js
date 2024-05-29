const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active');
    });
}
if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active');
    });
}

$('.small-img').on('click', function () {
    var src = $(this).attr('src');
    $('#Mainimg').attr('src', src);
});