import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { AboutComponent } from './about/about.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { SkillsComponent } from './skills/skills.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HomeFooterComponent,
    AboutComponent,
    AboutSectionComponent,
    SkillsComponent,
    TrajectoryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
