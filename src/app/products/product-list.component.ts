import {Component} from "@angular/core";
import {IProducts} from "../shared/interfaces";

@Component({
  selector: "app-products",
  templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
  productList: string = "Product List!";
  product: string = "Product";
  code: string = "Code";
  available: string = "Available";
  price: string = "Price";
  fiveStarRating: string = "5 star rating";
  isVisible: boolean = true;
  currencyCode: string = "EUR";
  filteredProducts: any[] = [];
  products: IProducts[] = [
    {
      productId: 1,
      productName: "T1",
      productCode: "JE73OH90",
      availability: false,
      price: 49999,
      starRating: 2.9,
      imageUrl: "assets/images/t1.jpg"
    },
    {
      productId: 2,
      productName: "T70",
      productCode: "JE91OH50",
      availability: false,
      price: 59999,
      starRating: 2.8,
      imageUrl: "assets/images/t70.jpg"
    },
    {
      productId: 3,
      productName: "T600",
      productCode: "JE933H40",
      availability: true,
      price: 69999,
      starRating: 3.1,
      imageUrl: "assets/images/t600.jpg"
    },
    {
      productId: 4,
      productName: "T800",
      productCode: "JE118H10",
      availability: true,
      price: 79999,
      starRating: 4.2,
      imageUrl: "assets/images/t800.jpg"
    },
    {
      productId: 5,
      productName: "T1000",
      productCode: "JE66OH60",
      availability: false,
      price: 89999,
      starRating: 4.6,
      imageUrl: "assets/images/t1000.jpg"
    },
    {
      productId: 6,
      productName: "TX",
      productCode: "JE13OH90",
      availability: true,
      price: 99999,
      starRating: 4.8,
      imageUrl: "./assets/images/tx.jpeg"
    }
  ];


  changeVisibilityImages() {
    this.isVisible = !this.isVisible;
  }

  filter(data: string) {
    if (data) {
      this.filteredProducts = this.products.filter((prod: IProducts) => {
        return prod.productName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          prod.productCode.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          prod.productId.toString().indexOf(data) > -1 ||
          prod.price.toString().indexOf(data) > -1;
      });
    }
  }

  sort(prop: string) {
  }

}
