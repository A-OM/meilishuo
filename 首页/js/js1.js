home = $(this).data("home");
//渲染分类
$.getJSON("../data.json", function (data) {

    $.each(data.home.home_nav, function (key, val) {
        ohtml += '<li><a href="#">' + key + '</a></li>'
            //console.log(key);\
    })

    $(".text_List").html(ohtml);

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