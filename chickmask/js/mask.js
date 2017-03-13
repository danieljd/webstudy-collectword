/**
 * Created by yuejd on 2017/3/9.
 */
$(function () {
    $(".mb_start_btn").click(function () {
        $(".mask_black").hide();
        $(".mb_start").hide();
    })



   // 点击活动规则
    $(".mb_activity_rule").click(function () {
        $(".mask_black").show();
        $(".mb_rule_box").show();
    })
    $(".mask_black").click(function () {
        $(".mask_black").hide();
        $(".mb_rule_box").hide();
    })


    // 点击我的奖品
    $(".mb_myprize").click(function () {
        $(".mask_black").show();
        $(".mb_prize_box").show();
    })
    $(".mask_black").click(function () {
        $(".mask_black").hide();
        $(".mb_prize_box").hide();
    })



     $(".mb_btn_help").click(function(e){
         e.stopPropagation();
         $(".mask_share").fadeIn();
     });

     $(document).click(function(){
         $(".mask_share").fadeOut();
     })
})