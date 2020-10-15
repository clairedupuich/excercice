window.onload  = function () {
    var btnCar = document.querySelectorAll('.btnCar');


    // 载入所有存储在localStorage的数据
    loadAll();
    for (let i = 0; i < btnCar.length; i++) {
        btnCar[i].onclick = function () {
            var goods = document.getElementsByClassName('goods')[i].innerHTML;
            var price = document.getElementsByClassName('price')[i].innerHTML;
            localStorage.setItem(price, goods );
            loadAll();
        }
    }


    function loadAll(){
        var list = document.getElementById("list");
        if(localStorage.length>0){
            var result = "<table border='1'>";
            result += "<tr><th>商品</th><th>价格</th><th>操作</th></tr>";
            for(var i=0;i<localStorage.length;i++){
                var price = localStorage.key(i);
                var goods = localStorage.getItem(price);
                result += "<tr><td>"+price+"</td><td>"+goods+"</td>" +
                    "<td><a href='javascript:;' id='del'>X</a></td></tr>";
            }
            list.innerHTML = result ;
        }else{
            list.innerHTML = "购物车空空如也哦……";
        }

        // for循环删除购物车商品
        let del = document.querySelectorAll('#del');
        for (let i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                var val = del[i].parentNode.parentNode;
                var children1 = val.children[0].innerText;
                var children2 = val.children[1].innerText;
                localStorage.removeItem(children1);
                // localStorage.clear();
                loadAll();
            }
        }
    }

};