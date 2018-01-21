import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { routing } from './app.routing-module';
import { NewsModule } from './news/news.module';
import { AboutUsModule } from './about-us/about-us.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HomeModule,
    NewsModule,
    AboutUsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
