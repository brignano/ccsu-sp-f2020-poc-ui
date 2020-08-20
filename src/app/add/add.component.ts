import { Component, OnInit, ViewChild } from '@angular/core';
import { Claim } from '../claim-card/claim.model';
import { ClaimsService } from '../claims/claims.service';
import { LatLng } from '../claim-card/latlng.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  claim = {} as Claim;
  @ViewChild('myForm') formValues; // Added this
  latlng: LatLng;

  constructor(private claimsService: ClaimsService) { }

  ngOnInit(): void {
    this.claim.category = this.claim.category || '';
  }

  addClaim(): void {
    this.claimsService.addClaim(this.claim).subscribe(
      () => {},
      (err) => console.log(err)
    );
  }

  getLatLng(): void {
    this.claimsService.getLatLng(this.claim.location).subscribe(
      (res) => this.latlng = res,
      () => this.latlng = null,
    );
  }
}
