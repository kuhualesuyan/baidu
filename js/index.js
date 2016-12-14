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

//登录页
var dl = document.getElementById("dl");
var dianji_img = document.getElementById('dianji_img');
var opacity = document.getElementById("opacity_div");
var dl_div = document.getElementById("dl_div");
var erweima_div = document.getElementById("erweima_div");
dl.onclick = function(){
  dl_div.style.display = 'block';
  opacity.style.display = 'block';
}
dianji_img.onclick = function(){
  dl_div.style.display = 'none';
  opacity.style.display = 'none';
  erweima_div.style.display = 'none';
}

//登录页里边的内容
var user_dl = document.getElementById("user_dl");
var password_dl = document.getElementById("password_dl");
var user = document.getElementById('user');
var pwd = document.getElementById("pwd");
var user_img = document.getElementById("user_img");
var suo_img = document.getElementById("suo_img");
user.onfocus = function(){
  user_dl.style.border = '1px solid #38f';
  user_img.src = 'img/index/user1.png'
}
user.onblur = function(){
  user_dl.style.border = '1px solid #ddd';
  user_img.src = 'img/index/user.png'
}
pwd.onfocus = function(){
  password_dl.style.border = '1px solid #38f';
  suo_img.src = 'img/index/suo1.png'
}
pwd.onblur = function(){
  password_dl.style.border = '1px solid #ddd';
  suo_img.src = 'img/index/suo.png'
}

var saoma_img = document.getElementById('saoma_img');
var dianshi_img = document.getElementById("dianshi_img");
saoma_img.onclick = function(){
  saoma_img.src = 'img/index/dianshi.png';
  erweima_div.style.display = 'block';
  dl_div.style.display = 'none';
}
dianshi_img.onclick = function(){
  dianshi_img.src = 'img/index/saoma.png';
  erweima_div.style.display = 'none';
  dl_div.style.display = 'block';
}