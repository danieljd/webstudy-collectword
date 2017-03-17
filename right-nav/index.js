/**
 * Created by yuejd on 2017/3/17.
 */
$(document).ready(function () {

    $(window).scroll(function () {
        var top=$(document).scrollTop();
        //console.log(top);
        var nav=$("#nav");
        var items=$(".item");
        var currentId="";

        items.each(function () {
            var itemTop=$(this).offset().top;
            //console.log(itemTop)
            if(top>itemTop-200){
             currentId ="#"+$(this).attr("id");
            }else{
                return false;

            }
        })
        var currentlink=nav.find(".current");
        if(currentId&&currentlink.attr("href")!=currentId){
            currentlink.removeClass("current");
            nav.find(" [href="+ currentId + "] ").addClass("current")
        }

    });


});