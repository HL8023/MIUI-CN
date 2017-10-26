$(function () {
    $(window).scroll(function () {
//            var offsetT = $('.part_20_on').offset().top;
//            console.log(offsetT);
        var scroll = $(window).scrollTop();
        if(scroll<1109){
            $('.float_nav').css('display','none');

        } else if(scroll>=1110 && scroll< 13300){
            $('.float_nav').css('display','block');
            $('.float_nav ul li').eq(0).addClass('tab_0_hover');
            $('.float_nav ul li').eq(1).removeClass('tab_1_hover');
            $('.float_nav ul li').eq(2).removeClass('tab_2_hover');
        }else if (scroll >= 13300 && scroll < 16900) {
            $('.float_nav').css('display','block');
            $('.float_nav ul li').eq(0).removeClass('tab_0_hover');
            $('.float_nav ul li').eq(2).removeClass('tab_2_hover');
            $('.float_nav ul li').eq(1).addClass('tab_1_hover');
        }else if (scroll >= 16900) {
            $('.float_nav').css('display','block');
            $('.float_nav ul li').eq(0).removeClass('tab_0_hover');
            $('.float_nav ul li').eq(1).removeClass('tab_1_hover');
            $('.float_nav ul li').eq(2).addClass('tab_2_hover');
        }
    })
    $('.share_weixin').hover(function(){
        $('.share_weixin img').css('display','block');
    },function(){
        $('.share_weixin img').css('display','none');
    });
    $('.share_weibo').hover(function(){
        $('.share_weibo img').css('display','block');
    },function(){
        $('.share_weibo img').css('display','none');
    });
    $('.to_top').click(function() {
        $('html body').animate({scrollTop: '0'},1000);
    });
    $('.float_nav').find('.tab_0').click(function () {
        $('html body').animate({scrollTop:'1110px'},1000)
    });
    $('.float_nav').find('.tab_1').click(function () {
        $('html body').animate({scrollTop:'13230px'},1000)
    });
    $('.float_nav').find('.tab_2').click(function () {
        $('html body').animate({scrollTop:'17650px'},1000)
    });
    $('.footer_links').find('.language_list').hover(function () {
        $('.language_list_ul').show();
        $('span').addClass('active');
    },function () {
        $('.language_list_ul').hide();
        $('span').removeClass('active');
    })
    $('.press').click(function () {
        $('.tips').animate({
            left:'38px'
        },500);
        $(this).parent().hide('fast');
    })
    $('.tips').find('.press2').click(function () {
        // console.log($('.pic'));
        $('.pic').animate({
            top:'100px'
        },500);
        // console.log($(this));
        $(this).parent().hide('fast');
        // $(this).parent().hide('fast')
        // $(this).parent().parent().css({
        //     opacity:'0.3'
        // })
        // console.log($(this).parent().parent());
    })
})