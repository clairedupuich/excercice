//显示今天日期实时日期和时间

let maDate1 = Date();
console.log(maDate1);

//设置一个日期
let maDate = new Date();
maDate.getFullYear();
console.log(maDate);

//在下面的例子中，我们将日期对象设置为 5 天后的日期：
var myDate=new Date();
myDate.setDate(myDate.getDate()+5); 


//购物车的主要组成部件
const cart = {
    lsiteProduits:[],
    getTotalPrice(){
        return 0;
    },
    
    getTotalQtt(){
        return 0;
    },

    addProduct(product){
        this.lsiteProduits[product]
        this.lsiteProduits.push(product)
    },
   
    toString(){
        console.log(this);
    }

};