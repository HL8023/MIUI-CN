$(function () {
    var oUl = document.getElementById("category");
    var lis = oUl.children;
    var lip = oUl.getElementsByTagName('p');
    var boxes = $(".logo");
    var tbox = $(".category_list .selects");//选中tab内容
    var ttab = $(".brandSle .sel_content a");//选中tab

//tab切换
    ttab.on("click", function () {
        i = $(this).index(".sel");//获取选中a标签角标
        $(this).addClass("ahover").siblings().removeClass("ahover");
        $("html,body").stop().animate({"scrollTop": 300}, 500);
        tbox.eq(i).addClass("dis").siblings("div").removeClass("dis");
        return false;
    });

//首先,添加样式
    for (var i = 0; i < lis.length; i++) {
        if (i != 0 && i < lis.length - 2) {
//                有下标就把jq对象转成了DOM对象
            lis[i].style.backgroundPosition = -i * 141 + 'px ' + -2 + 'px';
        } else if (i == lis.length - 1) {
            lis[(lis.length - 1)].style.backgroundPosition = -1550 + 'px ' + -2 + 'px';
        } else if (i == lis.length - 2) {
            lis[(lis.length - 2)].style.backgroundPosition = -1676 + 'px ' + -2 + 'px';
        }
    }

//然后添加点击样式: 打勾勾 加背景
    for (var i = 0; i < lis.length; i++) {
        /*注意firstChild可能得到的是文本节点 要用firstElementChild*/
        if (i < lis.length - 2) {
            lis[i].index = i;
            lis[i].onclick = function () {
//                    alert(this.firstChild);
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundPosition = -j * 141 + 'px ' + -2 + 'px';
                    lip[j].className = "";
                }
                lis[lis.length - 1].style.backgroundPosition = -1550 + 'px ' + -2 + 'px';
                lis[lis.length - 2].style.backgroundPosition = -1676 + 'px ' + -2 + 'px';
                this.style.backgroundPosition = -this.index * 141 + 'px ' + -84 + 'px';
                this.firstElementChild.className = "sleHover";
                boxes.eq(this.index).addClass("dis").siblings("div").removeClass("dis");

            }
        } else if (i == lis.length - 1) {
            lis[i].index = i;
            lis[i].onclick = function () {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundPosition = -j * 141 + 'px ' + -2 + 'px';
                    lip[j].className = "";
                }
                lis[lis.length - 2].style.backgroundPosition = -1676 + 'px ' + -2 + 'px';
                this.style.backgroundPosition = -1550 + 'px ' + -84 + 'px';
                this.firstElementChild.className = "sleHover";
                boxes.eq(this.index).addClass("dis").siblings("div").removeClass("dis");
            }
        } else if (i == lis.length - 2) {
            lis[i].index = i;
            lis[i].onclick = function () {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundPosition = -j * 141 + 'px ' + -2 + 'px';
                    lip[j].className = "";
                }
                lis[lis.length - 1].style.backgroundPosition = -1550 + 'px ' + -2 + 'px';
                this.style.backgroundPosition = -1676 + 'px ' + -84 + 'px';
                this.firstElementChild.className = "sleHover";
                boxes.eq(this.index).addClass("dis").siblings("div").removeClass("dis");
            }
        }
    }

//添加鼠标移入样式
    for (var i = 0; i < lis.length; i++) {
        if (i < lis.length - 2) {
            lis[i].index = i;
            lis[i].onmouseover = function () {
                mouseEvent();
                this.style.backgroundPosition = -this.index * 141 + 'px ' + -84 + 'px';

            }
        } else if (i == lis.length - 1) {
            lis[i].index = i;
            lis[i].onmouseover = function () {
                mouseEvent();
                this.style.backgroundPosition = -1550 + 'px ' + -84 + 'px';
            }
        } else if (i == lis.length - 2) {
            lis[i].index = i;
            lis[i].onmouseover = function () {
                mouseEvent();
                this.style.backgroundPosition = -1676 + 'px ' + -84 + 'px';
            }
        }
    }
