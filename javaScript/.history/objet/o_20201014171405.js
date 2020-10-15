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


// Mon panier
const cart = {
    listeProduits: [],
    getTotalPrice(){
      for(  ){}
      return 0;
    },
    getTotalQtt(){
        
      return 0;
    },
    addProduct(product){
      let indexProductExist = this.getIndexProductExist(product);
      //假如产品已经存在于购物车，则不会另起一行，而是直接改变已存在的数量
      if(indexProductExist == -1){
        //Ajout d'un nouveau produit
        this.listeProduits.push(product)
      } else {
        this.listeProduits[indexProductExist].quantity += product.quantity
      }
    },

    //查看produit是否已经在购物车中存在  让P在购物车产品清单中依次比对，假如莫个
    
    getIndexProductExist(product){
        
      let indexPExist = -1;
      for(let p in this.listeProduits){
        if(this.listeProduits[p].id == product.id) {
          indexPExist = p;
        }
      }
      return indexPExist;
    },
    toString(){
      console.log(this);
    }
  };


  let currentCard = localStorage.getItem('cart');
  console.log(JSON.parse(currentCard));


