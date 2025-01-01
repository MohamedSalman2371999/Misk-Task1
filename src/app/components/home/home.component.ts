import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly _ToastrService = inject(ToastrService)
  productImages: string[] = [
    './assets/images/image-product-1.jpg',
    './assets/images/image-product-2.jpg',
    './assets/images/image-product-3.jpg',
    './assets/images/image-product-4.jpg',
  ];
  selectedImage: string = this.productImages[0];
  imgNum: number = 0
  selectedImageIndex: number = 0;
  selectedImageIndexmodel: number = 0;
  selectedImageModel: string = this.productImages[0];
  imgNumModel: number = 0
  addCartNum: number = 0
  quantity: number = 0;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
    this.selectedImageIndexmodel = index;
    this.selectedImage = this.productImages[index];
    this.selectedImageModel = this.productImages[index];
  }
  selectImageModel(index: number): void {
    this.selectedImageIndexmodel = index;
    this.selectedImageModel = this.productImages[index];
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart(): void {
    this.addCartNum = this.quantity
    if (this.addCartNum!==0) {
      this._ToastrService.success("Add Success")
    }else{
      this._ToastrService.error("You must add at least one item")
    }
    console.log(`Added ${this.addCartNum} items to the cart.`);
  }

  next(): void {
    this.imgNum = this.imgNum + 1
    if (this.imgNum > 0 && this.imgNum < this.productImages.length - 1) {
      this.selectedImage = this.productImages[this.imgNum];
    } else {
      this.imgNum = this.productImages.length - 1
      this.selectedImage = this.productImages[this.imgNum];
      console.log(this.imgNum);
    }
  }
  prev(): void {
    this.imgNum = this.imgNum - 1
    this.selectedImage = this.productImages[this.imgNum];
    if (this.imgNum < 0) {
      this.imgNum = 0
      this.selectedImage = this.productImages[this.imgNum];
    }
  }
  prevModel(): void {
    this.imgNumModel = this.imgNumModel - 1
    this.selectedImageModel = this.productImages[this.imgNumModel];
    if (this.imgNumModel < 0) {
      this.imgNumModel = 0
      this.selectedImageModel = this.productImages[this.imgNumModel];
    }
  }
  nextModel(): void {
    this.imgNumModel = this.imgNumModel + 1
    if (this.imgNumModel > 0 && this.imgNumModel < this.productImages.length - 1) {
      this.selectedImageModel = this.productImages[this.imgNumModel];
    } else {
      this.imgNumModel = this.productImages.length - 1
      this.selectedImageModel = this.productImages[this.imgNumModel];
      console.log(this.imgNumModel);
    }

  }
}
