import { Component, Input, OnInit } from '@angular/core';
import { Claim } from './claim.model';

@Component({
  selector: 'app-claim-card',
  templateUrl: './claim-card.component.html',
  styleUrls: ['./claim-card.component.scss']
})

export class ClaimCardComponent implements OnInit {
  @Input() claim: Claim;

  constructor() { }

  ngOnInit(): void {
  }

}
