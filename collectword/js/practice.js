/**
 * Created by yuejd on 2017/3/2.
 */
function showpic(whichpic) {
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.childNodes[0].nodeValue=text;

}
function countBodyChildren() {
    var body_element=document.getElementsByTagName("body")[0];
    var count=body_element.childNodes;

    for(var i=0 ;i<count.length;i++){

        alert(count[i].nodeType);

    }

}
