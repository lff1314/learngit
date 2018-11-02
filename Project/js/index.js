//这里是轮播图的，div由于没有高度，给他动态设置的高度
var imgHeight=$("#slide1").outerHeight();
$(".slide-show").height(imgHeight);
var snHeight=$(".sn").outerHeight();
$(".slide-new").height(snHeight);

var index=0;
var i=0;
$(".sub").eq(index).addClass("active");
$(".sub").click(function () {
    index=$(this).index()-1;
    $(this).addClass("active").siblings().removeClass("active");
    $(".slide-img").eq(index).fadeIn().siblings(".slide-img").fadeOut();
    clearInterval(time);
    time=setInterval(slide, 3000);
});

$(".right-but").click(function () {
    //点击右边的按钮，图片变成index++，并且吧其他的div给隐藏
    if(index==2){
        index=0;
    }else{
        index++;
    }
    $(".slide-img").eq(index).fadeIn().siblings(".slide-img").fadeOut();
    $(".sub").eq(index).addClass("active").siblings().removeClass("active");
    //设置轮播的，点击重置时间间隔
    clearInterval(time);
    time=setInterval(slide, 3000);
});

$(".left-but").click(function () {
    if(index==0){
        index=2
    }else{
        index--;
    }
    $(".slide-img").eq(index).fadeIn().siblings(".slide-img").fadeOut();
    //这边是轮播图角标的移动
    $(".sub").eq(index).addClass("active").siblings().removeClass("active");
    clearInterval(time);
    time=setInterval(slide, 3000);
});
//这个是setInterval方法，其实就是向右的一种复制
var slide=function () {
    if(index==2){
        index=0;
    }else{
        index++;
    }
    $(".slide-img").eq(index).fadeIn().siblings(".slide-img").fadeOut();
    $(".sub").eq(index).addClass("active").siblings().removeClass("active");
};
//这是执行setInterval
var time=setInterval(slide,3000);
//这是底下的小轮播
setInterval(function () {
    if(i==1){
        i=0;
    }else{
        i++
    }
    console.log($(".sn").length);
    $(".sn").eq(i).fadeIn().siblings(".sn").fadeOut();
},3000);

//二维码的显示与关闭
$(".code img").click(function () {
    $(".code").fadeOut();
});

//九宫格加强版
//这里我总是感觉逻辑不对
var gua;
$(".ex-img").click(function () {
    gua=$(this).index();
    if($(this).hasClass("gameActive")){
        $(this).removeClass("gameActive");
        $(this).siblings(".ex-img").fadeIn();
    }else{
        if(gua==4){
            $(".ex-img").eq(4).addClass("gameActive").siblings().hide(0);
            $(".ex-img").eq(4).find("img").addClass("gameActive");
            $(".ex-img").eq(4).find(".more-game").remove();
        }
        $(this).stop().addClass("gameActive").siblings().hide(0);
    }
});

$(".more-game a").click(function (event) {
    event.stopPropagation();
});

$(".ex-img").mouseleave(function () {
    gua=$(this).index();
    if(gua==4){
        $(".ex-img").eq(4).find("img").removeClass("gameActive");
        $(".ex-img").eq(4).append(' <div class="more-game" ' +
            'style="position: absolute">\n'+"<a href='#'>更多游戏</a>"
            + '<p class="more">More</p>\n' + '</div>');
    }
    $(this).removeClass("gameActive");
    $(this).stop().siblings(".ex-img").fadeIn();
});

var y=0;
$(".work-img").mouseenter(function () {
    y=$(this).index();
    if(y==0){
        $(".www").eq(y).attr("src","image/bigCulture.png");
    }else if(y==1){
        $(".www").eq(y).attr("src","image/bigCulture2.png");
    }else{
        $(".www").eq(2).attr({"src":"image/big.png"})
        $(".work-img").eq(2).css("margin-top","0");
    }
    $(this).find(".www").css("width","1264px").css("height","515px");
    $(this).css("width","1264px").siblings().hide();
});

$(".work-img").mouseout(function () {
    y=$(this).index();
    if(y==0){
        $(".www").eq(y).attr("src","image/culture.png").css("width","624px");
        $(this).eq(y).css("width","624px").siblings().show();
    }
    else if(y==1){
        $(".www").eq(y).attr("src","image/culture3.png").css("width","614px").css("height","240px");
        $(this).css("width","614px").siblings().show();
    }
    else{
        $(".www").eq(2).attr("src","image/culture2.png").css("width","614px").css("height","240px");
        $(this).css({"width":"614px","margin-top":"30px"}).siblings().show();
    }
});