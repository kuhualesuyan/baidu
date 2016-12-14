/**
 * Created by Administrator on 2016/12/13.
 */
//  input输入量的获取焦点和失去焦点
var shuru = document.getElementById("shuru");
shuru.onfocus = function () {
  shuru.style.border = "1px solid #38f";
}
shuru.onblur = function () {
  shuru.style.border = "1px solid #b6b6b6";
}

var photo = document.getElementById('photo');
photo.onmouseover = function () {
  photo.src = 'img/index/newcamera.png';
}
photo.onmouseout = function () {
  photo.src = 'img/index/photo.jpg';
}

//鼠标事件
$(document).ready(function(){
  $('#gdcp').mouseenter(function(){
    $("#right_div").show();
  })
  $('#right_div').mouseleave(function(){
    $('#right_div').hide();
  })
})

//设置
var shezhi = document.getElementById("shezhi");
var sousuoul = document.getElementById("sousuo_ul");
shezhi.onmouseover = function(){
  sousuoul.style.display = "block";
}
sousuoul.onmouseout = function(){
  sousuoul.style.display = "none";
}