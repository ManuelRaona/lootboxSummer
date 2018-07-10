import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FaqComponent },

    { path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
