---
title: 制作国庆头像
layout: default
permalink: /avatar
---

<head>
  <style>
    body {
      font-size: 20px;
      text-align: center;
      margin: 0;
    }
    .header {
      color: #00a5f7;
      height: 3rem;
    }
    #cvs {
      display: none;
      margin: 0 auto;
    }

     #link {
      margin: 0 20px;
    }
    .canvas-container {
      margin: 0 auto;
    }
    .hide, #exportBtn {
      display: none;
    }
    .body {
      margin: 4rem auto 3rem;
      height: 10rem;
      width: 10rem;
      border: solid 1px #aaa;
      box-shadow: 0 0 5px #aaa;
      border-radius: 1rem;
      line-height: 10rem;
      position: relative;
    }
    #export {
      display: none;
      margin: 0 auto;
      width: 250px;
      height: 250px;
    }
    .footer {
      display: flex;
      justify-content: space-around;
    }
    button {
      font-size: 18px;
      color: #fff;
      padding: 0 30px;
      height: 2.3rem;
      background: #00a5f7;
      border: 0;
      border-radius: 5px;
    }
    h6{
    margin-top: 20px;
    color: #00a5f7;
    font-size: 14px;
    }

    h6 a{
        color: #00a5f7;
    }
  </style>
  
</head>
<body>
  <div class='body' id='uploadContainer'>
    <small id='uploadText'>上传头像</small>
    <input id='upload' type='file' onchange='viewer()' style='height: 10rem; width: 10rem; position: absolute; top: 0; left: 0; opacity: 0'>
  </div>
  <img id='export' alt='迎国庆换新颜' src='' />
  <canvas id='cvs'></canvas>
  <p id='tip' style='opacity: 0'>点击调整位置和大小</p>
  <div class='footer'>
    <button id='change' onClick='changeHat()' style='display: none;'>换个样式</button>
    <button id='exportBtn' onClick='exportFunc()'>生成头像</button>
  </div>
    <h6><a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU3MzA0MDE2OQ==#wechat_redirect" id="link">查看更多好用资源</a></h6>

    <h5></h5>
  <div style='display: none'>
    <img id='img' src='' alt='' />
    <img class='hide' id='hat0' crossorigin="anonymous" src='assets/img/avatar-style/hat0.png' />
    <img class='hide' id='hat1' crossorigin="anonymous" src='assets/img/avatar-style/hat1.png' />
    <img class='hide' id='hat2' crossorigin="anonymous" src='assets/img/avatar-style/hat2.png' />
    <img class='hide' id='hat3' crossorigin="anonymous" src='assets/img/avatar-style/hat3.png' />
    <img class='hide' id='hat4' crossorigin="anonymous" src='assets/img/avatar-style/hat0.png' />
    <img class='hide' id='hat5' crossorigin="anonymous" src='assets/img/avatar-style/hat1.png' />
    <img class='hide' id='hat6' crossorigin="anonymous" src='assets/img/avatar-style/hat2.png' />
    <img class='hide' id='hat7' crossorigin="anonymous" src='assets/img/avatar-style/hat3.png' />
    <img class='hide' id='hat8' crossorigin="anonymous" src='assets/img/avatar-style/hat0.png' />
  </div>

<script src="https://cdn.bootcss.com/fabric.js/2.0.0-rc.3/fabric.min.js"></script>
<script>
var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
var exportImage = document.getElementById("export");
var img = document.getElementById("img");
var hat = "hat6";
var canvasFabric;
var hatInstance;
var screenWidth = window.screen.width < 500 ? window.screen.width: 240;
function viewer() {
    var file = document.getElementById("upload").files[0];
    console.log(file);
    var reader = new FileReader;
    if (file) {
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            img.src = reader.result;
            img.onload = function() {
                img2Cvs(img)
            }
        }
    } else {
        img.src = ""
    }
}
function img2Cvs(img) {
    cvs.width = img.width;
    cvs.height = img.height;
    cvs.style.display = "block";
    canvasFabric = new fabric.Canvas("cvs", {
        width: screenWidth,
        height: screenWidth,
        backgroundImage: new fabric.Image(img, {
            scaleX: screenWidth / img.width,
            scaleY: screenWidth / img.height
        })
    });
    changeHat();
    document.getElementById("uploadContainer").style.display = "none";
    document.getElementById("uploadText").style.display = "none";
    document.getElementById("upload").style.display = "none";
    document.getElementById("change").style.display = "block";
    document.getElementById("exportBtn").style.display = "block";
    document.getElementById("tip").style.opacity = 1
}
function changeHat() {
    document.getElementById(hat).style.display = "none";
    var hats = document.getElementsByClassName("hide");
    hat = "hat" + ( + hat.replace("hat", "") + 1) % hats.length;
    var hatImage = document.getElementById(hat);
    hatImage.style.display = "block";
    if (hatInstance) {
        canvasFabric.remove(hatInstance)
    }
    hatInstance = new fabric.Image(hatImage, {
        top: 0,
        left: 0,
        scaleX: screenWidth / hatImage.width,
        scaleY: screenWidth / hatImage.height,
        cornerColor: "#0b3a42",
        cornerStrokeColor: "#fff",
        cornerStyle: "circle",
        transparentCorners: false,
        rotatingPointOffset: 30
    });
    hatInstance.setControlVisible("bl", false);
    hatInstance.setControlVisible("tr", false);
    hatInstance.setControlVisible("tl", false);
    hatInstance.setControlVisible("mr", false);
    hatInstance.setControlVisible("mt", false);
    canvasFabric.add(hatInstance)
}
function exportFunc() {

    document.getElementsByClassName("canvas-container")[0].style.display = "none";
    document.getElementById("exportBtn").style.display = "none";
    document.getElementById("tip").innerHTML = "长按图片保存或分享</br> 关注微信公众号：文科中的技术宅";
    document.getElementById("change").style.display = "none";
    cvs.style.display = "none";
    exportImage.style.display = "block";
    exportImage.src = canvasFabric.toDataURL({
        width: screenWidth,
        height: screenWidth
    })
}
</script>
</body>


