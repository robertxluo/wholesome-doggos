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
  errorMessage: string;

  constructor(private fetchDoggoService: FetchDoggoService) {}

  ngOnInit() {}

  generateDog() {
    this.fetchDoggoService.getDoggos().subscribe(
      data => {
        this.dogData = data;
      },
      error => (this.errorMessage = error as any)
    );
  }
}
