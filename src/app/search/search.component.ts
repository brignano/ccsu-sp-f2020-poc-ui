import { Component, Input, OnInit } from '@angular/core';
import { Claim } from '../claim-card/claim.model';
import { ClaimsService } from '../claims/claims.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() claims: Claim[];

  constructor(private claimsService: ClaimsService) {
  }

  ngOnInit(): void {
  }

  getClaims(policyNumber?: string, category?: string): void {
    this.claimsService.getClaims(policyNumber, category)
      .subscribe((data: any) => this.claims = data);
  }

}
