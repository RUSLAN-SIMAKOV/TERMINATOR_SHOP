import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html'
  })

export class ProductListComponent {
  productList: string = 'Product List!';
  product: string = 'Product';
  code: string = 'Code';
  available: string =  'Available';
  price: string =  'Price';
  fiveStarRating: string = '5 star rating';
  products: any[] = [
    {
      "productId": 1,
      "productName" : "T1",
      "productCode" : "JE73OH90",
      "availabilty" : false,
      "price" : 49999,
      "starRating" : 2.9,
      "imageUrl" : "./assets/images/t1.jpg"
    },
    {
      "productId" : 2,
      "productName" : "T70",
      "productCode" : "JE91OH50",
      "availabilty" : false,
      "price" : 59999,
      "starRating" : 2.8,
      "imageUrl" : "./assets/images/t70.jpg"
    },
    {
      "productId" : 3,
      "productName" : "T600",
      "productCode" : "JE933H40",
      "availabilty" : true,
      "price" : 69999,
      "starRating" : 3.1,
      "imageUrl" : "./assets/images/t600.jpg"
    },
    {
      "productId" : 4,
      "productName" : "T800",
      "productCode" : "JE118H10",
      "availabilty" : true,
      "price" : 79999,
      "starRating" : 4.2,
      "imageUrl" : "./assets/images/t800.jpg"
    },
    {
      "productId" : 5,
      "productName" : "T1000",
      "productCode" : "JE66OH60",
      "availabilty" : false,
      "price" : 89999,
      "starRating" : 4.6,
      "imageUrl" : "./assets/images/t1000.jpg"
    },
    {
      "productId" : 6,
      "productName" : "TX",
      "productCode" : "JE13OH90",
      "availabilty" : true,
      "price" : 99999,
      "starRating" : 4.8,
      "imageUrl" : "./assets/images/tx.jpg"
    }
    ];
}
