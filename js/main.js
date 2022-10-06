$(document).ready(function(){
    $('#mob-content').hide();
    $('.mob-nav').click(function(){
       var $nav = $(this).next('#mob-content');
       if ($nav.is(':hidden')){
        $nav.slideDown(1000);
       }else{$nav.fadeOut(500);}
    });
});