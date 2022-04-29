import { Component } from '@angular/core';
import { createProduct, Product } from 'src/app/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'witte thee',
      price: 2.99,
      photo:
        'https://static.ah.nl/static/product/AHI_43545239353836333035_3_LowRes_JPG.JPG?options=399,q85',
    },
    {
      id: 2,
      name: 'icetea',
      price: 1.75,
      photo:
        'https://static.ah.nl/static/product/AHI_43545239363435333033_2_LowRes_JPG.JPG?options=399,q85',
    },
    {
      id: 3,
      name: 'Bourbon',
      price: 19,
      photo:
        'https://static.ah.nl/static/product/AHI_43545237303337303435_1_LowRes_JPG.JPG?options=399,q85',
    },
  ];

  newProduct = createProduct();
  
  addProduct() {
    this.products.push(this.newProduct);
    this.newProduct = createProduct(); 
  }
}
