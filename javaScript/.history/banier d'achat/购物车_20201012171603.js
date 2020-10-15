/* 一、基本功能
添加商品到购物车
移出购物车中的商品
选中某个商品，动态更新结算价格
商品数量的增加与减少
全选、反选，动态更新结算价格
 */

/* 第一步：首先是进行html页面的设计，我用一个大的div(id=box)将所有商品包
含，商品列表中我用了ul li实现，接着采用克隆的方式，显示所有商品列表，具
体实现代码如下 */
window.onload = function () {
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
        var oBox = document.getElementById("box"); //商品列表所在的div
        var oUl = document.getElementsByTagName("ul")[0]; //商品列表所在的ul
        var oCar = document.getElementById("car");
        //遍历所有商品
        for (let i = 0; i < aData.length; i++) {
            let oLi = document.createElement("li");
            let data = aData[i];
            oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
            oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
            oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
            oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>';
            oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
            oUl.appendChild(oLi);

        }

     /*     第二步：给添加购物车按钮添加事件
               getclass(所在块，"类名称")
               根据class获取元素.
               原理是，取出"所在块"下的所有元素，组成数组，然后遍历类名，全等判断。
               代码解释：

        function getClass(oParent,clsName){
            var boxArr = new Array();
            //boxArr 用来存储获取到的所有class为clsName的元素
        */

        let aBtn = getClass(oBox, "add_btn"); //获取box下的所有添加购物车按钮
        var number = 0; //初始化商品数量
        for (var i = 0; i < aBtn.length; i++) {
            number++;
            aBtn[i].index = i;
            aBtn[i].onclick = function () {
                var oDiv = document.createElement("div");
                var data = aData[this.index];
                oDiv.className = "row hid";
                oDiv.innerHTML += '<div class="check left"> <i class="i_check" id="i_check" onclick="i_check()" >√</i></div>';
                oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
                oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
                oDiv.innerHTML += '<div class="price left"><span>' + data["proPrice"] + '元</span></div>';
                oDiv.innerHTML += ' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
                oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
                oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;">×</a></div>';
                oCar.appendChild(oDiv);
            }
        }

        第三步： 给商品数量的增加减少的按钮添加事件

        //获取所有的数量加号按钮
        let i_btn = document.getElementsByClassName("count_i");
        for (var k = 0; k < i_btn.length; k++) {
            i_btn[k].onclick = function () {
                bt = this;
                //获取小计节点
                at = this.parentElement.parentElement.nextElementSibling;
                //获取单价节点
                pt = this.parentElement.parentElement.previousElementSibling;
                //获取数量值
                node = bt.parentNode.childNodes[1];
                console.log(node);
                num = node.innerText;
                num = parseInt(num); //parseInt() 函数可解析一个字符串，并返回一个整数。
                num++;
                node.innerText = num;
                //获取单价
                price = pt.innerText;
                price = price.substring(0, price.length - 1);//substring(开始处字符号, 结束处字符号) 方法用于提取字符串中介于两个指定下标之间的字符。别忘了字符号从0开始，方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。
                //计算小计值
                at.innerText = price * num + "元";
                //计算总计值
                getAmount();
            }
        }
        //获取所有的数量减号按钮
        var d_btn = document.getElementsByClassName("count_d");
        for (k = 0; k < i_btn.length; k++) {
            d_btn[k].onclick = function () {
                bt = this;
                //获取小计节点
                at = this.parentElement.parentElement.nextElementSibling;
                //获取单价节点
                pt = this.parentElement.parentElement.previousElementSibling;
                //获取c_num节点
                node = bt.parentNode.childNodes[1];
                num = node.innerText;
                num = parseInt(num);
                if (num > 1) {
                    num--;
                }
                node.innerText = num;
                //获取单价
                price = pt.innerText;
                price = price.substring(0, price.length - 1);
                //计算小计值     
                at.innerText = price * num + "元";
                //计算总计值
                getAmount();
            }
        }