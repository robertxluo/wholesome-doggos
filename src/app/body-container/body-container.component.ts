import { Component, OnInit, Input } from '@angular/core';
import { Doggo } from '../models/doggo';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {
  @Input() dogData: Doggo;
  constructor() {}

  ngOnInit() {}
}
