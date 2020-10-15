/* 一、基本功能
添加商品到购物车
移出购物车中的商品
选中某个商品，动态更新结算价格
商品数量的增加与减少
全选、反选，动态更新结算价格
 */

window.onload = function() {
    var aData = [{
            "imgUrl": "img/03-car-01.png",
            "proName": " 小米手环4 NFC版 ",
            "proPrice": "229",
            "proComm": "1"
        },
        {
            "imgUrl": "img/03-car-02.png",
            "proName": " Redmi AirDots真无线蓝牙耳机 ",
            "proPrice": "99.9",
            "proComm": "9.7"
        },
        {
            "imgUrl": "img/03-car-03.png",
            "proName": " 米家蓝牙温湿度计 ",
            "proPrice": "65",
            "proComm": "1.3"
        },
        {
            "imgUrl": "img/03-car-04.png",
            "proName": " 小米小爱智能闹钟 ",
            "proPrice": "149",
            "proComm": "1.1"
        },
        {
            "imgUrl": "img/03-car-05.png",
            "proName": "米家电子温湿度计Pro  ",
            "proPrice": "750",
            "proComm": "0.3"
        },
        {
            "imgUrl": "img/03-car-06.png",
            "proName": " 小米手环3 NFC版 Pro  ",
            "proPrice": "199",
            "proComm": "3.3"
        },
        {
            "imgUrl": "img/03-car-07.png",
            "proName": " 小米手环3 / 4 通用腕带",
            "proPrice": "19.9",
            "proComm": "1.2"
        },
        {
            "imgUrl": "img/03-car-08.png",
            "proName": "  米家温湿度传感器 ",
            "proPrice": "45",
            "proComm": "0.6"
        },
        {
            "imgUrl": "img/03-car-09.png",
            "proName": "  米家电子温湿度计Pro 3个装  ",
            "proPrice": "207",
            "proComm": "0.3"
        },
        {
            "imgUrl": "img/03-car-10.png",
            "proName": " 小米手环3 ",
            "proPrice": "199",
            "proComm": "7.2"
        }
    ];
    var oBox = document.getElementById("box");//商品列表所在的div
    var oUl = document.getElementsByTagName("ul")[0];//商品列表所在的ul
    //遍历所有商品
    for (var i = 0; i < aData.length; i++) {
        var oLi = document.createElement("li");
        var data = aData[i];
        oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
        oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>';
        oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
        oUl.appendChild(oLi);

    }







