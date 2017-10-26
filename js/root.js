/**
 * Created by 123 on 2017/9/2.
 */
$(function () {
    //尾部
    $(".foot_language a").hover(function () {
        $(this).css("text-decoration", "none");
    });

    //解锁
    $(".oDetail").click(function () {
        $(".mask").fadeIn(function () {
            // document.body.style.overflow = "hidden";
        });
        $(".mask").click(function () {
            //关闭蒙版
            $(this).fadeOut(function () {
                // document.body.style.overflow = "";
            });
        });
        $(".mask_X").click(function () {
            $(".mask").fadeOut();
        });
        //蒙版1
        $('.mask_close').click(function (e) {
            //阻止冒泡
            e.stopPropagation();
        });
        //蒙版2
        $('.ercode_box').click(function (e) {
            //阻止冒泡
            e.stopPropagation();
        });
    });
    $(".mask_type_land").click(function () {
        $(this).toggleClass('z_cur');
        $(".mask_close").toggle();
        $(".ercode_box").toggle();
    })
});

