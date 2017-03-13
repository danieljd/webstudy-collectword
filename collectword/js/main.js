/**
 * Created by yuejd on 2017/3/6.
 */
function start() {


    var oul =document.getElementsByTagName("ul")[0];
    var oli =oul.getElementsByTagName("li");
    var index=0;
    var total=oli.length;
    var final_index=Math.floor(Math.random()*total);
    var r_quick,r_slow,rotate_slow;
    rotate(r_quick,total,100);
    rotate(r_slow,total*2,200);

    // if(final_index==0){
    //     rotate(rotate_slow,total*2-1,300);
    // }else{
    //     rotate(rotate_slow,total*2+final_index,300);
    // }

    function rotate(name,stop_index,interval) {
        var name=setInterval(function () {
            if(index<=stop_index){
                console.log(stop_index);
                for(var n=0;n<9;n++){
                    oli[n].setAttribute("class","");
                }
                oli[index%total].setAttribute("class","current");
                index++;
            }
            else{
                clearInterval(name);
            }
        },interval)
    }


}