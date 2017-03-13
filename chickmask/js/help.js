/**
 * Created by yuejd on 2017/3/10.
 */
$(function () {
    $(".help-him").click(function () {
        $(".help-success").show();
        setTimeout(function(){
            $(".help-success").fadeOut();
        },800)
    })



})