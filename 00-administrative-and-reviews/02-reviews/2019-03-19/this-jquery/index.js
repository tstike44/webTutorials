$(document).ready(function () {
    $('.click').click(function () {
        console.log(this);
        console.log($(this));
        $(this).html('hello');
    })
})