import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BeersComponent } from './components/beers/beers.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { HttpService } from './services/http.service';

const routes: Routes = [
  { path: '', component: BeersComponent },
  { path: 'search/:searchTerm', component: BeersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeersComponent,
    ButtonComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
