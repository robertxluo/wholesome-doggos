import { Component, OnInit } from '@angular/core';
import { FetchDoggoService } from './fetch-doggo.service';
import { Doggo } from '../models/doggo';

@Component({
  selector: 'app-button-layout',
  templateUrl: './button-layout.component.html',
  styleUrls: ['./button-layout.component.css']
})
export class ButtonLayoutComponent implements OnInit {
  dogData: Doggo;
  errorStatus = false;

  constructor(private fetchDoggoService: FetchDoggoService) {}

  ngOnInit() {}

  generateDog() {
    this.fetchDoggoService.getDoggos().subscribe(
      data => {
        this.dogData = data;
        this.errorStatus = false;
      },
      error => this.onError(error)
    );
  }

  onError(error) {
    this.errorStatus = true;
    this.dogData.message = '../../assets/corgi.jpg';
  }
}
