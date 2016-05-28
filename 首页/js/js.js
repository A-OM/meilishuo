$(function () {

    var myScorll;


    //内容滚动
    function loaded(e) {
        myScorll = new iScroll("nav", {

            scrollbars: true,
            //出现滚动条
            shrinkScrollbars: "scale",
            //滚动时，是否缩放
            fadeScrollbars: true,
            //滚动停止，是否隐藏滚动条
            disableMouse: true,
            //PC端鼠标不允许滚动
            mouseWheel: true //移动端可以用鼠标来进行滚动
        });
    }


    //图片横向滚动
    //  myScorll = new iScroll("nav", function () {});
    myScorll = new iScroll("text", function () {});


    window.addEventListener('load', loaded, false);



    //图片轮播

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });





    //点击字体换色
    $("footer").on("tap", "a", function () {
        $(this).css({
            "color": "#E85476"
        }).siblings().css({
            "color": "#2E2E2E"
        })
    })

    //点击赞
    $("body").on("tap", ".fa-thumbs-o-up", function () {
        $(this).toggleClass("cl")
    })

    //点击分类数据渲染




    $.getJSON("../data.json", function (data) {
        var ohtml = "";
        $.each(data.home.home_nav, function (key, val) {
            ohtml += '<li><a href="#">' + key + '</a></li>'
                //console.log(key);
        })

        $(".text_List").html(ohtml);

        $("body .text_List").on("tap", "li a", function () {

            $(this).addClass("li").parent("li").siblings().find("a").removeClass("li");



            var key = $(this).html();
            //console.log($(this).html());
            if (key == "推荐") {
                cen();
            } else if (key == "关注" || "搭配" || "美容" || "逆生长" || "生活方式") {
                page();
            }

        })
        cen();
    })




    function cen() {

        var html = "",
            otml = "",
            oml = "";
        $.getJSON("../data.json", function (data) {
            //小图的渲染

            $.each(data.home.home_nav, function (key, val) {
                // console.log(val);

                for (i in val.scroll_pic) {
                    //console.log(val.scroll_pic[i].imgURL);
                    html += "<a href='#'><img src='img/" + val.scroll_pic[i].imgURL + "'></a>"
                }
            })
            $(".lis").html(html);

            //图片导航渲染

            $.each(data.home.home_nav, function (key, vl) {
                // console.log(key);

                if (key == "推荐") {
                    $.each(vl.more, function (key, v) {
                        //console.log(v.title)
                        otml += "<a href='#'><i><img src='img/" + v.imgURL + "'></i><span>" + v.title + "<p>" + v.dis + "</p></span></a>"
                    })
                }
            })
            $(".nav_Down").html(otml);

            //下面大图的数据渲染

            $.each(data.home.home_nav, function (key, vv) {
                //console.log(vv)
                for (i in vv.particulars) {
                    // console.log(vv.particulars)
                    oml += "<li><img src='img/" + vv.particulars[i].imgURL + "'class='lis_pic'><div class='body'><h3>" + vv.particulars[i].title + "</h3><p>" + vv.particulars[i].dis + "</p><p class='lianjie'><a href='#'>" + vv.particulars[i].pinktxtO + "</a><a href='#'>" + vv.particulars[i].pinktxtT + "</a><a href='#'>" + vv.particulars[i].pinktxtTH + "</a><span>" + vv.particulars[i].time + "</span></p><p class='click'><a href='#' class='fa fa-upload'></a><a href='#' class='fa fa-thumbs-o-up'>17</a><a href='#' class='fa fa-comment-o'></a><a href='#' class='fa fa-star-o'></a></p></div></li>"
                }
            })
            $(".main").html(oml);
        })
    }


    function page() {
        var oml = "";
        $.getJSON("../data.json", function (data) {
            //下面大图的数据渲染

            $.each(data.home.home_nav, function (key, vv) {
                //console.log(vv)
                for (i in vv.particulars) {
                    // console.log(vv.particulars)
                    oml += "<li><img src='img/" + vv.particulars[i].imgURL + "'class='lis_pic'><div class='body'><h3>" + vv.particulars[i].title + "</h3><p>" + vv.particulars[i].dis + "</p><p class='lianjie'><a href='#'>" + vv.particulars[i].pinktxtO + "</a><a href='#'>" + vv.particulars[i].pinktxtT + "</a><a href='#'>" + vv.particulars[i].pinktxtTH + "</a><span>" + vv.particulars[i].time + "</span></p><p class='click'><a href='#' class='fa fa-upload'></a><a href='#' class='fa fa-thumbs-o-up'>17</a><a href='#' class='fa fa-comment-o'></a><a href='#' class='fa fa-star-o'></a></p></div></li>"
                }
            })
            $(".main").html(oml);
        })
    }



    //让文字导航固定到页面中
    $("#scrollcontent").on("scroll", function () {
        //alert(1)
        var textTop = $(this).scrollTop(),
            hTop = $(".swiper-container").height(),
            // console.log("111")
            msr = hTop - textTop;

        if (msr <= 0) {
            $("#text").css({
                "position": "fixed",
                "top": "2.22rem",
                "left": "0",
                "zIndex": "10"
            })
        } else {
            $("#text").css({
                "position": ""
            })
        }

    })


})