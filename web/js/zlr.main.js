var __currentCatId;

$(document).ready(function () {
    $('img').lazyload({
        threshold: 100,
        placeholder: "img/grey.gif",
        effect: "slideDown",
        effect_speed: 1000,
        event: 'scroll',
        data_attribute: 'original',
        skip_invisible: true,
        failure_limit: 2,
        appear: function () {
            $(this).attr('src');
        },
        load: function () {
            $(this).attr('src');
        }

    });

    //初始化公众号，下载APP事件
    $(".dl").mouseover(function (e) { $(".dlcan").css("display","block"); });
    $(".dl").mouseout(function (e) { $(".dlcan").css("display", "none"); });

    $(".wx").mouseover(function (e) { $(".wxcan").css("display", "block"); });
    $(".wx").mouseout(function (e) { $(".wxcan").css("display", "none"); });

    $(".popli").mouseover(function (e) { $(".popcan").css("display", "block"); });
    $(".popli").mouseout(function (e) { $(".popcan").css("display", "none"); });

    //城市切换
    $(".city").mouseover(function (e) { $(".city-list").css("display", "block"); $(".city-box").addClass("city-boxon"); });
    $(".city").mouseout(function (e) { $(".city-list").css("display", "none"); $(".city-box").removeClass("city-boxon"); });

    //菜单事件
    $(".nav-item2").mouseover(function (e) { $(".nav-item2").addClass("selected"); $(".pop-cou-cat").css("display", "block");  });
    $(".nav-item2").mouseout(function (e) { $(".nav-item2").removeClass("selected"); $(".pop-cou-cat").css("display", "none"); });
    $(".nav-item3").mouseover(function (e) { $(".nav-item3").addClass("selected"); });
    $(".nav-item3").mouseout(function (e) { $(".nav-item3").removeClass("selected"); });
    $(".nav-item4").mouseover(function (e) { $(".nav-item4").addClass("selected"); });
    $(".nav-item4").mouseout(function (e) { $(".nav-item4").removeClass("selected"); });
    $(".nav-item5").mouseover(function (e) { $(".nav-item5").addClass("selected"); });
    $(".nav-item5").mouseout(function (e) { $(".nav-item5").removeClass("selected"); });
    $(".nav-item6").mouseover(function (e) { $(".nav-item6").addClass("selected"); });
    $(".nav-item6").mouseout(function (e) { $(".nav-item6").removeClass("selected"); });
    $(".nav-item7").mouseover(function (e) { $(".nav-item7").addClass("selected"); $(".pop-ly-cat").css("display", "block"); });
    $(".nav-item7").mouseout(function (e) { $(".nav-item7").removeClass("selected"); $(".pop-ly-cat").css("display", "none"); });
    $(".nav-item8").mouseover(function (e) { $(".nav-item8").addClass("selected"); $(".shequ").css("display", "block"); });
    $(".nav-item8").mouseout(function (e) { $(".nav-item8").removeClass("selected"); $(".shequ").css("display", "none"); });
    $(".nav-item9").mouseover(function (e) { $(".nav-item9").addClass("selected"); $(".tools").css("display", "block"); });
    $(".nav-item9").mouseout(function (e) { $(".nav-item9").removeClass("selected"); $(".tools").css("display", "none"); });

    //查询分类点击
    $(".catitem1").click(function (e) {
        if ($(".ip").val() == "") $(".ip").attr('placeholder', '请输入要查询的课程，例如“民族舞”“钢琴”等');
        if (__currentCatId > 0)
        {
            $(".catitem" + __currentCatId).removeClass("selected-li");
        }
        __currentCatId = 1;
        $(".catitem1").addClass("selected-li");
    });
    $(".catitem2").click(function (e) {
        if ($(".ip").val() == "") $(".ip").attr('placeholder', '请输入要查询的机构名称，例如“恒越教育”等');
        if (__currentCatId > 0) {
            $(".catitem" + __currentCatId).removeClass("selected-li");
        }
        __currentCatId = 2;
        $(".catitem2").addClass("selected-li");
    });
    $(".catitem3").click(function (e) {
        if ($(".ip").val() == "") $(".ip").attr('placeholder', '请输入要查询的老师，例如“王迪”等');
        if (__currentCatId > 0) {
            $(".catitem" + __currentCatId).removeClass("selected-li");
        }
        __currentCatId = 3;
        $(".catitem3").addClass("selected-li");
    });
    $(".catitem4").click(function (e) {
        if ($(".ip").val() == "") $(".ip").attr('placeholder', '请输入要查询的社区活动，例如“夏令营”等');
        if (__currentCatId > 0) {
            $(".catitem" + __currentCatId).removeClass("selected-li");
        }
        __currentCatId = 4;
        $(".catitem4").addClass("selected-li");
    });

    //活动图片，鼠标移动显示覆盖详细描述层
    $(".lingying-container1").hover(function () {
        $(".lingying-hover1").stop().show().css({ "top": "90px" }).animate({ top: 0 }, 300);
        }
        , function () {
            $(".lingying-hover1").stop().animate({ top: 90 }, 300);
    });
    $(".lingying-container2").hover(function () {
        $(".lingying-hover2").stop().show().css({ "top": "90px" }).animate({ top: 0 }, 300);
    }
        , function () {
            $(".lingying-hover2").stop().animate({ top: 90 }, 300);
        });
});