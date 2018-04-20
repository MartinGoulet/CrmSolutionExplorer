import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RapportComponent } from './pages/rapport/rapport.component';

const appRoutes: Routes = [
  { path: 'rapport', component: RapportComponent},
  { path: 'rapport2', component: RapportComponent},
  { path: '',
    redirectTo: '/rapport',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    RapportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
