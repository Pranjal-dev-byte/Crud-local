import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails() {
    this.data = JSON.parse(localStorage.getItem('object'));
  }
}
