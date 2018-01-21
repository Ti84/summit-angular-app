import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about', component: AboutUsComponent },
    { path: '**', redirectTo: 'home' }
] 
export const routing = RouterModule.forRoot(routes);