//==========================banner开始==================================================
{
    let imgs = document.querySelectorAll(".img_lunbo");
    let pages = document.querySelectorAll(".circle1");
    let banner = document.querySelector(".bottom_middle");
    let pre = document.querySelector(".ban_jiantouleft");
    let next = document.querySelector(".ban_jiantouright");
    console.log(imgs);
    console.log(pages);
    console.log(next,pre);
    console.log(banner);
    pages.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    })
    let t = setInterval(move, 3000);
    let n = 0;
    function move() {
        n++;
        if (n < 0) {
            n = imgs.length - 1;
        }
        if (n === imgs.length) {
            n = 0;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pages[n].classList.add("active");
        // n++;
    }

    banner.onmouseenter = function () {
        clearInterval(t);
    }
    banner.onmouseleave = function () {
       t=setInterval(move, 3000);
    }
    let flag=true;
    pre.onclick = function () {
        if(flag){
            flag=false;
            n -= 2;
            move();
        }
    }
    next.onclick = function () {
        if(flag){
            flag=false;
            move();
        }
    }
    imgs.forEach(function(ele){
        ele.addEventListener("transitionend",function(){
            flag=true;
        });
    });
}
//==========================侧条开始=====================================================
{
    let move=document.documentElement.scrollTop;
    let cetiao=document.querySelector(".cetiao");
    let cetiao_li=document.querySelectorAll(".cetiao_li");
    let con=document.querySelectorAll(".con");
    let totop=document.querySelector(".totop");
    // console.log(con);
    window.onscroll=function(){
        let move2=document.documentElement.scrollTop;
        if(move2>2440){
            cetiao.style.display="block";
        }else{
            cetiao.style.display="none";
        }
    }
    cetiao_li.forEach(function(ele,index){
        ele.onclick=function(){
            let con_top=con[index].offsetTop-50;
            let now=document.documentElement.scrollTop;
            let speed=(con_top-now)/10;
            let time=0;
            let t=setInterval(function(){
                time+=30;
                now+=speed;
                if(time===300){
                    clearInterval(t);
                }
                document.documentElement.scrollTop=now;
            },25)
        }
    })
    window.addEventListener("scroll",function(){
        let nav_scrtop=document.documentElement.scrollTop;
        for(let i=0;i<con.length; i++){
            if(nav_scrtop>con[i].offsetTop-50){
                for(let i=0; i<cetiao_li.length; i++){
                    cetiao_li[i].classList.remove("con_active");
                }
                cetiao_li[i].classList.add("con_active");
            }
        }
    })
    totop.onclick=function(){
        let initial=document.documentElement.scrollTop;
        let t=setInterval(function(){
            initial-=200;
            if(initial<0){
                initial=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=initial;
        },50)
    }
}
//=============================大聚会开始=================================================
{
    let left_slider=document.querySelector(".changfangfu");
    let right_slider=document.querySelector(".changfangfu_right");
    let innerbox=document.querySelector(".juhui_innerbox");
    let flag=true;
    let n=1;
    right_slider.onclick=function () {
        if(flag){
            n++;
            flag=false;
            innerbox.style.transition="all 0.6s";
            innerbox.style.marginLeft=-1000*n+"px";
        }
    }
   left_slider.onclick=function () {
        if(flag){
            n--;
            flag=false;
            innerbox.style.transition="all 0.6s";
            innerbox.style.marginLeft=-1000*n+"px";
        }
    }
    innerbox.addEventListener("transitionend",function () {
        flag=true;
        if(n===4){
            innerbox.style.transition="none";
            innerbox.style.marginLeft="-1000px";
            n=1;
        }
        if(n===0){
            innerbox.style.transition="none";
            innerbox.style.marginLeft="-3000px";
            n=3;
        }
    })
}