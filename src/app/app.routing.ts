import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuyComponent } from './components/buy/buy.component';

const appRoutes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buy', component: BuyComponent },

    { path:'**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