//鼠标移出wrp的样式
    $(".wrp").mouseleave(function () {
        for (var j = 0; j < lis.length; j++) {
            if (j < lis.length - 2 && lis[j].firstElementChild.className != "sleHover") {
                lis[j].style.backgroundPosition = -j * 141 + 'px ' + -2 + 'px';
            } else if (j == lis.length - 1 && lis[lis.length - 1].firstElementChild.className != "sleHover") {
                lis[lis.length - 1].style.backgroundPosition = -1550 + 'px ' + -2 + 'px';
            } else if (j == lis.length - 2 && lis[lis.length - 2].firstElementChild.className != "sleHover") {
                lis[lis.length - 2].style.backgroundPosition = -1676 + 'px ' + -2 + 'px';
            }
        }
    });
//封装移入的方法:
    function mouseEvent() {
        for (var j = 0; j < lis.length; j++) {
            if (j < lis.length - 2 && lis[j].firstElementChild.className != "sleHover") {
                lis[j].style.backgroundPosition = -j * 141 + 'px ' + -2 + 'px';
            } else if (j == lis.length - 1 && lis[lis.length - 1].firstElementChild.className != "sleHover") {
                lis[lis.length - 1].style.backgroundPosition = -1550 + 'px ' + -2 + 'px';
            } else if (j == lis.length - 2 && lis[lis.length - 2].firstElementChild.className != "sleHover") {
                lis[lis.length - 2].style.backgroundPosition = -1676 + 'px ' + -2 + 'px';
            }
        }
    }

//动态创建category列表及添加标题文字
    var category_title1 = ["全部产品", "小米 MIUI9", "Google", "htc", "三星", "摩托罗拉", "LG", "sony",
        "中兴", "oppo", "华为", "TEK", "其他"];
    var category_title2 = ["默认排序", "最新版本", "热度最高", "最新上市"];
//封装创建手机列表的方法
    function createPhoneLi(title) {
        return html = '<h4 class="cg_name">' + '<span style="background-color: #e1581d">' + title + '</span>' + '</h4>' +
            '<ul class="cg_list">' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米6' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '红米' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米5X' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米note3' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '红米4X' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米5s' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '红米note4' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米note5' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米5P' + '</p>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#">' +
            '<div class="phone">' + '</div>' +
            '<p class="phone_name">' + '小米6P' + '</p>' +
            '</a>' +
            '</li>' +
            '</ul>';
    }

    $(".category_list .logo").each(function (index, value) {
        $(this).html(createPhoneLi(category_title1[index]));
    });
    $(".category_list .selects").each(function (index, value) {
        $(this).html(createPhoneLi(category_title2[index]));
    });
//设置产品列表背景图片
    function bgSet1(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_2" + "3" + index + "_phone.png) no-repeat");
        });
    }

    function bgSet2(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_24" + index + "_phone.png) no-repeat");
        });
    }

    function bgSet3(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_26" + index + "_phone.png) no-repeat");
        });
    }

    function bgSet4(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_27" + index + "_phone.png) no-repeat");
        });
    }

    function bgSet5(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_29" + index + "_phone.png) no-repeat");
        });
    }

    function bgSet6(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_30" + index + "_phone.png) no-repeat");
        });
    }

    function bgSet7(i) {
        $(".bg" + i + " .phone").each(function (index, value) {
            $(this).attr("style", "background:url(images/phone/common_32" + index + "_phone.png) no-repeat");
        });
    }

    bgSet1(1);
    bgSet2(2);
    bgSet3(3);
    bgSet4(4);
    bgSet5(5);
    bgSet6(6);
    bgSet7(7);
    bgSet7(8);
    bgSet6(9);
    bgSet5(10);
    bgSet4(11);
    bgSet1(12);
    bgSet2(13);
    bgSet3(14);
    bgSet4(15);
    bgSet5(16);
    bgSet6(17);

