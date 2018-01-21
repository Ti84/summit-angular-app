import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { routing } from './app.routing-module';
import { NewsModule } from './news/news.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HomeModule,
    NewsModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
