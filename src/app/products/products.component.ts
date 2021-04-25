import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  fileDataUpload: any;
  uploadedFileName: any;
  dataSource: any;
  images: any;
  productName: string;
  productPrice: string;
  productDesc: string;
  obj: object;
  data: any;
  objArr = [];
  constructor() {}
  ngOnInit(): void {
    this.getDetails();
  }
  saveDetails() {
    this.obj = {
      name: this.productName,
      desc: this.productDesc,
      price: this.productPrice,
      dataSource: this.fileDataUpload,
    };
    this.objArr.push(this.obj);
    this.saveToStorage();
    this.getDetails();
    this.productName = null;
    this.productDesc = null;
    this.productPrice = null;
    this.fileDataUpload = null;
    this.obj = {};
  }

  fileInputClickedHandler(event): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadedFileName = file;
      reader.onload = (e) => {
        const fileData = reader.result;
        this.fileDataUpload = fileData;
      };
      reader.readAsDataURL(file);
    }
  }
  removeImg(i) {
    this.objArr.splice(i, 1);
    this.saveToStorage();
    this.getDetails();
  }
  saveToStorage() {
    localStorage.setItem('object', JSON.stringify(this.objArr));
  }
  getDetails() {
    this.data = JSON.parse(localStorage.getItem('object'));
  }
}
