import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClaimCardComponent } from './claim-card/claim-card.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ClaimsComponent } from './claims/claims.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimCardComponent,
    SearchComponent,
    AddComponent,
    HeaderComponent,
    ClaimsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
