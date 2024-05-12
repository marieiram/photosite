//スクロールでthemeName変更

$(function(){

$(window).scroll(function(){

//themeごとの高さを取得
const ptownscape = $('#townscape').offset().top;
const ppeople = $('#people').offset().top;
const pseaside = $('#seaside').offset().top;
const pbranch = $('#branch').offset().top;
const plandscape = $('#landscape').offset().top;
const pline = $('#line').offset().top;
const pswitch = $('#switch').offset().top;
const pabout = $('#about').offset().top;
const pcontanct = $('#contact').offset().top;

var scroll = $(document).scrollTop();
console.log(scroll);
// console.log(ptownscape,ppeople,pseaside,pbranch,plandscape,pline,pswitch);

if(ppeople+300 > scroll && scroll >= ptownscape){
$("#changepoint").html("Townscape(12)");
} 
if(pseaside+300 > scroll && scroll >=  ppeople-300){
$("#changepoint").html("People(4)");
}
if(pbranch+300 > scroll && scroll >=  pseaside-300){
$("#changepoint").html("Seaside(9)");
}
if(plandscape+300 > scroll && scroll >=  pbranch-300){
$("#changepoint").html("Branch(6)");
}
if(pline+300 > scroll && scroll >=  plandscape-300){
$("#changepoint").html("Landscape(5)");
}
if(pswitch+300 > scroll && scroll >=  pline-300){
$("#changepoint").html("Line(2)");
}
if(pabout+300 > scroll && scroll >=  pswitch-300){
$("#changepoint").html("switch(5)");
}
if(scroll >=  pabout-300){
  $("#changepoint").html("");
  }
})
})


//カーソル四角
$(function(){
           //カーソル要素の指定
              var cursor=$("#cursor-r");
              
              //mousemoveイベントでカーソル要素を移動させる
              $(document).on("mousemove",function(e){
                //カーソルの座標位置を取得
              var x=e.clientX;
              var y=e.clientY;
                //カーソル要素のcssを書き換える用
              cursor.css({
              "opacity":"1",
              "top":y+"px",
              "left":x+"px"
              });
              });

              // let photographyTheme = document.getElementsByClassName("photographyTheme")
              let photographyThemeList = document.querySelectorAll("#imghover");
              let photographyLimgList = document.querySelectorAll("#limghover");
              

$(photographyThemeList).on({
              "mouseenter": function() {
                //activeクラス付与
                cursor.addClass("active");
              },
              "mouseleave": function() {
                cursor.removeClass("active");

              }
});
$(photographyLimgList).on({
              "mouseenter": function() {
                //activeクラス付与
                cursor.addClass("none");
              },
              "mouseleave": function() {
                cursor.removeClass("none");

              }
            });
});

//ホバー
// document.addEventListener ('DOMContentLoaded',function(){
// let photographyTheme = document.getElementsByClassName("photographyTheme")

// photographyTheme.addEventListener('mouseover',function(){
//               cursor.addClass("active")
//               console.log("notta")
// },false)


