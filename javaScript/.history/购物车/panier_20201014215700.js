背景：

       行业内企业应用，购物车不需要保存到服务器，关闭浏览器就清空购物车。

一、API：

子功能	js方法	参数及示例
单个商品加入购物车	myCart.addGood	good：
{id:1, num:2, type: 1 }
商品批量加入购物车	myCart.addGoods	goods：
[{"id":"1","num":1,"type":1},
{"id":"2","num":"2","type":1}]
删除单个商品	myCart.remove	goodId：
1
批量删除商品	myCart.removeGoods	goodIds：
[1,3,4]
清空购物车	myCart.removeAll
增减购物车某个商品的数量	myCart.addGoodNum 	goodId=1, num=1或goodId=1, num=-2
修改购物车某个商品的数量	myCart.modifyGoodNum 	goodId=1, num=8
查询购物车中某个商品的数量	myCart.getGoodNum	goodId=1
查询购物车商品列表	myCart.getGoodList	 
查询购物车商品ID列表	myCart.getGoodIdList	 



var myCart = {};
var myStorage = localStorage;
/* id: good dh; num: good number;  type: selfuse, jtuse, person  */
var good = {id:1, num:2, type: 1 };
var goods = [];
 
/**
 * judge id whether exists in cartArray 
 * @param objArray
 * @param key  id's key  eg:id
 * @param value  id's value  eg:123
 * return true: cartArray contains id key, false: not contains id key
 */
function containsKeyInArray( objArray, idkey, idvalue ){
	console.log( "containsKeyInArray: "+JSON.stringify(objArray) )
	for(var i = 0; i < objArray.length; i++) {
// 		var tempObj = objArray[i];
		if( objArray[i][idkey] == idvalue)
			return true;
    }
	return false;
};
 
/**
 * plus cart's good number which exists in cart
 * @param objArray
 * @param good  id's key  eg:id
 * @param idkey  id's value  eg:123
 * @param numkey  id's value  eg:123
 */
function plusGoodNum2Array(objArray, good, idkey, numkey){
	//
	for(var i = 0; i < objArray.length; i++) {
// 		var tempObj = objArray[i];
		if( objArray[i][idkey] == good[idkey] )
			objArray[i][numkey] = Number(objArray[i][numkey]) + Number(good[numkey]);
    }
	return false;
 
};
/** 
 * add single good to cart
 * @param good good Object 
 */
myCart.addGood = function( good ){
	console.log( "myCart.addGood: "+JSON.stringify(good) );
	var cartArray = myStorage.cart?JSON.parse( myStorage.getItem("cart") ) : [];
// 	if( undefined == myStorage.cart || null == myStorage.cart );
// 	if( myStorage.cart ){//exist cart attribute , with cart item
	if( cartArray.length != 0 ){//exist cart attribute , with cart item
		if( !containsKeyInArray( cartArray, "id", good["id"] ) ){
			cartArray.push(good);
		}else{
			plusGoodNum2Array(cartArray, good,"id","num");
		}
		
	}else{//not exist cart attribute, no cart item
		cartArray.push(good);
	}
	myStorage.setItem("cart", JSON.stringify(cartArray) ); //convert cartArray to string storage in localStorage
};
 
/**
 * good's count plus some number, minus pass negative number<br>
 * js judge, when num =1, can't minus any more.<br>
 * use page: + - operate in cart page
 * @return good's new number
 */
myCart.addGoodNum = function(goodId, num){
	console.log( "myCart.addGoodNum: goodId="+goodId+",num="+num );
	var cartArray = myStorage.cart?JSON.parse( myStorage.getItem("cart") ) : [];
// 	if( undefined == myStorage.cart || null == myStorage.cart );
// 	if( myStorage.cart ){//exist cart attribute , with cart item
	if( cartArray.length != 0 ){//exist cart attribute , with cart item
		for(var i = 0; i < cartArray.length; i++) {
			if( cartArray[i]["id"] == goodId ){
				cartArray[i]["num"] = Number(cartArray[i]["num"]) + Number( num );
				break;
			}
	    }
	}
	myStorage.setItem("cart", JSON.stringify(cartArray) ); //convert cartArray to string storage in localStorage
	return cartArray[i]["num"];
};
 
/** 
 * add multiply good to cart
 * with problem , wait for solve ........
 * @param good goods Object Array
 */
myCart.addGoods = function( goods ){
	console.log("myCart.addGoods: "+ JSON.stringify(goods) );
	console.log("myCart.addGoods:  goods.length="+  goods.length );
	var cartArray = myStorage.cart?JSON.parse( myStorage.getItem("cart") ) : [];
	try {
		
		for(var i = 0; i < goods.length; i++) {
	// 		myCart.addGood( goods[i] );
			console.log("myCart.addGoods: i="+ i );
			if( cartArray.length != 0 ){//exist cart attribute , with cart item
				console.log("myCart.addGoods: i="+ i );
				if( !containsKeyInArray( cartArray, "id",  goods[i]["id"] ) ){
					cartArray.push( goods[i]);
				}else{
					console.log("myCart.addGoods: i="+ i );
					plusGoodNum2Array(cartArray,  goods[i],"id","num");
					console.log("myCart.addGoods: i="+ i );
				}
			}else{//not exist cart attribute, no cart item
				cartArray.push( goods[i]);
			}
			console.log("myCart.addGoods: cartArray="+ JSON.stringify(cartArray) );
			console.log("myCart.addGoods: goods="+ JSON.stringify(goods)+",goods.length:"+goods.length+",i:"+i );
	    }
	
	}
	catch(err) {
	    document.getElementById("error").innerHTML = err.message;
	}
	
	myStorage.setItem("cart", JSON.stringify(cartArray) ); //convert cartArray to string storage in localStorage
};
/**
 * remove a good from cart
 */
