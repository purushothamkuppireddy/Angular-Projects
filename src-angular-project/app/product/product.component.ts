import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


class Product{
id:number
productCategories:String
productName:String
price:number
quantity:number

constructor(id:number,productCategories:String,productName:String,price:number,quantity:number){
  this.id=id
  this.productCategories=productCategories
  this.productName=productName
  this.price=price
  this.quantity=quantity
}
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[]=[]
product:Product
isUpdate:boolean=false
index:number
  constructor(private svc:ProductService) { }

  ngOnInit() {
 this.svc.client().subscribe(
  (response) => {
    console.log(response)
    this.products = response;
    console.log(this.products);
  },
  (error) => { console.log("Not responding") }
)
}
 add(value: any) {
  this.products.push(new Product(value.id, value.productCategories, value.productName, value.price, value.quantity));
}

deleteProduct(i: number) {
  this.products.splice(i, 1)
}
updateProduct1(i:number,prod:Product) {
  this.isUpdate=true
  this.index=i;
  // this.book=this.books[i]
  this.product=prod;
 
  console.log(i)
  
}


updateProduct2(value:any) {
  this.isUpdate=false
  this.products.splice(this.index,1,new Product(this.product.id, value.productCategories, value.productName, value.price,value.quantity))
  
}

sor(i: any) {
  console.log(i)
  switch (i) {
    case 1:
      this.products.sort( (obj1, obj2)=> obj1.id - obj2.id
        // Ascending: first age less than the previous
        
      );
      break;
    case 2:
      this.products.sort(function (a, b) {
        var nameA = a.productCategories.toUpperCase(); // ignore upper and lowercase
        var nameB = b.productCategories.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      break;
      case 3:
      this.products.sort(function (a, b) {
        var nameA = a.productName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.productName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      break;
    case 4:
      this.products.sort(function (obj1, obj2) {
        // Ascending: first age less than the previous
        return obj1.price - obj2.price;
      });
      break;
    
    case 5:
      this.products.sort(function (obj1, obj2) {
        // Ascending: first age less than the previous
        return obj1.quantity - obj2.quantity;
      });
      break;
    

  }

}


  }


