import { Component, OnInit, ViewChild } from '@angular/core';
import { Claim } from '../claim-card/claim.model';
import { ClaimsService } from '../claims/claims.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  claim = {} as Claim;
  @ViewChild('myForm') formValues; // Added this

  constructor(private claimsService: ClaimsService) { }

  ngOnInit(): void {
  }

  addClaim(): void {
    this.claimsService.addClaim(this.claim).subscribe(
      () => this.formValues.reset(),
      (err) => console.log(err)
    );
  }
}
