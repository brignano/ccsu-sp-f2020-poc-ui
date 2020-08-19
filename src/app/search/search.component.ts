import { Component, Input, OnInit } from '@angular/core';
import { Claim } from '../claim-card/claim.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() claims: Claim[];

  constructor() { }

  ngOnInit(): void {
  }

}