//返回顶部和吸顶效果
    var navTop = $(".wp_nv").offset().top;//获取导航栏离页面顶部的距离
    window.onscroll = function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > navTop + 120) {
            //显示返回顶部的图标
            $(".scrollT").css("display", "block");
            //实现导航吸顶效果
            $(".wp_nv").addClass("keepTop");
            $(".hd").stop().css({"height": "48", "position": "fixed", "top": 0, "opacity": 0.8});
        } else {
            $(".scrollT").stop().css("display", "none");
            $(".wp_nv").removeClass("keepTop");
            $(".hd").css({"height": "164", "position": "static", "opacity": 1});
        }

    };
    $(".scrollT").click(function () {
        $("html,body").animate({scrollTop: 0}, 500)
    });
//more导航的显示与隐藏
    $(".wp_nv .more").mouseover(function () {//移入more
        // $(this).children().css("display","block");
        $(this).children().stop().show(500);//要用stop()等待动画执行完,不然会连续移动造成执行来不及而延迟执行
    }).mouseleave(function () {
        // $(this).children().css("display","none");
        $(this).children().stop().hide(500);
    });
//显示二维码
    $("h2 .dl").mouseenter(function () {
        // $(this).next().css("display","block");
        // alert(222);
        $(this).next().stop().slideDown(500);
    }).mouseleave(function () {
        // $(this).next().css("display","none");
        $(this).next().stop().slideUp(500);
    });
//显示下拉列表
    $(".wp_lg .um .txt .title>li").hover(function () {
        $(this).children().stop().slideToggle(500);
    });

//蒙版特效
    $(".wp .login").click(function () {
        $(".mask").fadeIn(function () {
            document.body.style.overflow = "hidden";
        });
        $(".mask").click(function () {
            //关闭蒙版
            $(this).fadeOut(function () {
                document.body.style.overflow = "auto";
                // document.body.style.overflow = "none";
            });
        });

        $(".mask_X").click(function () {
            $(".mask").fadeOut();
            document.body.style.overflow = "auto";
        })

        $('.mask_close').click(function (e) {
            //阻止冒泡
            e.stopPropagation();
        });

        $('.ercode_box').click(function (e) {

            //阻止冒泡
            e.stopPropagation();
        });
        $("#updateBtnID").click(function () {
            $(".mask").fadeOut();
        })
    });
    $(".mask_type_land").click(function () {
        $(this).toggleClass('z_cur');
        $(".mask_close").toggle();
        $(".ercode_box").toggle();
    });
    $(".foot_body .foot_oul .foot_language a").hover(function () {
        $(this).css("text-decoration", "none");
    });
//登录界面做正则匹配
    var myReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    /*var myReg1 = /^1(3|4|5|7|8)\d{9}$/gi;*/
    $(".mask_innpt .user").keyup(function () {
        if (myReg.test($(".mask_innpt .user").val())) {
            $(".mask_innpt span").text("符合邮箱格式").css("color", "orange");
        } else {
            $(".mask_innpt span").text("不符合邮箱格式").css("color", "red");
        }
        /*if(myReg1.test($(".mask_innpt .user").val())){
         $(".mask_innpt span").text("符合手机格式").css("color","orange");
         }else{
         $(".mask_innpt span").text("不符合手机格式").css("color","red");
         }*/
    });
//简单的搜索功能
    var data = {
        "华为": 13, "htc": 5, "小米": 20, "LG": 10, "中兴": 12, "索尼": 5, "oppo": 9, "三星": 11,
        "摩托罗拉": 12, "谷歌": 14
    };
    $(".right input").bind("keydown", function (event) {
        if (event.keyCode == "13") {
            // rd = parseInt(Math.random()*25);
//            console.log(rd);
            var ipValue = $(".right input").val();
            //回车执行查询
            var flag = data[ipValue];
            console.log(flag);
            if (flag != undefined) {
                alert("您的搜索的" + ipValue + "包含" + flag + "条结果,请往下搜索");
            } else if (flag == undefined) {
                alert("对不起,暂时没有你要查询的手机!");
            }
        }
    });
});