$(function () {
    var role = ''
    if (location.pathname.includes('mentor') && location.pathname.includes('public')) {
        role = "."+location.pathname.slice(8,14).toLowerCase();
        $('#post-box-public').hide();
    }else if (location.pathname.includes('public')){
        role = "."+location.pathname.slice(8,15).toLowerCase();
        $('#post-box-public').hide();
    }else if (location.pathname.includes('mentor')){
        role = "."+location.pathname.slice(1,7).toLowerCase();

    } else {
        role = "."+location.pathname.slice(1,8).toLowerCase();
    }

    console.log(role)

    $('.student, .teacher, .mentor').hide();
    $(role).show();

})

