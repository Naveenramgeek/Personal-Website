import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { DisplayImageComponent } from './home/display-image/display-image.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { QuoteComponent } from './home/quote/quote.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { AboutComponent } from './about/about.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DisplayImageComponent,
    WelcomeComponent,
    QuoteComponent,
    HomeFooterComponent,
    AboutComponent,
    AboutSectionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
