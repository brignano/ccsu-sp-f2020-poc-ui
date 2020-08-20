import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Claim } from '../claim-card/claim.model';

@Injectable()
export class ClaimsService {
  constructor(private http: HttpClient) { }

  getClaims(policyNumber?: string, category?: string): Observable<object> {
    const {claims_api} = environment;
    const params = this.getParams(policyNumber, category);
    return this.http.get(claims_api + params, {});
  }

  addClaim(claim: Claim): Observable<Claim> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const {claims_api} = environment;
    return this.http.post(claims_api, JSON.stringify(claim), {headers});
  }

  getLatLng(location: string): Observable<object> {
    const {geocode_api} = environment;
    const params = '?location=' + location;
    return this.http.get(geocode_api + params);
  }

  getParams(policyNumber?: string, category?: string): string {

    if ((category === null || category === '') && (policyNumber === null || policyNumber === '')) {
      return 'all';
    }

    let returnString = '?';

    if (policyNumber !== null && policyNumber !== '') {
      returnString += 'policy_number=' + policyNumber + '&';
    }
    if (category !== null && category !== '') {
      returnString += 'category=' + category;
    }
    return returnString;
  }
}