myCart.remove = function(goodId){
	console.log("myCart.remove: "+ goodId);
	var cartArray = myStorage.cart ? JSON.parse( myStorage.getItem("cart") ) : [];
	if( cartArray.length != 0  ){//exist cart attribute , with cart item.  && containsKeyInArray( cartArray, "id", goodId )
		console.log("myCart.remove: cartArray.length != 0 && containsKeyInArray( cart, \"id\", goodId ) is true");
		console.log("myCart.remove: cartArray.length:"+cartArray.length);
		for(var i = 0; i < cartArray.length; i++) {
			if( cartArray[i]["id"] == goodId ){
				cartArray.splice(i, 1);
				myStorage.setItem("cart", JSON.stringify(cartArray) ); //convert cartArray to string storage in localStorage
				break;
			}
	    }
	}
	console.log("myCart.remove: cartArray.length != 0 && containsKeyInArray( cart, \"id\", goodId ) is false. like " +(cartArray.length != 0) + "&&"+ (containsKeyInArray( cart, "id", goodId )));
};
/**
 * remove multiply goods from cart
 */
myCart.removeGoods = function(goodIds){
	console.log("myCart.removeGoods: "+ JSON.stringify(goodIds) );
	var cartArray = myStorage.cart ? JSON.parse( myStorage.getItem("cart") ) : [];
	var removeflag = 0;
	if( cartArray.length != 0 ){//exist cart attribute , with cart item
		for(var i = 0; i < goodIds.length; i++) {
			console.log("myCart.removeGoods: "+ i);
// 			myCart.remove( goodIds[i] );
			for(var j = 0; j < cartArray.length; j++) {
				if( cartArray[j]["id"] == goodIds[i] ){
					cartArray.splice(j, 1);
					removeflag ++;
					break;
				}
		    }
	    }
		myStorage.setItem("cart", JSON.stringify(cartArray) ); //convert cartArray to string storage in localStorage
	}
};
/**
 * clear cart
 */
myCart.removeAll = function(){
	myStorage.removeItem("cart");
};
 
/* set good's num */
myCart.modifyGoodNum = function(goodId, num )
{
   	var cartArray = myStorage.cart ? JSON.parse( myStorage.getItem("cart") ) : [];
   	for(var i = 0; i < cartArray.length; i++) {
   		if( cartArray[i]["id"] == goodId )
   			cartArray[i]["num"]= Number(num);
       }
   	myStorage.setItem("cart", JSON.stringify(cartArray) );
   	
};
/* get good's num */
myCart.getGoodNum = function( goodId )
{
   	var cartArray = myStorage.cart ? JSON.parse( myStorage.getItem("cart") ) : [];
   	for(var i = 0; i < cartArray.length; i++) {
   		if( cartArray[i]["id"] == goodId )
   			return cartArray[i]["num"];
    }
   	return 0;
};
/* get good list  */
myCart.getGoodList = function( )
{
   	return myStorage.cart ? myStorage.getItem("cart") : "";
};
/* get good id list  */
myCart.getGoodIdList = function( )
{
	var cartArray = myStorage.cart ? JSON.parse( myStorage.getItem("cart") ) : [];
	var goodIdList = cartArray.map(function(v){return v.id;});
	return goodIdList;
};
/**
 * find other attribute's value by primary key id
 * @param objArray
 * @param key  id's key  eg:id
 * @param numKey  target value's key  eg:8
 * return target value
 */
function getAttrValueByKey( objArray, idkey,idvalue, attrName ){
	console.log( "getAttrValueByKey: "+JSON.stringify(objArray) )
	for(var i = 0; i < objArray.length; i++) {
// 		var tempObj = objArray[i];
		if( objArray[i][idkey] == idvalue)
			return objArray[i][attrName];
    }
	return "";
};
 
 
function refreshTextarea(){
	//refresh cart data
	$('#cart').val(myStorage.cart ? myStorage.getItem("cart").replace(/\}\,\{/g, decodeURI("},\n{")) : "");
	
	var goodIdList = myCart.getGoodIdList();
	//refresh goodIdList data
	$('#goodIdList').val( goodIdList );
};
 
 
function add2Storage(){
	myCart.addGood({'id':$('#addspid').val(), 'num': Number($('#spnum').val()),'type':1 } );  
	refreshTextarea();
};
function batchAdd2Cart(){
	console.log("batchAdd2Cart: "+ JSON.stringify( JSON.parse($('#goods').val()) ) );
	myCart.addGoods( JSON.parse($('#goods').val()) ); 
	refreshTextarea();
};
 
function batchRemoveCart(){
	console.log("batchRemoveCart: "+ JSON.stringify($('#removespidlist').val().split(',')) );
	myCart.removeGoods( $('#removespidlist').val().split(',') ); 
	refreshTextarea();
};
/* good id key enter event */
function enterKeyDown(event)
{
    if(event.keyCode==13)
    {
//     	var cartArray = myStorage.cart ? JSON.parse( myStorage.getItem("cart") ) : [];
//     	var num = getAttrValueByKey( cartArray, "id", $('#plusGoodId').val(), "num" );
    	var num = myCart.getGoodNum($('#plusGoodId').val());
    	console.log("num:"+num);
    	$('#goodNum').val( num );
	}
};
/* good number key enter event */
function enterKeyDown2(event, obj )
{
    if(event.keyCode==13)
    {
    	myCart.modifyGoodNum($('#plusGoodId').val(), Number(obj.value) );
    	refreshTextarea();
	}
};
/* good number input change event */
function goodNumChange( obj )
{
   	myCart.modifyGoodNum($('#plusGoodId').val(), Number(obj.value) );
   	refreshTextarea();
};