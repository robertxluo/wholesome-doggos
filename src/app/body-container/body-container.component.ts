import { Component, OnInit } from '@angular/core';
import { Doggo } from '../models/doggo';
import { FetchDoggoService } from './fetch-doggo.service';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {
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
