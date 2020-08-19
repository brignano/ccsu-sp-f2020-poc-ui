import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim-card/claim.model';
import { ClaimsService } from '../claims/claims.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  claim = new Claim();

  constructor(private claimsService: ClaimsService) { }

  ngOnInit(): void {
  }

  addClaim(): void {
    this.claimsService.addClaim(this.claim).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
